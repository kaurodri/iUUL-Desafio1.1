import { DateTime } from 'luxon';
import promptSync from 'prompt-sync';

const entrada = promptSync({ sigint: true });

const regras = {
    nome: (nome) => typeof nome === 'string' && nome.length >= 5,
    cpf: (cpf) => /^\d{11}$/.test(cpf),
    dataNascimento: (dataNascimento) => DateTime.now().diff(DateTime.fromFormat(dataNascimento, 'dd/MM/yyyy'), 'years').years >= 18,
    rendaMensal: (rendaMensal) => /^[0-9]+(,\d{2})?$/.test(rendaMensal) && parseFloat(rendaMensal.replace(',', '.')) >= 0,
    estadoCivil: (estadoCivil) => /^[CSVcsvD]$/.test(estadoCivil),
    dependentes: (dependentes) => parseInt(dependentes) >= 0 && parseInt(dependentes) <= 10
};

const formatarCPF = (cpf) => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
const formatarRenda = (rendaMensal) => parseFloat(rendaMensal.replace(',', '.')).toFixed(2).replace('.', ',');
const formatarData = (data) => DateTime.fromFormat(data, 'dd/MM/yyyy').toFormat('dd/MM/yyyy');

function loopPergunta(mensagem, validar, mensagemErro) {
    let valor;
    do {
        valor = entrada(`Digite ${mensagem}`);
        if (!validar(valor)) {
            console.log(mensagemErro);
        }
    } while (!validar(valor));
    return valor;
}

const perguntas = [
    {
        chave: 'nome',
        mensagem: "o nome (mínimo 5 caracteres): ",
        validar: regras.nome,
        erro: "Erro: Nome deve ter pelo menos 5 caracteres."
    },
    {
        chave: 'cpf',
        mensagem: "o CPF (11 dígitos numéricos): ",
        validar: regras.cpf,
        erro: "Erro: CPF deve ter exatamente 11 dígitos numéricos."
    },
    {
        chave: 'dataNascimento',
        mensagem: "a data de nascimento (DD/MM/AAAA): ",
        validar: regras.dataNascimento,
        erro: "Erro: Data inválida ou idade menor que 18 anos."
    },
    {
        chave: 'rendaMensal',
        mensagem: "a renda mensal: ",
        validar: regras.rendaMensal,
        erro: "Erro: Renda deve ser um número ≥ 0 com duas casas decimais."
    },
    {
        chave: 'estadoCivil',
        mensagem: "o estado civil (C, S, V ou D): ",
        validar: (valor) => regras.estadoCivil(valor.toUpperCase()),
        erro: "Erro: Estado civil deve ser C, S, V ou D."
    },
    {
        chave: 'dependentes',
        mensagem: "o número de dependentes (0 a 10): ",
        validar: regras.dependentes,
        erro: "Erro: Número de dependentes deve ser entre 0 e 10."
    }
];

const dadosCliente = {};

for (const { chave, mensagem, validar, erro } of perguntas) {
    dadosCliente[chave] = loopPergunta(mensagem, validar, erro);
}

let conteudo = `\nDados do Cliente
${`Nome:`.padEnd(20)} ${dadosCliente.nome}
${`CPF:`.padEnd(20)} ${formatarCPF(dadosCliente.cpf)}
${`Data de Nascimento:`.padEnd(20)} ${formatarData(dadosCliente.dataNascimento)}
${`Renda Mensal:`.padEnd(20)} R$${formatarRenda(dadosCliente.rendaMensal)}
${`Estado Civil:`.padEnd(20)} ${dadosCliente.estadoCivil}
${`Dependentes:`.padEnd(20)} ${dadosCliente.dependentes}`;

console.log(conteudo);