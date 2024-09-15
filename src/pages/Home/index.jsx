import backgroundSushi from "../../assets/img/backgroundSushi.jpg";
import photoSushi from "../../assets/img/sushiPhoto.jpg";

import iconSushi from "../../assets/icons/sushi.png";
import iconRamen from "../../assets/icons/ramen.png";
import iconTemaki from "../../assets/icons/temaki.png";
import iconBarcaDeSushi from "../../assets/icons/barcadesushi.png";

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

import React, { useState, useEffect } from 'react';


export default function Home() {

    const [produtos, setProdutos] = useState([]);
    const [selectedType, setSelectedType] = useState(''); // Estado para o tipo selecionado

    useEffect(() => {
        fetch('/produtos.json')
            .then(response => response.json())
            .then(data => setProdutos(data))
            .catch(error => console.error('Erro ao carregar os produtos:', error));
    }, []);

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    const filteredProdutos = selectedType ? produtos.filter(produto => produto.type === selectedType) : produtos;

        
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
                    <li onClick={() => handleTypeClick('Sushi')} onKeyDown={handleTypeClick} >
                        <img src={iconSushi} alt="icon sushi" />
                        <p>Sushi</p>
                    </li>
                    <li onClick={() => handleTypeClick('Yakisoba')} onKeyDown={handleTypeClick}>
                        <img src={iconRamen} alt="icon ramen" />
                        <p>Yakisoba</p>
                    </li>
                    <li onClick={() => handleTypeClick('Temaki')} onKeyDown={handleTypeClick}>
                        <img src={iconTemaki} alt="icon temaki" />
                        <p>Temaki</p>
                    </li>
                    <li onClick={() => handleTypeClick('Combos')} onKeyDown={handleTypeClick}>
                        <img src={iconBarcaDeSushi} alt="icon barca de sushi" />
                        <p>Combos</p>
                    </li>
                </ul>
                <JapaneseFood>
                    {filteredProdutos.length > 0 ? (
                        filteredProdutos.map(produto => (
                            <FoodCard key={produto.id}>
                                <img src={produto.image} alt={produto.type} />
                                <FoodInfos>
                                    <span>{produto.availability}</span>
                                    <p>{produto.description}</p>
                                    <span>R${produto.price.toFixed(2)}</span>
                                </FoodInfos>
                                <a href="#agendar">Agendar</a>
                            </FoodCard>
                        ))
                    ) : (
                        <p>Sem produtos disponíveis para este tipo.</p>
                    )}
                </JapaneseFood>
			</Menu>
		</Container>
	);
}
