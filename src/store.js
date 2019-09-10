import Vue from 'vue'
import Vuex from 'vuex'
import jsonp from 'jsonp'

Vue.use(Vuex)

export default new Vuex.Store({
  // 声明需要使用的数据
  state: {
    title: '',
    list: [],
    detail: null
  },
  // 修改数据
  mutations: {
    setListPage (state, payload) {
      state.title = payload.title
      state.list = payload.list
      // console.log(state)
    },
    setDetail (state, data) {
      state.title = data.title
      state.detail = data.item
      // console.log(state)
    }
  },
  // 异步获取数据
  actions: {
    getListPage (context, url) {
      jsonp(`http://api.douban.com/v2/movie/${url}?apikey=0df993c66c0c636e29ecbb5344252a4a`, (err, data) => {
        if (err) return err
        // console.log(data)
        context.commit('setListPage', { title: data.title, list: data.subjects })
      })
    },
    getDetail (context, id) {
      jsonp(`http://api.douban.com/v2/movie/subject/${id}?apikey=0df993c66c0c636e29ecbb5344252a4a`, (err, data) => {
        if (err) return err
        // console.log(data)
        context.commit('setDetail', { title: data.title, item: data })
      })
    }
  }
})
