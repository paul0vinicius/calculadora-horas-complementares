module.exports = (sequelize, type) => {
  return sequelize.define("AtividadeComplementar", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
    },
    descricao: type.STRING,
    unidadeAComprovar: type.STRING,
    aproveitamentoCargaHorariaPorUnidadeEmHoras: type.INTEGER,
    aproveitamentoCargaHorariaPorUnidadeEmCreditos: type.INTEGER,
    limiteTotalHoras: type.INTEGER,
    limiteTotalCreditos: type.INTEGER,
    documentacaoComprobatoria: type.STRING,
  });
};
