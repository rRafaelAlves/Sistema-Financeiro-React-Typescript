import styled from "styled-components";

export const Table = styled.table`
width: 100%;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #bbb;
border-radius: 10px;
margin-top: 20px;
`

export const TableHeaderColumn = styled.th<{ width?: number}>`
border: 1px: solid black;
padding: 10px 0;
text-align: left;
width: ${props => `${props.width ?  `${props.width}` :  'auto'}`}
`


