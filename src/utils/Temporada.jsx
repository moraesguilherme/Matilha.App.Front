const getTemporadaNome = (temporadaId) => {
    switch (temporadaId) {
      case 1:
        return 'Temporada Comum';
      case 2:
        return 'Alta Temporada';
      default:
        return 'Desconhecido';
    }
  };
  
  export default getTemporadaNome;
  