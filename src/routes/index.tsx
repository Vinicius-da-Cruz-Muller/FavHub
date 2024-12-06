import { Navigate, RouteObject } from "react-router";
import Layout from "../layout";
import Boards from "../pages/Boards";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/login";
import Favoritos from "../pages/Favoritos";
import Home from "../pages/Home/Home";
import EmBreve from "../pages/Em Breve/EmBreve";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				children: [
					{
						path: "",
						element: <Home />,
					}
					
				],
			},
		],
	},
	{
		path: "/home",
		element: <Navigate to="/" />,
		
	},
	{
		path: "/categorias",
		element: <Layout />,
		children: [
			{
				children: [
					{
						path: "",
						element: <Boards />,
					}
					
				],
			},
		],
	},
	{
		path: "/favoritos",
		element: <Layout />,
		children: [
			{
				children: [
					{
						path: "",
						element: <Favoritos />,
					}
					
				],
			},
		],
	},
	{
		path: "/projetos",
		element: <Layout />,
		children: [
			{
				children: [
					{
						path: "",
						element: <EmBreve />,
					}
					
				],
			},
		],
	},
	{
		path: "/análise",
		element: <Layout />,
		children: [
			{
				children: [
					{
						path: "",
						element: <EmBreve />,
					}
					
				],
			},
		],
	},
	{
		path: "/notificações",
		element: <Layout />,
		children: [
			{
				children: [
					{
						path: "",
						element: <EmBreve />,
					}
					
				],
			},
		],
	},
	{
		path: "/login",
		element: <Login/>
	},
	{
		path: "/cadastro",
		element: <Cadastro/>
	}
];

export default routes;
