const cart = {
    state: () => ({
        carts: [] // 购物车数组
    }),
    mutations: {
        addCart(state, item) {
            // 添加商品到购物车
            for (let i = 0; i < state.carts.length; i++) {
                if (state.carts[i].id == item.id) {

                    state.carts[i].count++;
                    return;
                }
            }
            state.carts.push({
                id: item.id,
                name: item.name,
                price: item.price,
                count: 1
            })
        }
    },
    actions: {
        addToCart(context, item) {
            context.commit('addCart', item)
        }
    },
    getters: {
        carts(state) {
            return state.carts;
        }
    }
}
export default cart;