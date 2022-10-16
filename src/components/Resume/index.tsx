import ResumeItem from '../ResumeItems';
import * as C from './styles';

import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from 'react-icons/fa'


const Resume = ({}) =>{
    // const Resume = ({ income, expense, total }) =>{
    return(
        <C.Container>
            {/* <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
        <ResumeItem title="Total" Icon={FaDollarSign} value={total}/> */}
        
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} />

            <ResumeItem title="Entradas" /> 
            <ResumeItem title="Saídas"/>
            <ResumeItem title="Total"/>
        </C.Container>
        )
}

export default Resume