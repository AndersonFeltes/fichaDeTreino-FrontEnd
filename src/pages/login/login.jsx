import { Pai, DivStyled, DivImagem, DivInput, SpanStyled } from "./loginStyle"
import { InputStyled } from "../../components/input/inputStyled"
import { Btn }  from "../../components/button/btnStyled"
import { Link } from "react-router-dom"
import imgLogin from "../../assets/img-login.jpg"

export function Login(){
    return(
        <Pai>
            <DivImagem>
                <img src={imgLogin}/>
            </DivImagem>
            <DivStyled>
                <DivInput>
                    <SpanStyled>Informe seu e-mail:</SpanStyled>
                    <InputStyled name="email" type="email" placeholder="E-mail"/>
                    <SpanStyled>Informe sua senha:</SpanStyled>
                    <InputStyled name="password" type="password" placeholder="Senha"/>
                    <Btn type='submit'>Entrar</Btn>
                    <label>Não tem uma conta? <Link to="/signup">Inscreva-se</Link></label>
                </DivInput>
            </DivStyled>
        </Pai>
    )
}