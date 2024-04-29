const user = {
    state: () => ({
        id: sessionStorage.getItem("user:id")||"",
    }),

    mutations: {
        setUserId(state,id) {
            // 设置用户id
            return state.id = id;
        }
    },

    actions: {
        setLoginUserId(context,id){
            // 设置登录用户id
           sessionStorage.setItem("user:id",id)
            return id;
        }
    },

    getters: {
        loginUserId(state) {
            return state.id;
        }
    }
}
export default user;