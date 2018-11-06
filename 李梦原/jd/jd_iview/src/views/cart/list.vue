<template>
    <div class='cart_list pt50'>
        <div class="select_box" @click='selectAll'>
            <Icon type="ios-checkmark" size='20' :class="isSelectAll ? 'iconRed' : 'iconWhite'"></Icon><span>全选</span>
        </div>
        <ul>
            <li class="ovf" v-for='i in goods'>
                <div class=" ovf lt" @click="selectOne(i)">
                    <Icon type="ios-checkmark" :class="i.isSelect ? 'iconRed' : 'iconWhite'" size='20'></Icon>
                </div>
                <div class="pic_box lt">
                    <img :src="i.bannerSrc" alt="">
                    <h2>商品介绍</h2>
                    <div>￥{{i.price|money}}</div>
                    <div>
                        商品数量:<input type="number" v-model='i.num'>
                    </div>
                </div>
                

            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                goods: this.$store.state.goods
            }
        },

        methods: {
            selectAll() {
                if(this.isSelectAll){
                   this.goods.forEach((item)=>{
                        item.isSelect = false;
                    }) 
                }else{
                    this.goods.forEach((item)=>{
                        item.isSelect = true;
                    })
                }
            },
            selectOne(item){
                item.isSelect = ! item.isSelect;
            }
        },
        computed:{
            isSelectAll(){
                return this.goods.every(item => item.isSelect)
                //every 只要有一个回调return false；那么结果就是false
                //some  只要有一个回调return true ；那么结果就是true
            },
            total(){
                let n = 0;
                console.log(this.goods)
                this.goods.forEach((item)=>{
                    n += item.num * item.price;
                })
                return n;
            }
        }
    }
</script>

<style scoped lang='less'>
@r:37.5rem;
.iconRed{
    color:#e4393c
}
.iconWhite{
    color: #ccc;
}
    .cart_list{
        padding: 50/@r 10/@r;
        .select_box{
            font-size: 16/@r;
            span{
                margin-left: 10/@r;
            }
            border-bottom: 1px solid #ccc;
        }
        ul{
            li{
                border-bottom: 1px solid #ccc;
                padding: 10/@r 0;
                font-size: 16/@r;
                div:nth-child(1){
                    width: 25/@r
                }
                div:nth-child(2){
                    text-align: center;
                    width: 320/@r
                }
                .pic_box{
                    div,h2{
                        height: 30/@r;
                    }
                    img{
                        width: 10rem;
                    }
                    input{
                        outline: none;
                        border:1px solid rgb(185, 183, 183);
                        width: 50/@r;
                        text-align: center
                    }
                }
            }
        }
    }
</style>