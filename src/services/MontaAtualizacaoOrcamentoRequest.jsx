import AtualizarOrcamento from './AtualizarOrcamento';

const MontaAtualizacaoOrcamentoRequest = (orcamentoId, dados) => {
    console.log("Dados recebidos para atualização:", dados);

    const orcamento = {
        cliente: {
            id: dados.cliente.id,
            nomeCliente: dados.cliente.nomeCliente,
            email: dados.cliente.email,
            telefoneCliente: dados.cliente.telefoneCliente,
            caoOrcamento: dados.cliente.caoOrcamento.map(cao => ({
                id: cao.id,
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
        dataEntrada: dados.dataEntrada,
        horarioEntrada: dados.horarioEntrada,
        dataSaida: dados.dataSaida,
        horarioSaida: dados.horarioSaida,
        observacoes: dados.observacoes,
        qtdAvaliacoes: parseInt(dados.qtdAvaliacao, 10),
        valorAvaliacao: parseFloat(dados.valorUnitarioAvaliacao),
        qtdAdaptacao: parseInt(dados.qtdAdaptacao, 10), 
        valorAdaptacao: parseFloat(dados.valorUnitarioAdaptacao), 
        utilizaTaxi: dados.utilizaTaxi,
        qtdTaxi: parseInt(dados.qtdTaxi, 10), 
        valorTaxi: parseFloat(dados.valorViagemTaxi), 
        desconto: parseFloat(dados.desconto), 
        tipoDesconto: parseInt(dados.tipoDesconto, 10),
        dataExpiracao: dados.dataExpiracao
    };

    return AtualizarOrcamento(orcamentoId, orcamento)
        .then(response => {
            console.log('Orçamento atualizado com sucesso:', response);
            return response;
        })
        .catch(error => {
            console.error('Erro ao atualizar o orçamento:', error);
            throw error;
        });
};

export default MontaAtualizacaoOrcamentoRequest;