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
                count: 1,
                checked:false
            })
        },
        clearCart(state) {
            // 清空购物车
            state.carts = [];
        },
        removeCart(state, item) {
            // 移除购物车中的商品
            state.carts.forEach((cart, index) => {
                if (cart.id == item.id) {
                    state.carts.splice(index, 1);
                }
            });
        },
        updateNum(state, {id, num}) {
            // 更新购物车中的商品数量
            for (let i = 0; i < state.carts.length; i++) {
                let c = state.carts[i];
                if (c.id == id) {
                    c.count = num;
                    if (c.count == 0) {
                        state.carts.splice(i, 1);
                    }
                    break;
                }
            }
        }
    }
    ,
    actions: {
        addToCart(context, item) {
            context.commit('addCart', item)
        }
        ,
        removeFromCart(context, item) {

        }
        ,
        clearCart(context) {
            context.commit('clearCart')
        }
        ,
        updateCartProductNum(context, info) {
            context.commit('updateNum', info)
        }
    }
    ,
    getters: {
        carts(state) {
            return state.carts;
        }
    }
}
export default cart;