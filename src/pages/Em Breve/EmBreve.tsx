import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function EmBreve (){

    const navigate = useNavigate()

    useEffect(() => {
		const getUserId = localStorage.getItem("user_id")
		if(getUserId){
		}else{
			alert("Você precisa estar logado para acessar essa pagina!")
			navigate("/")
		}
	}, []);
    return (
        <main>
            <h1 className="text-center font-semibold text-3xl mt-4">Em breve nas proximas atualizações do sistema</h1>
        </main>
    )
}