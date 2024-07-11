import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from '../src/pages/Home';
import NovoOrcamento from '../src/orcamento/NovoOrcamento';
import ConsultarOrcamento from '../src/orcamento/ConsultarOrcamento';
import CadastroAltaTemporada from '../src/orcamento/CadastroAltaTemporada';
import CadastroPreco from '../src/orcamento/CadastroPreco';
import Login from '../src/pages/Login';
import PrivateRoute from './context/PrivateRoute';
import Layout from '../src/components/Layout';
import { AxiosConfig } from './services/AxiosConfig'

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
