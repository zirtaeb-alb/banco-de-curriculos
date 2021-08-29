const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique:false, required: true},
    email: { type: String, unique:true, required: true},
    sexo: { type: String, unique:false, required: false},
    cep: { type: String, unique:false, required: true},
    profissao: { type: String, unique:false, required: true},
    uf: { type: String, unique:false, required: true},
    dN: { type: String, unique:false, required: true},
    estadoCivil: { type: String, unique:false, required: false},
    endereco: { type: String, unique:false, required: true},
    numero: { type: String, unique:false, required: true},
    bairro: { type: String, unique:false, required: true},
    cidade: { type: String, unique:false, required: true},
    tel1: { type: String, unique:false, required: false},
    tel2: { type: String, unique:false, required: false},
    celular: { type: String, unique:false, required: true},
    rg: { type: String, unique:true, required: false},
    cpf: { type: String, unique:true, required: true},
    cnh: { type: String, unique:false, required: false},
    carro: { type: String, unique:false, required: false},

}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);