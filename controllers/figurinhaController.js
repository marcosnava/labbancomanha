const Figurinha = require('../model/figurinha');

exports.create = (req, res, next) => {
    const codigo = req.body.codigo;
    const numero = req.body.numero;
    const nome = req.body.nome;
    const tenho = req.body.tenho || false;
    const especial = req.body.especial || false;
    const rara = req.body.rara || false;
    const tipoId = req.body.tipoId

    console.log(tenho, rara, especial);

    if(codigo === undefined || numero === undefined || nome === undefined || tipoId === undefined)
    {
        res.status(400).json(
            {
                mensagem: 'Campos não definidos'
            }
        );
    }
    else
    {
        Figurinha.findOne({
            where: {
                codigo: codigo,
                numero: numero
            }
        }).then(figurinha => {
            if(figurinha == undefined)
            {
                Figurinha.create(
                    {
                        codigo: codigo,
                        numero: numero,
                        nome: nome,
                        tenho: tenho,
                        especial: especial,
                        rara: rara,
                        tipoId: tipoId
                    }
                ).then(figurinhaCriada => {
                    res.status(201).json(
                        {
                            mensagem: 'Figurinha criado',
                            figurinha: figurinhaCriada
                        }
                    );
                }).catch(err => {
                    console.log(err);
                    res.status(500).json(
                        {
                            mensagem: 'Erro na criação da Figurinha!',
                            erro: err
                        }
                    );
                });
            }
            else
            {
                res.status(401).json(
                    {
                        mensagem: 'Figurinha já existe'
                    }
                );
            }
        });
    }
}

exports.update = (req, res, next) => {
    const id = req.params.id;
    const codigo = req.body.codigo;
    const numero = req.body.numero;
    const nome = req.body.nome;
    const tenho = req.body.tenho || false;
    const especial = req.body.especial || false;
    const rara = req.body.rara || false;
    const tipoId = req.body.tipoId

    Figurinha.update(
        {
            codigo: codigo,
            numero: numero,
            nome: nome,
            tenho: tenho,
            especial: especial,
            rara: rara,
            tipoId: tipoId
        },
        {
            where: {
                id: id
            }
        }
    ).then(resultado => {
        res.status(201).json(
            {
                mensagem: 'Figurinha alterada'
            }
        );
    });
}

exports.getAll = (req, res, next) => {
    Figurinha.findAll({
        order: [
            ['codigo', 'ASC'],
            ['numero', 'ASC']
        ]
    }).then(figurinhas => {
        res.status(200).json({
            mensagem: 'Figurinhas encontradas',
            figurinhas: figurinhas
        })
    })
}

exports.getOne = (req, res, next) => {
    const id = req.params.id;

    Figurinha.findOne(
        {
            where: {
                id: id
            }
        }
    ).then(figurinha => {
        res.status(200).json({
            mensagem: 'Figurinha encontrada',
            figurinha: figurinha
        });
    });
}

exports.delete = (req, res, next) => {
    const id = req.params.id;
    Figurinha.destroy(
        {
            where: {
                id: id
            }
        }
    ).then(resultado => {
        res.status(200).json({
            mensagem: 'Figurinha excluída'
        });
    });
}