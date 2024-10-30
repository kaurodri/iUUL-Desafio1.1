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
        valor = entrada(mensagem);
        if (!validar(valor)) {
            console.log(mensagemErro);
        }
    } while (!validar(valor));
    return valor;
}

const nome = loopPergunta(
    "Digite o nome (mínimo 5 caracteres): ",
    (valor) => regras.nome(valor),
    "Erro: Nome deve ter pelo menos 5 caracteres."
);

const cpf = loopPergunta(
    "Digite o CPF (11 dígitos numéricos): ",
    (valor) => regras.cpf(valor),
    "Erro: CPF deve ter exatamente 11 dígitos numéricos."
);

const dataNascimento = loopPergunta(
    "Digite a data de nascimento (DD/MM/AAAA): ",
    (valor) => regras.dataNascimento(valor),
    "Erro: Data inválida ou idade menor que 18 anos."
);

const rendaMensal = loopPergunta(
    "Digite a renda mensal: ",
    (valor) => regras.rendaMensal(valor),
    "Erro: Renda deve ser um número ≥ 0 com duas casas decimais."
);

const estadoCivil = loopPergunta(
    "Digite o estado civil (C, S, V ou D): ",
    (valor) => regras.estadoCivil(valor.toUpperCase()),
    "Erro: Estado civil deve ser C, S, V ou D."
);

const dependentes = loopPergunta(
    "Digite o número de dependentes (0 a 10): ",
    (valor) => regras.dependentes(valor),
    "Erro: Número de dependentes deve ser entre 0 e 10."
);

let conteudo = `\nDados do Cliente
${`Nome:`.padEnd(20)} ${nome}
${`CPF:`.padEnd(20)} ${formatarCPF(cpf)}
${`Data de Nascimento:`.padEnd(20)} ${formatarData(dataNascimento)}
${`Renda Mensal:`.padEnd(20)} R$${formatarRenda(rendaMensal)}
${`Estado Civil:`.padEnd(20)} ${estadoCivil}
${`Dependentes:`.padEnd(20)} ${dependentes}`;
console.log(conteudo);