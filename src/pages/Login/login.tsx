import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getUserId, login } from "../../api/services/userService";
import TextInput from "../../components/TextInput/textInput";
import { addToken } from "../../api/api";


const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [userId, setUserId] = useState(0);


    useEffect(() => {
        if(userId){
            console.log(userId);
            localStorage.setItem("user_id",userId.toString());
            navigate('/categorias');
        }
    }  ,[userId])

    const navigate = useNavigate();
    const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(senha.length<6){
            alert("Senha inválida")
            return;
        }
        
        try{
            const response = await login({
                login: email,
                password: senha
            });
    
            if(response){
                alert("Login feito com sucesso");
                addToken(response.token)
                const data = await getUserId(email);
                console.log(data);
                setUserId(data.user_id);
            }
        }catch(err){
            alert("Usuario não encontrado");
        }
    }
    const redirect = ()=>{
        navigate('/Cadastro')
    }
    return (
        <>
            {

            }
            <div className="grid grid-cols-mobile gap-x-24 w-full h-full justify-center tablet:grid-cols-tablets tablet:gap-x-12 lg:grid-cols-desktop lg:gap-x-8 ">
                <form onSubmit={handleForm} className=" bg-white rounded-lg p-5 grid col-span-2 w-full justify-self-center h-full gap-4 tablet:w-3/5 tablet:col-span-full lg:col-span-full lg:w-1/2 lg:h-96 mt-32 lg:gap-4">
                    <h2 className="text-2xl font-bold text-center">Faça login</h2>
                    <TextInput idInput="email" label="Digite seu email:" typeInput="text" name="email" placeholder="Email:" className="flex flex-col gap-2" value={email} 
                            textChanged={(e) => setEmail(e)} />
                    <TextInput idInput="senha" label="Digite sua senha:" typeInput="password" name="senha" placeholder="Senha:" className="flex flex-col gap-2" value={senha}
                    textChanged={(e)=>setSenha(e)}/>
                    <p>Novo aqui? <a onClick={redirect} className="text-cyan-500 cursor-pointer">Cadastre-se!</a></p>
                    <input type="submit" value="Confirmar" className="bg-green-400 h-12 rounded-lg cursor-pointer"/>
                </form>
            </div>
        </>
    )
}
export default Login;