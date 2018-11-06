<template>
    <div class="footer">
        <ul class="ovf">
            <li class='icon_box lt' @click='selectAll'>
                <Icon type="ios-checkmark" size='20' :class="isSelectAll ? 'iconRed' : 'iconWhite'"></Icon>
                <p>全选</p>
            </li>
            <li class='goBuy rt'>
                结算
            </li>
            <li class='total rt'>
                总计： <span class="iconRed">￥{{total|money}}</span>
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
                this.goods.forEach((item)=>{
                    item.isSelect = true;
                })
            }
        },
        computed:{
            isSelectAll(){
                return this.goods.every(item => item.isSelect)
            },
            total(){
                let n = 0;
                this.goods.forEach((item)=>{
                    if(item.isSelect){
                        n += item.num * item.price;
                    }
                    
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
    .footer{
        position: fixed;
        z-index: 1000;
        width: 100%;
        bottom: 0;
        height: 50/@r;
        background: #fff;
        border-top: 1px solid #ccc;
        ul{
            height: 100%;
            li{
                height: 100%;
                text-align: center;
            }
        }
        .icon_box{
            float: left;
            padding-left: 10/@r;
            overflow: hidden;
        }
        .total{
            line-height: 50/@r;
            font-size: 16/@r;
            padding: 0 10/@r
        }
        .goBuy{
            width: 105/@r;
            height: 100%;
            line-height: 50/@r;
            background: #e4393c;
            color: #fff;
            font-size: 13/@r;
        }
    }
</style>