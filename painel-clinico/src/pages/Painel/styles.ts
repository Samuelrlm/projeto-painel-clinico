import styled from "styled-components";


export const Superior = styled.div`
    display: flex;
    height: 40px;
    background: linear-gradient(to right, #070049, #2166FC);
    color: white;
    align-items: center;
    box-shadow: 0 0 20px 3px;
    #side-bar{
        margin-left: 1rem;
        font-size: 24px;
    }
    #btn-side{
        cursor: pointer;
    }
    #logo-hsc{
        margin-right: 1rem;
    }
`
export const TituloMews = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 600px) {
        #titulo-es{
            display: none;
        }
        font-size: small;
        
    }
`

export const CardPaciente = styled.div`
    background: #fff;
    width: 250px;
    border-radius: 5px;
    color: black;
    box-shadow: 4px 4px 7px 0px rgba(194,194,194,0.52);
    #nome-paciente{
        margin-left: 1rem;
        color: black;
        font-weight: 800;
    }
    #dt-info{
        font-size: small;
        margin-left: 1rem;
        font-weight: 500;
        p{
            font-style: italic;
        }
    }
    @media (max-width: 600px) {
        margin-left: 0;
        width: 300px;
        
    }
`

export const ListaPacientesUl = styled.ul`
    
    list-style: none;
    display: grid;
    color: black;
    column-gap: 1rem;
    row-gap: 1rem;
    margin-left: 5rem;
    grid-template-columns:  repeat(auto-fit, minmax(230px, 1fr));
    #nome-paciente{
        white-space: nowrap;
        overflow: hidden;
        margin-right: 1rem;
    }
    @media (max-width: 600px) {
        margin-left: 2.5rem;
    }
`

export const PacientesLi =styled.li`
    display: flex;
    flex-direction: column;
    color: black;
    background: white;
    width: 100%;
    width: 250px;
    border-radius: 6px;
    p{
        font-size: smaller;
        
    }
    #dt-info{
        margin-top: 10px;
    }
    @media (max-width: 600px) {
        width: 300px;
        height: 120px;
    }
`

export const DadosPaciente = styled.div`
    margin-top: 5px;
    margin-left: 1rem;
`

export const Info = styled.div`
    margin-top: 5px;
    display: flex;
    gap: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    @media (max-width: 600px) {
        margin-top: 20px;
    }
`
export const Main = styled.div` 
    height: 90%;
    width: 95%;
    margin-top: 5px;
    
`
export const MainContainer = styled.div`
    background: #e0e0e0;
    width: 99vw;
    height: 99vh;
    display: flex;
`

export const DataTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    height: 100%;
    width: 100%;
    font-size: small;
    b{
        color: black;
    }
    p{
        color: blue;
        font-style: italic;
    }
`
