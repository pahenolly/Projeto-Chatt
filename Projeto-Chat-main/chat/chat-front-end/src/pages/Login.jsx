import React from "react"; 



const Login = () => { 
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Chat Hello World</span>
                <span className="tittle">Login</span>
                {/*Formulario */}
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>  
                    <button>Entrar</button>
                </form>
                <p>Voce não tem uma conta? Cadastre-se</p>
            </div>
        </div>
    );
};

export default Login