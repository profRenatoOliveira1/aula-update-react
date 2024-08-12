import NavBar from "../../components/NavBar/NavBar";
import ListaPessoas from "../../components/Pessoas/Listar/ListaPessoas";
import style from './ListagemPessoas.module.css';

function ListagemPessoas() {
    return (
        <>
            <NavBar />
            <div>
                <h1 className={style.header}>Lista de Pessoas</h1>
                <ListaPessoas />
            </div>
        </>
    );
}

export default ListagemPessoas;