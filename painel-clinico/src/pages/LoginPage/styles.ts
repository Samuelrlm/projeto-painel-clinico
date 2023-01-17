import styled from "styled-components";

export const ContainerLogin = styled.div`
    background: #E4E4E4;
    height: 100vh;
    width: 100vw;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Topo =styled.div`
    margin-top: 1rem;
    #titulo-acess{
        margin-bottom: 1rem;
    }
`

export const CardLogin =styled.div`
    background: #FFFFFF;
    height: 500px;
    width: 450px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow:0px 10px 40px -12px #00000056;
    input{
        width: 400px;
        height: 40px;
        border-radius: 5px;
        border: 2.2px solid #1E22FF;    
        box-shadow:0px 10px 40px -12px #00000056;
        transition: all 200ms ease-in;
        padding: 1rem;
        font-size: medium;
        margin-bottom: 1rem;
        ::placeholder{
            font-style: italic;
        }
        :hover{
            border-color: #898BFF;
            box-shadow: none;
        }
        :focus{
            border-color: #01C0E2;
            outline: none;
            box-shadow: none;
        }
    }
    p{
        margin-bottom: 6px;
        font-weight: 600;
    }

    @media (max-width: 600px) {
        width: 90%;
        input{
            width: 300px;
        }
    }
`

export const BtnsLogin = styled.div`
    margin-top: 2rem;
    button{
        border: none;
        width: 400px;
        height: 40px;
        background: #fff;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        color: #fff
    }
    #btn-acesso{
            background:linear-gradient(to right, #2412c7, #3C85AF);
            margin-bottom: 1rem;
        }
    #btn-voltar{
        background:linear-gradient(to right, #E02B2B, #FF6060);

    }
    @media (max-width: 600px) {
        button{
            width: 300px;
        }
    }
`

export const InfoLogin  = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`





/* 
1. When the input is in the focus state
reduce the size of the label and move upwards 

2. Keep label state when content is in input field 
*/

