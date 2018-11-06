<template>
    <div class="tabs_box ovf" :style="{height:this.h+'px'}">
        <div class="left_box lt">
            <Tab :tabAry="tabAry" @click='fn'></Tab>
        </div>
        <div class="right_box rt">
            <div class="right_inner">
                <div class="jd_div" v-for='item in ary'>
                    <h2>{{item.til}}</h2>
                    <ul class="ovf">
                        <li class="lt" v-for='i in 10'>
                            <img src="https://img14.360buyimg.com/focus/s140x140_jfs/t13090/243/1346860411/3202/d2be91c4/5a1eb13eN06688863.jpg" alt="">
                            <div>吸顶灯</div>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    import Tab from './tab.vue'
    export default {
        data() {
            return {
                tabAry: [
                    {id:1,til:"热门推荐"},
                    {id:2,til:"手机数码"},
                    {id:3,til:"家用电器"},
                    {id:4,til:"电脑办公"},
                    {id:5,til:"美妆护肤"},
                    {id:6,til:"汽车用品"},
                    {id:7,til:"京东超市"},
                    {id:8,til:"男装"},
                    {id:9,til:"男鞋"},
                    {id:10,til:"女装"},
                    {id:11,til:"女鞋"},
                    {id:12,til:"手机数码"},
                    {id:13,til:"家用电器"},
                    {id:14,til:"电脑办公"},
                    {id:15,til:"美妆护肤"},
                    {id:16,til:"汽车用品"},
                    {id:17,til:"京东超市"},
                    {id:18,til:"男装"},
                    {id:19,til:"男鞋"},
                    {id:20,til:"女装"},
                    {id:21,til:"女鞋"}
                ],
                h:0, 
                ary:[{til:"热卖推荐"},{til:"热卖推荐2"},{til:"热卖推荐3"},{til:"热卖推荐4"}]
            }
        },
        components:{Tab},
        mounted() {
            this.setHeight();
        },
        methods:{
            setHeight(){
                let wh = document.documentElement.clientHeight || document.body.height;
                let rem = parseFloat(getComputedStyle(document.documentElement,null).fontSize);
                this.h = wh - 55/37.5*rem;
                this.rem = rem;
            },
            fn(item){
                this.ary.forEach((val)=>{
                    val.til = item.til+item.id;
                })
            }
        }
    }
</script>

<style scoped lang='less'>
    @r:37.5rem;
    .tabs_box{
        padding-top: 45/@r;
        // padding-bottom: 55/@r;
        height: 100%;
        box-sizing: border-box;
        overflow: hidden;
        .left_box{
            width: 85/@r;
            background: #f8f8f8;
            height: 100%;
            overflow: hidden;
            // transition: 0.5s;
            // transform: translateY(0);
        }
        .right_box{
            width: 280/@r;
            height: 100%;
            overflow: scroll;
            .jd_div{
                margin-top: 18/@r;
                h2{
                    font-weight: 600;
                    font-size: 18/@r;
                }
                ul{
                    li{
                        width: 84/@r;
                        height: 107/@r;
                        text-align: center;
                        img{
                            width: 70/@r;
                            height: 70/@r;
                        }
                    }
                }
            }
        }
    }
</style>