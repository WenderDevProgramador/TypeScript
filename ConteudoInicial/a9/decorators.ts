// Decorator que altera o comportamento de um método para elevar um valor ao quadrado
function SquareDecorator() {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value; // Armazena o método original

        descriptor.value = function (value: number) {
            console.log(`Calculando ${value} elevado a 2`);
            return Math.pow(value, 2); // Retorna o valor elevado ao quadrado
        };
    };
}

// Decorator que adiciona logs detalhados antes e depois da execução de um método
function LogDecorator() {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value; // Armazena o método original

        descriptor.value = function (...args: any[]) {
            console.log('-------------------------------');
            console.log(`Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`);

            const result = originalMethod.apply(this, args); // Executa o método original

            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`);
            console.log('-------------------------------');

            return result; // Retorna o resultado original
        };
    };
}

// Classe Planeta
class Planet {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @SquareDecorator() // Aplica o decorator para alterar o cálculo para elevar ao quadrado
    calculate(value: number) {
        console.log(`Calculando ${value} * 2`);
        return value * 2; // Este código será substituído pelo decorator
    }

    @LogDecorator() // Aplica o decorator para logar a execução do método
    invertName() {
        return this.name.split('').reverse().join(''); // Inverte o nome do planeta
    }
}

// Instância da classe Planet
const planet = new Planet('Terra');

// Chamada do método calculate (decorado para elevar ao quadrado)
const result = planet.calculate(5);
console.log(`Resultado: ${result}`);

// Chamada do método invertName (decorado para logar as chamadas)
const invertedName = planet.invertName();
console.log(`Nome invertido: ${invertedName}`);
