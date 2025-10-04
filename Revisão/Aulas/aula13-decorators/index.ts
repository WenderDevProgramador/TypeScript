function Log() {
    return function(target, key , descriptor) {
        console.log('function chamada')
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log('--------------------------');
            console.log(`Chamando o método ${key} com os argumentos: ${JSON.stringify(args)}`);

            const result = originalMethod.apply(this, args);

            console.log(`O método ${key} retornou: ${JSON.stringify(result)}`);
            console.log('--------------------------');
            return result;
        }
    }
}


class Planet {
    name: string;
    constructor(name: string) {
        this.name =name;
    }

    @Log()
    calculate(value: number) {
        console.log(`Calculando ${value} vezes 2...`);
        return value * 2;
    }

    @Log()
    invertNmae() {
        return this.name.split('').reverse().join('');
    }
}

const planet = new Planet('Terra');
const result = planet.calculate(5);
planet.invertNmae()

