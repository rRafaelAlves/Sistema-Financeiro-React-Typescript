import styled from "styled-components";


export const Container = styled.div`
flex: 1;
`

export const Title = styled.div`
text-align: center;
color: #888;
font-weight: bold;
margin-bottom: 5px;

`

export const Info = styled.div<{color?: string | undefined}>`
text-align: center;
font-weight: bold;
color: ${props => props.color}

`