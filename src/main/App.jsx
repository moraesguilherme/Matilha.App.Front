import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../components/styles/App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Home from '../components/home/Home';
import NovoOrcamento from '../components/orcamento/NovoOrcamento';
import ConsultarOrcamento from '../components/orcamento/ConsultarOrcamento';
import CadastroAltaTemporada from '../components/orcamento/CadastroAltaTemporada';
import CadastroPreco from '../components/orcamento/CadastroPreco';
import Login from '../components/auth/Login';
import PrivateRoute from '../context/PrivateRoute';
import Layout from '../components/templates/Layout';
import { AxiosConfig } from '../components/services/AxiosConfig'

const App = () => (
    <AuthProvider>
        <AxiosConfig />
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoute element={<Layout />} />}>
                    <Route index element={<Home />} />
                    <Route path="novoOrcamento" element={<NovoOrcamento />} />
                    <Route path="consultarOrcamento" element={<ConsultarOrcamento />} />
                    <Route path="cadastroAltaTemporada" element={<CadastroAltaTemporada />} />
                    <Route path="cadastroPreco" element={<CadastroPreco />} />
                </Route>
                <Route path="*" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </AuthProvider>
);

export default App;
