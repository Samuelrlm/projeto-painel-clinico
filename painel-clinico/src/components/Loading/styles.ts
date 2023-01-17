import styled from "styled-components";

export const Efeito = styled.div`
    body {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    transform: scale(5);
    }

    .c-loader {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #2839DA;
    height: 50px;
    width: 50px;
    }

    @keyframes is-rotating {
    to {
        transform: rotate(1turn);
    }
}
`