// As atividades serão adicionadas via API do MLAB, porém para exercitar alguns conceitos
// vou adicionar a verificação do role. Teoricamente só um admin poderia fazer o CRUD das atividades.
const AtividadeComplementar = require("../../models/AtividadeComplementar");

module.exports = {
  cadastraOuAtualizaAtividade(req, res) {
    if (req.user.role === "user") {
      res.status(401).json({ msg: "Unauthorized" });
    }

    // Get fields
    const camposAtividade = {};

    // Simple text fields
    if (req.body.codigo) camposAtividade.codigo = req.body.codigo;
    if (req.body.descricao) camposAtividade.descricao = req.body.descricao;
    if (req.body.unidadeAComprovar)
      camposAtividade.unidadeAComprovar = req.body.unidadeAComprovar;
    if (req.body.aproveitamentoCargaHorariaPorUnidadeEmHoras)
      camposAtividade.aproveitamentoCargaHorariaPorUnidadeEmHoras =
        req.body.aproveitamentoCargaHorariaPorUnidadeEmHoras;
    if (req.body.aproveitamentoCargaHorariaPorUnidadeEmCreditos)
      camposAtividade.aproveitamentoCargaHorariaPorUnidadeEmCreditos =
        req.body.aproveitamentoCargaHorariaPorUnidadeEmCreditos;
    if (req.body.limiteTotalHoras)
      camposAtividade.limiteTotalHoras = req.body.limiteTotalHoras;
    if (req.body.limiteTotalCreditos)
      camposAtividade.limiteTotalCreditos = req.body.limiteTotalCreditos;
    if (req.body.documentacaoComprobatoria)
      camposAtividade.documentacaoComprobatoria =
        req.body.documentacaoComprobatoria;

    AtividadeComplementar.findOne({ codigo: req.body.codigo })
      .then(atividade => {
        if (atividade) {
          // Update
          AtividadeComplementar.findOneAndUpdate(
            { codigo: req.body.codigo },
            { $set: camposAtividade },
            { new: true }
          ).then(atividade => res.json(atividade));
        } else {
          // Salva atividade
          new AtividadeComplementar(camposAtividade)
            .save()
            .then(atividade => res.json(atividade));
        }
      })
      .catch(err => console.log(err));
  },
  verTodas(req, res) {},
  verAtividade(req, res) {},
  apagaAtividade(req, res) {}
};
