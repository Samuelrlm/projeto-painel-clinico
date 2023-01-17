import styled from "styled-components";

export const  Container = styled.div`
    #titulo{
        display: flex;
        color: black;
        h4{
            margin-top: 0.5rem;
            margin-left: 1rem;
        }
    }
    background-color: white;
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    width: 300px;
    animation: showSidebar .4s;
    box-shadow:0px 10px 40px -12px #00000056;
    svg{
        position: fixed;
        color: black;
        width: 35px;
        height: 35px;
        margin-left: 16rem;
        margin-top: 0.6rem;
        cursor: pointer;
        animation: showClose .6s;
    }

    @keyframes showSidebar {
        from{
            opacity: 0;
            width: 0;
        }
        to{
            opacity: 1;
            width: 300px;
        }
    }
    @media (max-width: 600px) {
        #titulo{
            h4{
                margin-top: 0.8rem;
            }
        }
    }
`

export const Btns = styled.div`
    position: fixed;
    width: 270px;
    justify-content: center;
    align-items: center;
    button{
        margin-bottom: 8px;
        width: 100%;
        height: 40px;
        border-radius: 5px;
        margin-left: 1rem; 
        border: none;
        color: white;
    }
    #btn-filtrar{
        background:linear-gradient(to right, #2412c7, #3C85AF);
        margin-top: 60px;
        font-weight: 800;
        transition: 300ms;
        box-shadow:0px 10px 40px -12px #0056F556;
        transition: 300ms;

    }
    #btn-filtrar:hover{
        box-shadow: none;
        background:linear-gradient(to right, #5347B9, #6A93AA);
    }
    @media (max-width: 600px) {
        #btn-filtrar{
            margin-top: 1rem;
        }
    }
    
`

export const Content = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    height: 65vh;
    gap: 12px;
    overflow:auto;
    div{
        display: flex;
        
    }
    p{
        margin-left: 9px;
        color: black;
        font-size: medium;
    }
    input{
        -webkit-appearance: none;
        position: relative;
        border-radius: 25px;
        width: 45px;
        height: 25px;
        background-color: #ccc;
        transition: backgroud .3s;
        outline: none;
        cursor: pointer;
        
    }
    input::after{
        content: '';
        position: absolute;
        top: 50%;
        left: 30%;
        height: 1.20rem;
        width: 1.20rem;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background-color: rgb(255,255,255);
        transition: left .3s;
    }
    input:checked{
        background-color: #0090E4;
    }
    input:checked::after{
        left: 70%;
    }
`