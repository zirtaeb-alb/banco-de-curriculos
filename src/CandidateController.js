const Candidate = require('./Candidate');


module.exports = {
    async register(req, res) {
        
        const { email, sexo, nome, cep, profissao, uf, dN, estadoCivil, endereco, numero, bairro, cidade, tel1, tel2, celular, rg, cpf, cnh, carro } = req.body;
        
        const newCandidate = new Candidate();

        newCandidate.email = email;
        newCandidate.sexo = sexo;
        newCandidate.nome = nome;
        newCandidate.cep = cep;
        newCandidate.profissao = profissao;
        newCandidate.uf = uf;
        newCandidate.dN = dN;
        newCandidate.estadoCivill = estadoCivil;
        newCandidate.endereco = endereco;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.tel1 = tel1;
        newCandidate.tel2 = tel2;
        newCandidate.celular = celular;
        newCandidate.rg = rg;
        newCandidate.cpf = cpf;
        newCandidate.cnh = cnh;
        newCandidate.carro = carro;

        newCandidate.save((err, savedCandidate) =>{
            if (err) {
                console.log(err);
                return res.status(500).send('Algo não deu certo');
            }

            return res.status(200).send(savedCandidate);
        });

    },


}
