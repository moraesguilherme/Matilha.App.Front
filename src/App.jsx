import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from '../src/pages/Home';
import NovoOrcamento from './modules/orcamento/pages/NovoOrcamento';
import ConsultarOrcamento from './modules/orcamento/pages/ConsultarOrcamento';
import CadastroAltaTemporada from './modules/orcamento/pages/CadastroAltaTemporada';
import CadastroPreco from './modules/orcamento/pages/CadastroPreco';
import Login from '../src/pages/Login';
import PrivateRoute from './context/PrivateRoute';
import { AxiosConfig } from './services/AxiosConfig';
import GlobalStyle from './GlobalStyles';

const App = () => (
    <AuthProvider>
        <AxiosConfig />
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<PrivateRoute element={<Home />} />}>
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