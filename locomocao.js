class aereo  {
    detalhes(){
        throw new Error("detalhes() erro aereo")
    }
}
class terrestre{
    detalhes(){
        throw new Error("detalhes() erro Terrestre")
    }
}

class carro extends terrestre{
    detalhes(){
        return "carro andando"
    }
}
class onibus extends terrestre{
    detalhes(){
        return "Onibus andando"
    }
}
class helicoptero extends aereo{
    detalhes(){
        return "helicoptero voa"
    }
}
class aviao extends aereo{
    detalhes(){
        return "aviao voa"
    }
}

class fabricaVeiculos{
    criarGrande(){
        throw new Error("criarGrande() erro")
    }
    criarPequeno(){
        throw new Error("criarPequeno() erro")
    }
}
class fabricaTerrestre extends fabricaVeiculos{
    criarGrande(){
        return new onibus();
    }
    criarPequeno(){
        return new carro();
    }
}

class fabricaAereo extends fabricaVeiculos{
    criarPequeno(){
        return new helicoptero();
    }
    criarGrande(){
        return new aviao();
    }
}

function lojaVeiculo(fabrica){
    const grandes = fabrica.criarGrande();
    const pequenos = fabrica.criarPequeno();

    console.log(grandes.detalhes());
    console.log(pequenos.detalhes());
}

console.log()
lojaVeiculo(new fabricaAereo())
console.log("------------------------")

lojaVeiculo(new fabricaTerrestre())
console.log("------------------------")
