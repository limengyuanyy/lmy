const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        redirect:'/home', 
        children:[
            {
                path:'/home',
                component: (resolve) => require(['./views/home/index.vue'], resolve),
            },
            {
                path:'/list',
                component: (resolve) => require(['./views/list/index.vue'], resolve),
            },
            {
                path: '/shopping',
                component: (resolve) => require(['./views/shopping/index.vue'], resolve),
            },
            {
                path: '/mine',
                component: (resolve) => require(['./views/mine/index.vue'], resolve),
            },
            
        ]
    },
    {
        path:'/cart',
        component: (resolve) => require(['./views/cart/index.vue'], resolve),
    },
    {
        path:'/search',
        component: (resolve) => require(['./views/search/index.vue'], resolve),
    },
    {
        path:'/product',
        component: (resolve) => require(['./views/product/index.vue'], resolve),
    }
];
export default routers;