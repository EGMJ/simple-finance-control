import React, {useState, useEffect} from 'react'
import GlobalStyle from "./styles/global"
import Header from "./components/Header"
import Resume from "./components/Resume"
import Form from "./components/Form"

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionList, setTransactionList ] = useState(
    data ? JSON.parse(data) : []
  );
  
  const [income, setIncome] = useState<number|string>(0);
  const [expense, setExpense] = useState<number|string>(0);
  const [total, setTotal] = useState<number|string>(0);

  useEffect(()=>{
    
    const amountExpense = transactionList
    .filter((item:any)=>item.expense)
    .map((transaction:any) => Number(transaction.amount));
    
    const amountIncome = transactionList
    .filter((item:any) => !item.expense)
    .map((transaction:any) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc:any, cur:any) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc:any, cur:any) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`R$ ${Number(income) <Number(expense) ? "-" : "" }R$ ${total}`);

  },[transactionList]); 
  
  const handleAdd = ({ transaction }: { transaction: any }) =>{
    const newArrayTransactions = [...transactionList, transaction];

    setTransactionList(newArrayTransactions);

    localStorage.setItem("transaction", JSON.stringify(newArrayTransactions))

  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total}/>
      <Form handleAdd={handleAdd} transactionList={transactionList} setTransactionList={setTransactionList}/>
      <GlobalStyle />
    </>
  )
}

export default App

