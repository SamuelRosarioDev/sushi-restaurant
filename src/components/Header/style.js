import styled from "styled-components";

export const ContainerHeader = styled.header`
    //position: fixed;
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;

    h3{
        font-size: clamp(1rem, 3vw, 24px);
    }
`