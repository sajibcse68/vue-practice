const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  'BUY_STOCK' (state, { stockId, quantity, stockPrice }) {
    console.log('state of BUY_STOCK', state);
    const record = state.stocks.find(element => element.id === stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: quantity
      });
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK' (state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(element => element.id === stockId);
    if (record) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  'SET_PORTFOLIO' (state, portfolio) {
    console.log('state of SET_PORTFOLIO', state);
    state.funds = portfolio.funds;
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
  }
};

const actions = {
  sellStock ({commit}, order) {
    commit('SELL_STOCK', order);
  }
};

const getters = {
  stockPortfolio (state, getters) {
    console.log('state:::: ', state);
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds (state) {
    console.log('>>>>>funds: ', state);
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
