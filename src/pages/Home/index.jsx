import backgroundSushi from "../../assets/img/backgroundSushi.jpg";
import photoSushi from "../../assets/img/sushiPhoto.jpg";

import iconSushi from "../../assets/icons/sushi.png";
import iconRamen from "../../assets/icons/ramen.png";
import iconTemaki from "../../assets/icons/temaki.png";
import iconBarcaDeSushi from "../../assets/icons/barcadesushi.png";

import imgSushiDeSalmao from '../../assets/listJaponeseFood/sushiDeSalmao.png'

import Header from "../../components/Header";
import {
	Container,
	Backgroud,
	HeaderLinks,
	Presentation,
	Menu,
	JapaneseFood,
	FoodCard,
    FoodInfos,
} from "./style";

export default function Home() {
	return (
		<Container>
			<Backgroud>
				<img
					className="backgroundImg"
					src={backgroundSushi}
					alt="background sushi"
				/>
				<Header>
					<h3>Restautante Sushi</h3>
					<HeaderLinks>
						<a href="#d">Agendar</a>
						<a href="#menu">Cardápio</a>
					</HeaderLinks>
				</Header>
				<Presentation>
					<span>
						<h2>Experimente a culinária japonesa</h2>
						<p>
							Diversas refeições com tematicas japonesas e uma variedade gigante
							de sabores a descobrir!
						</p>
					</span>
					<img src={photoSushi} alt="foto de sushi" />
				</Presentation>
			</Backgroud>
			<Menu id="menu">
				<ul>
					<li>
						<img src={iconSushi} alt="icon sushi" />
						<p>Sushi</p>
					</li>
					<li>
						<img src={iconRamen} alt="icon ramen" />
						<p>Ramen</p>
					</li>
					<li>
						<img src={iconTemaki} alt="icon temaki" />
						<p>Temaki</p>
					</li>
					<li>
						<img src={iconBarcaDeSushi} alt="icon barca de sushi" />
						<p>Combos</p>
					</li>
				</ul>
				<JapaneseFood>
					<FoodCard>
						<img src={imgSushiDeSalmao} alt="sushi de salmão" />
						<FoodInfos>
                            <span>Disponivel</span>
							<p>Sushi de salmão 9 pec</p>
                            <span>R$30,00</span>
						</FoodInfos>
                        <a href="#agendar">Agendar</a>
					</FoodCard>
                    <FoodCard>
						<img src={imgSushiDeSalmao} alt="sushi de salmão" />
						<FoodInfos>
                            <span>Disponivel</span>
							<p>Sushi de salmão 9 pec</p>
                            <span>R$30,00</span>
						</FoodInfos>
                        <a href="#agendar">Agendar</a>
					</FoodCard>
                    <FoodCard>
						<img src={imgSushiDeSalmao} alt="sushi de salmão" />
						<FoodInfos>
                            <span>Disponivel</span>
							<p>Sushi de salmão 9 pec</p>
                            <span>R$30,00</span>
						</FoodInfos>
                        <a href="#agendar">Agendar</a>
					</FoodCard>
				</JapaneseFood>
			</Menu>
		</Container>
	);
}
