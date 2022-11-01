import React, { useState } from "react"; 
import Add from "../img/imagem.svg"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom"; 



const Register = () => {

    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        const nome = e.target[0].value;
        const email = e.target[1].value;
        const senha = e.target[2].value;
        const file = e.target[3].files[0];

        try {
            //Criar usuario//
            const res = await createUserWithEmailAndPassword(auth, email, senha);
            //imagem//
            const date = new Date().getTime();
            const storageRef = ref(storage, `${nome + date}`);

            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        //Update profile
                        await updateProfile(res.user, {
                            nome,
                            photoURL: downloadURL,
                        });
                        //create user on firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            nome,
                            email,
                            photoURL: downloadURL,
                        });
                        //create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                        navigate("/");

                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        setLoading(false);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            setLoading(false);
        
        };
    };

    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Chat Hello World</span>
                <span className="tittle"> Cadastro</span>
                {/*Formulario */}
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="nome"/>
                    <input required type="email" placeholder="email"/>
                    <input required type="password" placeholder="senha"/>
                    <input required style={{display:"none"}}type="file" id="file"/> 
                    <label htmlFor="file">
                    <img src={Add} alt=""/>  {/*adicionar imagem*/}
                    <span>Adicionar sua foto</span>
                    </label>
                    <button disabled={loading}>Inscreva-se</button>
                    {loading && "Carregando e compactando a imagem, aguarde..."}
                    {err && <span>Algo deu errado</span>}
                </form>
                <p>
                    Você já está cadastrado, faça o <Link to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;    