import EnviarOrcamento from './EnviarOrcamentoRequest';

const MontaOrcamentoRequest = (dados) => {
    const orcamento = {
        cliente: {
            id: 0,
            nomeCliente: dados.cliente.name,
            email: dados.cliente.email,
            telefoneCliente: dados.cliente.telefone,
            caoOrcamento: dados.caes.map((cao, index) => ({
                id: index,
                nomeCachorro: cao.nomeCachorro,
                raca: cao.raca,
                sexo: cao.sexo,
                idade: cao.idade,
                castrado: cao.castrado,
                peso: cao.peso,
                ativo: true,
                deletado: false
            }))
        },
        dataEntrada: dados.periodo.dataEntrada,
        horarioEntrada: dados.periodo.horarioEntrada,
        dataSaida: dados.periodo.dataSaida,
        horarioSaida: dados.periodo.horarioSaida,
        observacoes: dados.observacoes,
        qtdAvaliacoes: dados.servicos.qtdAvaliacoes,
        valorAvaliacao: dados.servicos.valorAvaliacao,
        qtdAdaptacao: dados.servicos.qtdAdaptacao,
        valorAdaptacao: dados.servicos.valorAdaptacao,
        utilizaTaxi: dados.servicos.utilizaTaxi,
        qtdTaxi: dados.servicos.qtdTaxi,
        valorTaxi: dados.servicos.valorTaxi,
        desconto: dados.desconto.desconto,
        tipoDesconto: dados.desconto.tipoDesconto,
        dataExpiracao: dados.dataExpiracao
    };

    return EnviarOrcamento(orcamento)
        .then(response => {
            console.log('Resposta do backend:', response);
            return response; // retornar a resposta para encadear a promessa
        })
        .catch(error => {
            console.error('Erro no montar:', error);
            throw error; // lançar o erro para encadear a promessa
        });
};

export default MontaOrcamentoRequest;