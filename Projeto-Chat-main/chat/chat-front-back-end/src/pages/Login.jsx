import React, { useState } from "react"; 
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")
      } catch (err) {
        setErr(true);
      }
    };

 
    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Chat Hello World</span>
                <span className="tittle">Login</span>
                {/*Formulario */}
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>  
                    <button>Entrar</button>
                    {err && <span>Algo deu errado</span>}
                </form>
                <p>Voce não tem uma conta?  <Link to="/register">Cadastre-se</Link></p>
            </div>
        </div>
    );
};

export default Login;