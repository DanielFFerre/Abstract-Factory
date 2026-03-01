class cartaoDeCredito{
    descricao(){
        throw new Error('Método descrição() deve ser implementado');
    }
}

class boleto{
    descricao(){
        throw new Error('Método descrição() deve ser implementado');
    }
}   

class cartaoA extends cartaoDeCredito{
    descricao(valor){
        return `Cartão A - Valor: R$ ${valor.toFixed(2)}`;
    }
}
class boletoA extends boleto{
    descricao(valor){
        return `Boleto A - Valor: R$ ${valor.toFixed(2)}`;
    }
}

class cartaoB extends cartaoDeCredito{
    descricao(valor){
        return `Cartão B - Valor: R$ ${valor.toFixed(2)}`;
    }
}

class boletoB extends boleto{
    descricao(valor){
        return `Boleto B - Valor: R$ ${valor.toFixed(2)}`;
    }
}

class FabricaPagamento{
    criarCartaoDeCredito(){
        throw new Error('Método criarCartaoDeCredito() deve ser implementado');
    }
    criarBoleto(){
        throw new Error('Método criarBoleto() deve ser implementado');
    }
}

class FabricaPagamentoA extends FabricaPagamento{
    criarCartaoDeCredito(){
        return new cartaoA();
    }
    criarBoleto(){
        return new boletoA();
    }
}

class FabricaPagamentoB extends FabricaPagamento{
    criarCartaoDeCredito(){
        return new cartaoB();
    }
    criarBoleto(){
        return new boletoB();
    }
}

function codigoDaLoja(fabrica, valor){
    const cartao = fabrica.criarCartaoDeCredito();
    const boleto = fabrica.criarBoleto();
    console.log(cartao.descricao(valor));
    console.log(boleto.descricao(valor));
}
codigoDaLoja(new FabricaPagamentoA(), 100);
console.log("-------------------------")
codigoDaLoja(new FabricaPagamentoB(), 200);

