import { useState } from 'react';
import Grid from '../Grid';

import * as C from './styles';

const Form = ({ handleAdd, setTransactionList, transactionList } : 
  { handleAdd: any, setTransactionList:any, transactionList:any }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState<string|number>("")
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000)

    const handleSave = () =>{
        if(!desc){
            alert("Informe a descrição")
            return;
        }else if(!amount){
          alert("Informe o valor!")
          return;
      }else if(amount < 1){
            alert("O valor tem que ser positivo!")
            return;
        }

        const transaction = {
          id: generateID(),
          desc: desc,
          amount: amount,
          expense: isExpense
        }

        setDesc("")
        setAmount("")
        handleAdd(transaction);
        
        console.log(transaction)

      }

    return(
      <>
          <C.Container>
            <C.InputContent>
              <C.Label>Descrição</C.Label>
              <C.Input value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </C.InputContent>

            <C.InputContent>
              <C.Label>Valor</C.Label>
              <C.Input value={amount} type="number" onChange={(e) => setAmount(e.target.value)}/>
            </C.InputContent>

            <C.RadioGroup>
              <C.Input 
              type={'radio'} 
              id="rIncome" 
              defaultChecked 
              name='group1' 
              onChange={()=> setExpense(!isExpense)}/>
              <C.Label htmlFor='rIncome'>Entrada</C.Label>

              <C.Input 
              type={'radio'} 
              id="rExpenses" 
              name='group1' 
              onChange={()=> setExpense(!isExpense)}/>
              <C.Label htmlFor='rExpenses'>Saídas</C.Label>
            </C.RadioGroup>

            <C.Button onClick={handleSave}>ADICIONAR</C.Button>
          </C.Container>

          <Grid itens={transactionList} setItens={setTransactionList}/>

        </>
    )
}

export default Form