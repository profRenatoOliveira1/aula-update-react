import NavBar from "../../components/NavBar/NavBar";
import style from "./Home.module.css";

function Home() {
    return (
        <>
            <NavBar />
            <h1 className={style.header}>Olá, seja bem-vindo</h1>
            <p className={style.paragrafo}>Acesse Listagem para começar</p>
        </>
    );
}

export default Home;