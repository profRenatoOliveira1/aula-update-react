import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ListagemPessoas from './pages/Listagem/ListagemPessoas';
import UpdatePessoa from './pages/Update/UpdatePessoa';

export default function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listagem" element={<ListagemPessoas />} />
                <Route path="/atualizar" element={<UpdatePessoa />} />
            </Routes>
        </BrowserRouter>
    );
}