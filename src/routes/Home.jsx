import React from 'react'
import Navbar from '../components/Navbar'
 
 
const Home = () => {
    return (
        <div className="App">
            <Navbar />
 
            <h1>ODS Escolhida</h1>
            <img className="imgods" src='img/ods.jpg' alt="odsss" />
            <h2 className="descricao">A igualdade de gênero visa impor direitos iguais para todos os gêneros,
                bem como, inevitavelmente, pode incluir pessoas transgêneras, binárias ou não.
                Há um debate sobre essa inclusão dentro do próprio direito,
                na qual muitas pessoas de diversos gêneros continuam buscando um espaço.
                É pensar nessa desruptura de quaisquer padrões de opressão</h2>
        </div>
    )
}
 
export default Home
