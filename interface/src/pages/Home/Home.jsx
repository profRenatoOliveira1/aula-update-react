import NavBar from "../../components/NavBar/NavBar";

function Home() {
    return (
        <>
            <NavBar />
            <h1 style={{ textAlign: 'center', marginTop: '30px'}}>Olá, seja bem-vindo</h1>
            <p style={{ textAlign: 'center', marginTop: '30px'}}>Acesse Listagem para começar</p>
        </>
    );
}

export default Home;