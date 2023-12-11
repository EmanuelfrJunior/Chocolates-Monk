const produtoVenda = {
    template: `
    <div class="box">
            <div class="img-box">
              <img :src="produto.img" alt="">
            </div>
            <div class="detail-box">
              <h6>
                Monk <span>{{produto.descricao}}</span>
              </h6>
              <h5>
                {{produto.valor}}
              </h5>
              <a href="">
                Comprar Agora
              </a>
            </div>
          </div>
          </div>
    `,

    props: {
      produto: {
        type: Object,
        required: true
      },
    },

    data(){
        return{

        };
    },
};
app.component('produto-venda', produtoVenda);