const Tipo = require('../model/tipo');

exports.create = (req, res, next) => {
    const descricao = req.body.descricao;

    if(descricao === undefined)
    {
        res.status(400).json(
            {
                mensagem: 'Campos não definidos'
            }
        );
    }
    else
    {
        Tipo.findOne({
            where: {
                descricao: descricao
            }
        }).then(tipoEncontrado => {
            if(tipoEncontrado == undefined)
            {
                Tipo.create(
                    {
                        descricao: descricao
                    }
                ).then(tipoCriado => {
                    res.status(201).json(
                        {
                            mensagem: 'Tipo criado',
                            tipo: tipoCriado
                        }
                    );
                }).catch(err => {
                    console.log(err);
                    res.status(500).json(
                        {
                            mensagem: 'Erro na criação do Tipo!',
                            erro: err
                        }
                    );
                });
            }
            else
            {
                res.status(401).json(
                    {
                        mensagem: 'Tipo já existe'
                    }
                );
            }
        });
    }
}

exports.update = (req, res, next) => {
    const id = req.params.id;
    const descricao = req.body.descricao;

    Tipo.update(
        {
            descricao: descricao
        },
        {
            where: {
                id: id
            }
        }
    ).then(resultado => {
        res.status(201).json(
            {
                mensagem: 'Tipo alterado'
            }
        );
    });
}

exports.getAll = (req, res, next) => {
    Tipo.findAll({
        order: [
            ['descricao', 'ASC']
        ]
    }).then(tipos => {
        res.status(200).json({
            mensagem: 'Tipos encontrados',
            tipos: tipos
        })
    })
}

exports.getOne = (req, res, next) => {
    const id = req.params.id;

    Tipo.findOne(
        {
            where: {
                id: id
            }
        }
    ).then(tipo => {
        res.status(200).json({
            mensagem: 'Tipo encontrado',
            tipo: tipo
        });
    });
}

exports.delete = (req, res, next) => {
    const id = req.params.id;
    Tipo.destroy(
        {
            where: {
                id: id
            }
        }
    ).then(resultado => {
        res.status(200).json({
            mensagem: 'Tipo excluído'
        });
    });
}