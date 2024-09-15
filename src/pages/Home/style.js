import styled from "styled-components";

export const Container = styled.section`

`

export const Backgroud = styled.div`
   position: relative;
    height: 100vh;
    background-color: #000;
    border-radius: 0 0 1rem 1rem;
    z-index: 0;
    box-shadow: 0 0 5rem 0.5rem #111111;
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
        position: relative;
        text-decoration: none;
        font-weight: bold;
        font-size: clamp(1rem, 3vw, 24px);
        &::after{
            content: "";
            background-color: #fff;
            border-radius: 1rem;
            width: 3px;
            height: 3px;
            position: absolute; 
            bottom: -3px;
            left: 0;
            transition: 1s ease-in-out;

        }
        &:hover{
            &::after{
                width: 100%;
                transition: 0.5s ease-in-out;
            }
        }
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
        h2{
            font-size: 3.6vw;
        }

        p{
            font-size: 2vw;
        }
    }
    @media (max-width: 600px) {
        flex-direction: column-reverse;
        gap: 3rem;
        img{
            width: 50%;
        }

        span{
            h2{
                font-size: clamp(1.5rem, 3vw, 24px);
            }
            p{
                font-size: clamp(1rem, 3vw, 24px);
            }
        }
    }
`

export const Menu = styled.div`
    height: 100vh;
    width: 100%;

    ul{
        background-color: #e3e3e3;

        border-left: 12rem;
        list-style-type: none;


        display: flex;
        align-items: center;
        justify-content: space-evenly;
        li{
            cursor: pointer;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            padding: 1rem ;
            img{
                width: clamp(2.5rem, 4vw, 15rem);
            }
            p{
                font-size: clamp(1rem, 3vw, 1.5rem);
                color: #000;
            }
        }
    }

`

export const JapaneseFood = styled.div` 
    box-shadow: 0 0 5rem 0.5rem #111111;
    background-color: #111111;
    border-radius:1rem 1rem 0 0 ;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    flex-wrap: wrap;
`

export const FoodCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    background-color: #333333;
    border-radius: 1rem;
    padding: 1rem;
    gap: 1rem;

    img{
    
        width: clamp(100px, 20vw, 500px);
        border-radius: 1rem;
        z-index: -1;
    }

    a{
        text-align: center;
        background-color: #008000;
        padding: 1rem;
        text-decoration: none;
        border-radius: 1rem;
        font-weight: bold;
    }
    @media (min-width: 1000px){
        flex-direction: column;
        align-items: flex-start;
        a{
            padding: 0.8rem;
            width: 100%;
        }
    }

`

export const FoodInfos = styled.div`
    p{
        color: #fff;
    }

    span{
        color: #00FF00;
    }
`