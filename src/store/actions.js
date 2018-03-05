import Vue from 'vue';
import data from '../data/stocks';

export const updateValue = ({commit}, payload) => {
  commit('updateValue', payload);
};

export const loadData = ({ commit }, TESTING = false) => {
  if (!TESTING) {
    Vue.http.get('tradeRider.json')
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        if (data) {
          const stocks = data.stocks;
          const funds = data.funds;
          const stockPortfolio = data.stockPortfolio;
          const portfolio = {
            stockPortfolio,
            funds
          };
          commit('SET_STOCKS', stocks);
          commit('SET_PORTFOLIO', portfolio);
        }
      });
  } else {
    console.log('>>>>>>>TEST');
    commit('SET_STOCKS', data.stocks);
    commit('SET_PORTFOLIO', data.portfolio);
  }
};
