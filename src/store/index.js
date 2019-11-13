import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
    state:{
        userId:0,
        update:false
    },
    mutations:{
        changeId(state,userId){
            state.userId = userId
        },
        changeUpdate(state,update){
            state.update = update
        }
    },
    actions:{
        changeId(context,userId){
            context.commit("changeId",userId)
        },
        changeUpdate(context,update){
            context.commit("changeUpdate",update)
        }
    }
})

export default store