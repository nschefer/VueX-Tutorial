import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { id: 0, name: 'Banana Skin', price: 20 },
      { id: 1, name: 'Shiny Star', price: 40 },
      { id: 2, name: 'Green Shells', price: 60 },
      { id: 3, name: 'Red Shells', price: 80 },
    ]
  },
  getters: {
    saleProducts: state => {
      const saleProducts = state.products.map(product => {
        return {
          id: product.id,
          name: `**${product.name}**`,
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {
    reducePrice: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },
  actions: {
    reducePrice: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrice', payload)
      }, 2000)
    }
  }
}
)
