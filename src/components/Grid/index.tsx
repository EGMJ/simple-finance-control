import GridItem from '../GridItem'
import * as C from './styles'

const Grid = ({ itens, setItens } :{itens:any, setItens:any}) => {
    const onDelete = (ID: any) => {
        const newArray = itens.filter((transaction: { id: any; }) => (transaction.id) !== ID);
        setItens(newArray);
        localStorage(setItens("transaction", JSON.stringify(newArray)))
    }
    
    return (
        <C.Table>
            <C.Thead>
                <C.Tr>
                    <C.Th width={40}>Descrição</C.Th>
                    <C.Th width={40}>Valor</C.Th>
                    <C.Th width={10} alignCenter>Tipo</C.Th>
                    <C.Th width={10}></C.Th>
                </C.Tr>
            </C.Thead>
            <C.Tbody>
                {itens?.map((item: any, index: any) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
            </C.Tbody>
        </C.Table>
    )
}

export default Grid;
