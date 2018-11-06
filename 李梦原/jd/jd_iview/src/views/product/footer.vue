<template>
    <div class="footer">
        <ul class="ovf">
            <li class='icon_box lt'>
                <i class='iconfont icon-jingdong'></i>
                <p>联系客服</p>
            </li>
            <li class='icon_box lt'>
                <i class='iconfont icon-Dollar'></i>
                <p>进店</p>
            </li>
            <li class='icon_box lt' @click="goCart">
                <i class='iconfont icon-tubiaozhizuomoban'></i>
                {{this.$store.getters.num}}
                <p>购物车</p>
            </li>
            <li class='join_cart lt' @click="add">
                加入购物车
            </li>
            <li class='join_cart lt'>
                立即秒杀
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            add() {
                //触发actions 中的add
                this.$emit('add')
            },
            goCart(){
                this.$router.push('/cart')
            }
        },
        computed:{
            
        }
    }
</script>

<style scoped lang='less'>
@r:37.5rem;
    .footer{
        position: fixed;
        z-index: 1000;
        width: 100%;
        bottom: 0;
        height: 50/@r;
        background: #fff;
        ul{
            height: 100%;
            li{
                height: 100%;
                text-align: center;
            }
        }
        .icon_box{
            width: 55/@r;
            overflow: hidden;
        }
        .join_cart{
            width: 105/@r;
            height: 100%;
            line-height: 50/@r;
            background: #ff9600;
            color: #fff;
            font-size: 13/@r;
        }
    }
</style>