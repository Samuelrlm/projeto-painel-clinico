import { useState } from "react"
import { FaBars } from "react-icons/fa";
import { Sidebar } from "../../components/Sidebar";
import { Main, MainContainer, Superior, TituloMews } from "../Painel/styles";


export function PainelNone(){
    const [sidebar, setSidebar] =useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return(
        <div className="container">
            <Superior>
                <div className="sidebar" id="side-bar">
                    <FaBars id="btn-side" onClick={showSidebar}/>
                    {sidebar && <Sidebar active={setSidebar}/>}
                </div>
                <TituloMews>
                    <h1>Escala de MEWS: </h1>
                </TituloMews>
                <div className="logo-hsc" id="logo-hsc">
                    <img src="https://saocamilofortaleza.org.br/intranet/wp-content/uploads/2021/04/icone_logo.png" alt=""  height={35}/>
                </div>
            </Superior>

            <MainContainer>
                <Main>
                    
                </Main>
            </MainContainer>
        </div>
        
    )
}