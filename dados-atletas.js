
class atleta {
    constructor(nome, idade, peso = 0, altura = 0, notas = []) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        const idade = this.idade;
        if (idade >= 9 && idade <= 11) {
            return "Infantil";
        } else if (idade === 12 || idade === 13) {
            return "Juvenil";
        } else if (idade === 14 || idade === 15) {
            return "Intermediário";
        } else if (idade >= 16 && idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }
    
    calculaMediaValida() {
        let notasOrdenadas = [...this.notas].sort((a, b) => a - b);
        let notasValidas = notasOrdenadas.slice(1, 4);
        let soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
        return soma / notasValidas.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoriaAtleta() {
        return this.calculaCategoria();
    }

    obtemIMCAtleta() {
        return this.calculaIMC();
    }

    obtemMediaValidaAtleta() {
        return this.calculaMediaValida();
    } 

}

function calcularMediaGinastas(objAtletas) {
    // Etapa 1: Percorrer a matriz de objetos
    for (let i = 0; i < objAtletas.length; i++) {
        let atleta = objAtletas[i];
        
        // Cópia das notas para ordenação para não alterar o original
        let notas = [...atleta.notas]; 

        // Etapa 2.1: Ordenar as notas
        notas.sort((a, b) => a - b); 

        // Etapa 2.2: Isolar as três notas do meio
        let notasValidas = notas.slice(1, 4);

        // Etapa 3.1: Calcular a soma
        let soma = 0;
        notasValidas.forEach(nota => {
            soma += nota;
        });

        // Etapa 3.2: Calcular a média
        let media = soma / notasValidas.length; 
        
        // Etapa 4: Apresentar o resultado
        console.log(`\nAtleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
        console.log(`Média Válida: ${media.toFixed(6)}`); 
        // Use .toFixed(6) para garantir 6 casas decimais, ou simplesmente a variável 'media' para a saída
    }
}

// Chamar a função com a entrada
let atletas = [
    { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] },
    { nome: "Fernando Puntel", notas:  [8, 10, 10, 7, 9.33] },
    { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] },
    { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] }
];

calcularMediaGinastas(atletas);

