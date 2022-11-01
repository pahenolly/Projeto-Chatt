import React from "react"; 
import Add from "../img/imagem.svg"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Register = () => { 


    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Chat Hello World</span>
                <span className="tittle"> Cadastro</span>
                {/*Formulario */}
                <form >
                    <input type="text" placeholder="nome"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="senha"/>
                    <input style={{display:"none"}}type="file" id="file"/> 
                    <label htmlFor="file">
                    <img src={Add} alt="Adicionar Imagem"/>  {/*adicionar imagem*/}
                    <span>Adicionar sua foto</span>
                    </label>
                    <button>Inscreva-se</button>
                    <span>Algo deu errado</span>
                </form>
                <p>Voce não tem uma conta? Cadastre-se</p>
            </div>
        </div>
    );
}

export default Register