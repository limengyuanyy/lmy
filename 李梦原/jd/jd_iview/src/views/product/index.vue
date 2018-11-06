<template>
    <div>
        <MyHeader title='商品 评价 详情 推荐'></MyHeader>
        <div class="banner">
            <div class="img_box">
                <img :src="obj.bannerSrc" alt="">
            </div>
            <h2>商品ID是{{id}}</h2>
            <h2>商品价格是{{obj.price|money}}</h2>
            <div class="ad_box">
                <img  v-for='i in obj.adImg' :src="i" alt="">
            </div>
        </div>
        <MyFooter @add='add'></MyFooter>
    </div>
</template>

<script>
import MyHeader from '../common/com_header.vue'
import MyFooter from './footer.vue'
    export default {
        data() {
            return {
                id: this.$route.query.id,
                obj:{
                    id: this.$route.query.id,
                    bannerSrc:'https://m.360buyimg.com/mobilecms/s750x750_jfs/t20233/91/755762273/310559/39fd264e/5b168a17N1d2e63c9.jpg!q80.dpg.webp',
                    adImg:[
                        'https://img30.360buyimg.com/popWaterMark/jfs/t27619/48/1033981781/299860/f8c1f91b/5bc04e19Ne7492851.jpg!q70.dpg',
                        'https://img30.360buyimg.com/popWaterMark/jfs/t27619/48/1033981781/299860/f8c1f91b/5bc04e19Ne7492851.jpg!q70.dpg',
                        'https://img30.360buyimg.com/popWaterMark/jfs/t27619/48/1033981781/299860/f8c1f91b/5bc04e19Ne7492851.jpg!q70.dpg'
                    ],
                    num:1,
                    isSelect:true,
                    price:100000
                }
            }
        },
        components:{
            MyHeader,MyFooter
        },
        methods: {
            add() {
                this.$store.dispatch('add',this.obj); 
            }
        },
    }
</script>

<style scoped lang='less'>
@r:37.5rem;
    .banner{
        padding-top: 50/@r;
        .img_box{
            width: 10rem;
            height: 10rem;
            overflow: hidden;
            img{
                width: 100%
            }
        }
        h2{
            font-size: 20/@r;
            height: 50/@r;
            line-height: 50/@r;
            background: #df5757;
            color: #FFF;
            margin: 10/@r 0;
            text-align: center;
        }
        .ad_box{
            width: 10rem;
            overflow: hidden;
            img{
                width: 100%;
                margin-bottom: 10/@r;
            }
        }
    }
</style>