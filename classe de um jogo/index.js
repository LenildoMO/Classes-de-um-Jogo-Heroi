// Classe genérica do herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        
        // Estrutura de decisão para definir o ataque baseado no tipo
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        }

        // Mensagem final com concatenação
        console.log("o " + this.tipo + " atacou usando " + ataque);
    }
}

// estrutura de organizacao heróis
const herois = [
    new Heroi("Gandalf", 150, "mago"),
    new Heroi("Conan", 30, "guerreiro"),
    new Heroi("Shaolin", 45, "monge"),
    new Heroi("Naruto", 16, "ninja")
];

// Laço de repetição para percorrer os heróis
for (let i = 0; i < herois.length; i++) {
    herois[i].atacar();
}