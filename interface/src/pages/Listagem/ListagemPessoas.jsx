import NavBar from "../../components/NavBar/NavBar";
import ListaPessoas from "../../components/Pessoas/Listar/ListaPessoas";

function ListagemPessoas() {
    return (
        <>
            <NavBar />
            <div>
                <h1 style={{ textAlign: 'center', marginTop: '30px', marginBottom: '15px'}}>Lista de Pessoas</h1>
                <ListaPessoas />
            </div>
        </>
    );
}

export default ListagemPessoas;