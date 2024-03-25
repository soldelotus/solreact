import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
 
const Contact = () => {
    return (
        <div className="contatos">
            <Navbar />
            <h1>Página de contato</h1>
            {/* 5 - nested routes */}
            <div className="divcontato">
 
                <img className="imgsol" src='img/imgsol.jpeg' alt="SOL" />
 
                <p className="textosol">Me chamo Sol, sou estudante de Sistemas para Internet na Universidade Católica de pernambuco.
            Sou taróloga, modelo, cineasta, cantora, poetisa, programadora e coisas mais.
            Procuro um ambiente no qual posso ser eu mesmo e viver tudo que me deixa feliz</p>
 
                <div className="links">
 
                    <a href="https://www.linkedin.com/in/soldelotus" target="_blank"><button className="botao">
                        Linkedin
                        </button></a>
 
                    <a href="https://github.com/soldelotus" target="_blank">
                    <button className="botao">GitHub
                    </button></a>
                </div>
               
            </div>
         
        </div>
    )
}
 
export default Contact