import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './less/index.css';
import 'swiper/dist/css/swiper.min.css';


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);

//注册一个全局的过滤器
Vue.filter('money',function (value) {
    return (value/100).toFixed(2)
})

// 路由配置
const RouterConfig = {
    mode: 'hash',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

const store = new Vuex.Store({
    state: {
        //公用数据
        goods:[], //购物车中的商品列表
    },
    getters: {
        //vue 中的computed
        num(state){
            //只要goods 发生变化，num就会跟着改变
            //换句话说就是num 依赖于 goods
            //num是购物车中的商品数量
            let list = state.goods;
            let n = 0;
            list.forEach((item) => {
                n += item.num * 1
            })
            return n;
        }
    },
    mutations: {
        //mutations是官方推荐的修改state中数据的途径
        add123(state,obj){
            //向购物车添加商品
            if(state.goods.indexOf(obj)!=-1){
                obj.num++;
            }else{
                state.goods.push(obj)
            }
        },
        remove(state,obj){
            //从购物车中删除对应的商品
            state.goods = state.goods.filter((item)=>{
                return item != obj
            })
        }
    },
    actions: {
        //用来触发mutations中的函数
        add({commit},obj){
            commit('add123',obj)
        },
        remove({commit},obj){
            commit('remove',obj)
        }
    }
});


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});