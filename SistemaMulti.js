class botao{
    apertar(){
        throw new Error('Método apertar() deve ser implementado');
    }
}
class janela{
    abrir(){
        throw new Error('Método abrir() deve ser implementado');
    }
}

class windowsBotao extends botao{
    apertar(){
        return 'Botão do Windows apertado';
    }
}

class windowsJanela extends janela{
    abrir(){
        return 'Janela do Windows aberta';
    }
}

class macBotao extends botao{
    apertar(){
        return 'Botão do Mac apertado';
    }
}

class macJanela extends janela{
    abrir(){
        return 'Janela do Mac aberta';
    }
}

class linuxBotao extends botao{
    apertar(){
        return 'Botão do Linux apertado';
    }
}

class linuxJanela extends janela{
    abrir(){
        return 'Janela do Linux aberta';
    }
}

class fabricaSO{
    criarBotao(){
        throw new Error('Método criarBotao() deve ser implementado');
    }
    criarJanela(){
        throw new Error('Método criarJanela() deve ser implementado');
    }
}

class fabricaWindows extends fabricaSO{
    criarBotao(){
        return new windowsBotao();
    }
    criarJanela(){
        return new windowsJanela();
    }
}

class fabricaMac extends fabricaSO{
    criarBotao(){
        return new macBotao();
    }
    criarJanela(){
        return new macJanela();
    }
}

class fabricaLinux extends fabricaSO{
    criarBotao(){
        return new linuxBotao();
    }
    criarJanela(){
        return new linuxJanela();
    }
}


function SistemaMulti(fabrica){
    const botao = fabrica.criarBotao();
    const janela = fabrica.criarJanela();
    console.log(botao.apertar());
    console.log(janela.abrir());
}

SistemaMulti(new fabricaWindows());
console.log("-------------------------")
SistemaMulti(new fabricaMac());
console.log("-------------------------")
SistemaMulti(new fabricaLinux());
