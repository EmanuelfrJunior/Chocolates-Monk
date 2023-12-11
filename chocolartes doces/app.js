
const myApp = {
    data() {
        return{
            produtos :[
                {
                img : './chocolartes/images/chocolate2.png',
                descricao : 'Monk Ocean',
                valor : 10
                },
                {
                    img : './chocolartes/images/chocolate3.png',
                    descricao : 'Monk Son',
                    valor : 10
                },
                {
                    img : './chocolartes/images/3cho.png',
                    descricao : 'Monks Arco-Irís',
                    valor : 30
                },
                {
                    img : './chocolartes/images/ch1.png',
                    descricao : 'Monk purple',
                    valor : 10
                },
        ],
        carrinho: [],
        };
    }, 
    methods: {
        addCart(produto){
            this.carrinho.push(produto);
        },
        limparCart(){
             this.carrinho = [];
        },
        totalCarrinho(){
          return this.formatarMoeda(this.carrinho.reduce((total, item) => 
          total + item.valor, 0));
        },
        formatarMoeda(valor){
        return valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        }
    },
}

const app = Vue.createApp(myApp);