import styled from "styled-components"
import "@fontsource/space-grotesk"

export const Btn = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    width: 30%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    transition: 0.4s;
    cursor: pointer;
    font-family: "Space Grotesk";
    
    &:hover{
        background-color: #978fec;
    }

    .center{
        text-align: center;
        width: 100%
    }
`