import React, {Component} from "react"
import Main from '../../../components/Main'
import CaoOrcamento from "../components/forms/CaoOrcamento"
import ClienteOrcamento from "../components/forms/ClienteOrcamento"
import CheckinCheckout from '../components/forms/CheckinCheckout'
import Servicos from "../components/forms/Servicos"
import Observacoes from "../components/forms/Obeservacoes"
import Desconto from "../components/forms/Desconto"
import ExpiraProposta from "../components/forms/ExpiraProposta"
import MontaOrcamentoRequest from "../../../services/MontaOrcamentoRequest"
import DetalhesOrcamento from "../components/results/DetalhesOrcamento"

const headerProps = {
    icon: 'users',
    title: 'Orçamento',
    subtitle: 'Cadastrar novo Orçamento'
}

const initialState = {
    cliente: { name: '', email:'', telefone: ''},
    list: [],
    caes: [{ 
        nomeCachorro: '', 
        raca: '', 
        idade: '', 
        peso: '', 
        sexo: '', 
        castrado: ''
     }],
    periodo: {
        dataEntrada: '', 
        horarioEntrada: '', 
        dataSaida: '', 
        horarioSaida: ''
    },
    servicos: {
        avaliacao: false, 
        qtdAvaliacoes: 0, 
        valorAvaliacao: 0, 
        adaptacao: false, 
        qtdAdaptacao: 0, 
        valorAdaptacao: 0,
        utilizaTaxi: false,
        qtdTaxi: 0,
        valorTaxi: 0,
    }, 
    observacoes:'',
    desconto: { desconto: 0, tipoDesconto: 1 },
    dataExpiracao: '',
    orcamentoSalvo: null
}

export default class NovoOrcamento extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };
        this.updateFieldCliente = this.updateFieldCliente.bind(this);
        this.updateFieldCao = this.updateFieldCao.bind(this);
        this.updateFieldPeriodo = this.updateFieldPeriodo.bind(this);
        this.updateFieldServicos = this.updateFieldServicos.bind(this);
        this.updateFieldDesconto = this.updateFieldDesconto.bind(this);
        this.setObservacoes = this.setObservacoes.bind(this);
        this.setExpiraProposta = this.setExpiraProposta.bind(this);
        this.save = this.gerarOrcamento.bind(this);
    }   

    state = { ...initialState }

    clear() {
        this.setState({ ...initialState })
    }

    updateFieldCliente(name, value) {
        console.log('Atualizando campo:', name, 'com valor:', value);
        this.setState(prevState => ({
            cliente: {
                ...prevState.cliente,
                [name]: value
            }
        }), () => {
            console.log('Novo estado do cliente:', this.state.cliente);
        });
    }    

    updateFieldCao(updatedCaes) { 
        this.setState({ caes: updatedCaes });
    }
        
    updateFieldPeriodo(name, value) {
        const periodo = { ...this.state.periodo };
        if (name === 'horarioEntrada' || name === 'horarioSaida') {
          const formattedValue = value + ':00';
          periodo[name] = formattedValue;
        } else {
          periodo[name] = value;
        }
        this.setState({ periodo });
      }

    updateFieldServicos(name, value){
        const servicos = { ...this.state.servicos }
        servicos[name] = value
        this.setState({ servicos })
    }

    updateFieldDesconto(name, value) {
        const desconto = { ...this.state.desconto}
        desconto[name] = value
        this.setState({ desconto })
    }

    setObservacoes(value) {
        this.setState({ observacoes: value})
    }

    setExpiraProposta(value) {
        this.setState({ dataExpiracao: value})
    }

    gerarOrcamento() {
        return MontaOrcamentoRequest(this.state)
            .then(response => {
                console.log('Resposta do backend:', response);
                this.setState({ orcamentoSalvo: response });
                return response;
            })
            .catch(error => {
                console.error('Erro no salvar', error);
                return error;
            });
    }

    renderForm(){
        return (
            <div className="form">
                <ClienteOrcamento cliente={this.state.cliente} updateField={this.updateFieldCliente} updateFieldCao={this.updateFieldCao} />
                <hr />
                <CaoOrcamento caes={this.state.caes} updateFieldCao={this.updateFieldCao} />
                <hr />
                <CheckinCheckout periodo={this.state.periodo} updateField={this.updateFieldPeriodo}/>
                <hr />
                <Servicos servicos={this.state.servicos} updateField={this.updateFieldServicos} />
                <hr />
                <Desconto desconto={this.state.desconto} updateField={this.updateFieldDesconto} />
                <hr />
                <ExpiraProposta dataExpiracao={this.state.dataExpiracao} setExpiraProposta={this.setExpiraProposta} />
                <hr />
                <Observacoes observacoes={this.state.observacoes} setObservacoes={this.setObservacoes} />
                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.gerarOrcamento(e)}>
                            Gerar Orcamento
                        </button>
                        <button className="btn btn-secundary ml-2"
                            onClick={e => this.clear(e)}>
                            cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { orcamentoSalvo } = this.state;        

        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {orcamentoSalvo && <DetalhesOrcamento orcamento={orcamentoSalvo} />}
            </Main>
        )        
    }
}