import styled from "styled-components";
import "@fontsource/space-grotesk"

export const Pai = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 99%;
    height: 99vh;
    margin: 3px;

    background-color: #aeb0bd;

    @media (max-width: 896px) {
        display: flex;
        flex-direction: column;
        gap: 2%;
    }
`;


export const DivImagem = styled.div`
    height: 100%;
    width: 50%;

    img{
        width: 100%;
        height: 100%;
    }

    @media (max-width: 896px){
        height: 40%;
        width: 100%;

        img{
            width: 100%;
            height: 100%;
        }
    }
`

export const DivStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 50%;
    font-family: "Space Grotesk";

    @media (max-width: 896px){
        display: flex;
        justify-content: flex-start;

        height: 95%;
        width: 100%;
    }
`;

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    width: 80%;   
`;

export const SpanStyled = styled.span`
    bottom: 5px;
    font-size: 28px;
    font-family: "Space Grotesk";
`;