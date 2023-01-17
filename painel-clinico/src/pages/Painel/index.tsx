import { useEffect, useState } from "react"
import { CardPaciente, DadosPaciente, DataTime, Info, ListaPacientesUl, Main, MainContainer, PacientesLi, Superior, TituloMews } from "./styles";
import { FaBars } from "react-icons/fa";
import { Sidebar } from "../../components/Sidebar";
import { useParams } from "react-router-dom";
import api from "../../services/api";

export function PainelPage(){
    const [sidebar, setSidebar] =useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const [pacientes, setPacientes] = useState([]);
    const {cd_setor} = useParams()
    const dataHora = new Date().toLocaleString()

    useEffect(() => {
        const interval = setInterval(()=>{
            fetch(`${api}/api/news?cd_setor=${cd_setor}`)
            .then(response => response.json())
            .then(data => {
            setPacientes(data)
            })
        },1000)
        return () => clearInterval(interval)

    },[pacientes])

    let nomeSetor
    if(cd_setor === '119'){
        nomeSetor = 'UTI CARDIOLÓGICA'
    }
    if(cd_setor === '117'){
        nomeSetor = 'U.I 1º ANDAR'
    }
    if(cd_setor === '118'){
        nomeSetor = 'U.I 3º OESTE'
    }
    if(cd_setor === '107'){
        nomeSetor = 'U.I 5º NORTE'
    }
    if(cd_setor === '111'){
        nomeSetor = 'U.I 5º SUL'
    }
    if(cd_setor === '109'){
        nomeSetor = 'U.I 6º NORTE'
    }
    if(cd_setor === '112'){
        nomeSetor = 'U.I 6º SUL'
    }
    if(cd_setor === '256'){
        nomeSetor = 'UTI CLÍNICA II'
    }
    if(cd_setor === '121'){
        nomeSetor = 'UTI CLÍNICA'
    }
    if(cd_setor === '301'){
        nomeSetor = 'UTI CLÍNICA III' 
    }
    if(cd_setor === '306'){
        nomeSetor = 'UTI CLINICA IV' 
    }
    if(cd_setor === '211'){
        nomeSetor = 'OBSERVAÇÃO PA' 
    }
    if(cd_setor === '108'){
        nomeSetor = 'U.I 7º NORTE' 
    }
    return(
        <div className="container">
            <Superior>
                <div className="sidebar" id="side-bar">
                    <FaBars id="btn-side" onClick={showSidebar}/>
                    {sidebar && <Sidebar active={setSidebar}/>}
                </div>
                <TituloMews id="titulo-superior">
                    <div className="titulo-escala" id="titulo-es">
                        <h1>Escala de MEWS:</h1>
                    </div>
                     <div className="titulo-setor">
                        <h1>{nomeSetor}</h1>
                    </div> 
                </TituloMews>
                <div className="logo-hsc" id="logo-hsc">
                    <img src="https://saocamilofortaleza.org.br/intranet/wp-content/uploads/2021/04/icone_logo.png" alt=""  height={35}/>
                </div>
            </Superior>
            <DataTime>
                <p><b>Ultima atualização: </b>{dataHora}</p>
            </DataTime>
            <MainContainer>
                <Main>
                    <ListaPacientesUl>
                        {pacientes.map(paci =>{
                            let corDeFundo
                            let corLetra
                            let vldor
                            const dataColeta = paci.dt_atualizacao_news
                            const dataParametro = new Date(Date.parse(dataColeta));
                            const dataColetaFormatada = dataParametro.toLocaleString();

                            if(paci.qt_pontuacao_news == 0){
                                corDeFundo = 'linear-gradient(180deg, #7abfff 0, #7abfff 16.67%, #7abfff 33.33%, #7abfff 50%, #7abfff 66.67%, #7abfff 83.33%, #7abfff 100%)';
                                corLetra = '#000000'
                            }
                            if(paci.qt_pontuacao_news >= 1 && paci.qt_pontuacao_news <= 3){
                                corDeFundo = 'linear-gradient(180deg, #8fff95 0, #8fff95 16.67%, #8fff95 33.33%, #8fff95 50%, #8fff95 66.67%, #8fff95 83.33%, #8fff95 100%)';
                                corLetra = '#000000'
                            }
                            if((paci.qt_pontuacao_news >= 4 && paci.qt_pontuacao_news <= 5) || paci.qt_pa_sistologia <= 70 || paci.qt_freq_cardiaca >= 130 || paci.qt_freq_resp >= 30){
                                corDeFundo = 'linear-gradient(180deg, #fdff89 0, #fdff89 16.67%, #fdff89 33.33%, #fdff89 50%, #fdff89 66.67%, #fdff89 83.33%, #fdff89 100%)';
                                corLetra = '#000000'
                            }
                            if(paci.qt_pontuacao_news >= 6){
                                corDeFundo = 'linear-gradient(180deg, #ff7171 0, #ff7171 16.67%, #ff7171 33.33%, #ff7171 50%, #ff7171 66.67%, #ff7171 83.33%, #ff7171 100%)';
                                corLetra = '#000000'
                            }
                            if(paci.qt_escala_dor === null){
                                vldor = 'N/A'
                            }else{
                                vldor = paci.qt_escala_dor 
                            }
                            return(
                                <CardPaciente>
                                    <div className="tituloNome" id="nome-paciente" key={paci.nr_atendimento}>
                                        <p>{paci.nm_pessoa_fisica}</p>
                                    </div>
                                    <PacientesLi style={{backgroundImage: corDeFundo, color: corLetra}}>
                                        <DadosPaciente>
                                            <p><b>Atendimento: <i>{paci.nr_atendimento}</i></b></p>
                                            <p><b>Leito: <i>{paci.cd_unidade}</i></b></p>
                                            <p><b>Idade: <i>{paci.ds_idade}</i></b></p>
                                            <p><b>PT MEWS: <i>{paci.qt_pontuacao_news}</i></b></p>
                                        </DadosPaciente>
                                        <Info>
                                            <p><b>FC: <i>{paci.qt_freq_cardiaca}</i></b></p>
                                            <p><b>PAS: <i>{paci.qt_pa_sistologia}</i></b></p>
                                            <p><b>FR: <i>{paci.qt_freq_resp}</i></b></p>
                                            <p><b>TEMP: <i>{paci.qt_temp}</i></b></p>
                                            <p><b>DOR: <i>{vldor}</i></b></p>
                                        </Info>
                                    </PacientesLi>
                                    <div className="datainfo" id="dt-info">
                                            <p><b>Data do MEWS:</b> <b>{dataColetaFormatada}</b></p>
                                    </div>
                                </CardPaciente>        
                            )
                        })}
                    </ListaPacientesUl>
                </Main>
            </MainContainer>
        </div>
        
    )
}