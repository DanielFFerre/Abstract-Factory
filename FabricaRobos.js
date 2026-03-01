class montador{
    montar(){
        throw new Error('Método Montar() deve ser implementado');
    }
}
class inspetor{
    inspecionar(){
        throw new Error('Método Inspecionar() deve ser implementado');
    }
}

class automotivaMontador extends montador{
    montar(){
        return 'Montagem de carro automotivo concluída';
    }
}

class automotivaInspetor extends inspetor{
    inspecionar(){
        return 'Inspecionagem de peças automotivas concluído';
    }
}
class eletronicaMontador extends montador{
    montar(){
        return 'Montagem de circuitos concluída';
    }
}

class eletronicaInspetor extends inspetor{
    inspecionar(){
        return 'Inspecionagem de chips concluída';
    }
}


class fabricaRobos{
    criarMontador(){
        throw new Error('Método criarMontador() deve ser implementado');
    }
    criarInspetor(){
        throw new Error('Método criarInspetor() deve ser implementado');
    }
}

class fabricaAutomotiva extends fabricaRobos{
    criarMontador(){
        return new automotivaMontador();
    }
    criarInspetor(){
        return new automotivaInspetor();
    }
}

class fabricaEletronica extends fabricaRobos{
    criarMontador(){
        return new eletronicaMontador();
    }
    criarInspetor(){
        return new eletronicaInspetor();
    }
}

function criarFabrica(fabrica){
    const montador = fabrica.criarMontador();
    const inspetor = fabrica.criarInspetor();

    console.log(montador.montar());
    console.log(inspetor.inspecionar());
}

console.log()
criarFabrica(new fabricaAutomotiva())
console.log("-------------------------")

criarFabrica(new fabricaEletronica())
console.log()