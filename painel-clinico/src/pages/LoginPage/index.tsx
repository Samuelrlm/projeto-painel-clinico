import { BtnsLogin, CardLogin, ContainerLogin, InfoLogin, Topo } from "./styles";

export function LoginPage(){
    const handleClickVoltar = () => {
        window.history.back();
      }

    return(
        <ContainerLogin>
            <CardLogin>
                <Topo>
                    <h2 id="titulo-acess">Detalhes do paciente</h2>
                    <img src="https://saocamilofortaleza.org.br/intranet/wp-content/uploads/2021/04/logo_sao_camilo_fortaleza300.png" alt="" height={75}/>
                </Topo>
                <InfoLogin>
                    <form action="">
                        <p>Usuário</p>
                        <input type="text" id="user" required placeholder="Usuário"/>
                        <p>Senha</p>
                        <input type="password" name="" id="pass" required placeholder="Senha"/>
                        <BtnsLogin>
                            <button id="btn-acesso" type="submit">ENTRAR</button>
                            <button id="btn-voltar" onClick={handleClickVoltar} >VOLTAR</button>
                        </BtnsLogin>
                    </form>
                </InfoLogin>
            </CardLogin>
        </ContainerLogin>
    )
}