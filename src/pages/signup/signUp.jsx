import { Pai, DivStyled, DivImagem, DivInput, SpanStyled, DivBtn } from "./signUpStyled"
import { InputStyled } from "../../components/input/inputStyled"
import { Btn }  from "../../components/button/btnStyled"
import { Link } from "react-router-dom"


import imgLogin from "../../assets/img-login.jpg"

export function SignUp(){
    return(
        <Pai>
            <DivImagem>
                <img src={imgLogin}/>
            </DivImagem>
            <DivStyled>
                <DivInput>
                    <SpanStyled>Informe seu nome:</SpanStyled>
                    <InputStyled style={{ fontSize: '16px' }} name="name" type="text" placeholder="Nome"/>
                    <SpanStyled>Informe seu nome de usuário desejado:</SpanStyled>
                    <InputStyled style={{ fontSize: '16px' }}  name="userName" type="text" placeholder="Nome de usuário"/>
                    <SpanStyled>Informe seu e-mail:</SpanStyled>
                    <InputStyled style={{ fontSize: '16px' }}  name="email" type="email" placeholder="E-mail"/>
                    <SpanStyled>Informe sua senha:</SpanStyled>
                    <InputStyled style={{ fontSize: '16px' }}  name="password" type="password" placeholder="Senha"/>
                    <SpanStyled>Confirme sua senha:</SpanStyled>
                    <InputStyled style={{ fontSize: '16px' }}  name="password" type="password" placeholder="Confirmar senha"/>
                    <DivBtn>
                        <Btn><Link to="/">Voltar</Link></Btn>
                        <Btn type='submit'>Cadastrar</Btn>
                    </DivBtn>
                </DivInput>
            </DivStyled>
        </Pai>
    )
}