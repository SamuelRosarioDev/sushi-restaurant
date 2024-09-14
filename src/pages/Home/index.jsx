import backgroundSushi from '../../assets/img/backgroundSushi.jpg'
import photoSushi from '../../assets/img/sushiPhoto.jpg'

import Header from '../../components/Header';
import { Container, Backgroud, HeaderLinks, Presentation } from "./style";

export default function Home() {
    return (
        <Container>
            <Backgroud>
            <img className='backgroundImg' src={backgroundSushi} alt="background sushi" />
            <Header>
                <h3>Restautante Sushi</h3>
                <HeaderLinks>
                    <a href="#d">Agendar</a>
                    <a href="#d">Cardápio</a>
                </HeaderLinks>
            </Header>
            <Presentation>
                <span>
                    <h2>Experimente a culinária japonesa</h2>
                    <p>Diversas refeições com tematicas japonesas e uma variedade gigante de sabores a descobrir!</p>
                </span>
                <img src={photoSushi} alt="foto de sushi" />
            </Presentation>

            </Backgroud>   

        </Container>
    );
}
