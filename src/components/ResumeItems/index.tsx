import { IconType } from 'react-icons'
import * as C from './styles'

const ResumeItem = ({title}:{title: string}, props: {Icon: IconType|string|any}) => (
    // const ResumeItem = ({title}:{title: string}, {Icon}:{Icon:IconType},{value}:{value:any}) => (
    <C.Container>
        <C.Header>
            <C.HeaderTitle>{title}</C.HeaderTitle>
            {props.Icon}
        </C.Header>
        <C.Total>1000</C.Total>
        {/* <C.Total>{value}</C.Total> */}
    </C.Container>
)

export default ResumeItem