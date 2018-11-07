import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


const store = new Vuex.Store({

  // ____________________STATE____________________
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  // ____________________GETTERS____________________
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  // ____________________MUTATIONS____________________
  mutations: {
    increment (state, payload) {
      state.count += payload.amount
    },
    decrement (state, payload) {
      state.count -= payload.amount
    }
  },
  // ____________________ACTIONS____________________
  actions: {
    async incremenOn2tAsync({commit}) {
      setTimeout(() => {
        commit({
          type: 'increment',
          amount: 2
        })
      }, 1000)
    },
    async incremenTwicetAsync({dispatch, commit}) {
      await dispatch('incremenOn2tAsync');
      commit({
        type: 'increment',
        amount: 3
      })
    },
    incrementAsync ({ commit }, payload) {
      setTimeout(() => {
        commit({
          type: 'increment',
          amount: payload.amount
        })
      }, 1000)
    }
  }


});

export default store;
