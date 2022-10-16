import styled from "styled-components"

export const Tr = styled.tr``;

type propAlign = {
    alignCenter: any;
}

export const Td = styled.td.attrs((props: propAlign) => ({
    alignCenter: props.alignCenter}))<propAlign>`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    word-break: break-all;

    svg{
        width: 18px;
        height: 18px;
    }
`;
