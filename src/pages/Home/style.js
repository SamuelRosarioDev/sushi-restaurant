import styled from "styled-components";

export const Container = styled.section`

`

export const Backgroud = styled.div`
   position: relative;
    height: 100vh;
    overflow-x: hidden;
    background-color: #000;
    z-index: 0;
    .backgroundImg {
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        opacity: 0.4;
    }
`;

export const HeaderLinks = styled.div`

    display: flex;
    gap: 1rem; 
    a{
        text-decoration: none;
        color: #000;
        font-weight: bold;
    }
`

export const Presentation = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 89%;
    padding: 0 5vw;
    img{
        width: 30%;
        border-radius: 50%;
    }
    span{
        text-align: center;
        color: #fff;
        h2{
            font-size: 3.6vw;
        }

        p{
            font-size: 2vw;
        }
    }
`