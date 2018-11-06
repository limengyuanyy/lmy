<template>
    <div class="jd_header  ovf" :class="{jd_header_top:isOpa}">
        <div class='iconfont icon-caidan lt' @click='fn'></div>
        <div class="search_box lt">
            <span class='iconfont icon-jingdong lt'></span>
            <span class='iconfont icon-sousuo lt'></span>
            <span class="text_box lt" @click='go'>茅台京东超级品牌日</span>    
        </div>
        <div class="iconfont icon-user rt" @click='toUser'></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpa:true
        }
    },
    mounted() {
        document.body.addEventListener('touchmove',()=>{
            let t = document.documentElement.scrollTop;
            
            if(t > 0){
                this.isOpa = false
            }else{
                this.isOpa = true;
            }
        })
    },
    methods: {
        go() {
            this.$router.push('/search')  
        },
        toUser(){
            this.$router.push('/mine')
        },
        fn(){
            //跳转到分类页
            this.$router.push('/list')
        }
    },
};
</script>

<style scoped lang='less'>
    @r: 37.5rem;
    .ovf{
        overflow: hidden;
    }
    .lt{
        float: left;
    }
    .rt{
        float: right;
    }
    .jd_header {
        position: fixed;
        width: 100%;
        z-index: 1000;
        height: 44/@r;
        background: rgb(241, 71, 71);
        div:nth-child(1){
            width: 50/@r;
            margin: 4/@r 0 0;
            text-align: center;
        }
        div:nth-child(2){
            background: #fff;
            border-radius:50/@r;
            padding:0 5/@r;
            width: 273/@r;
            height: 30/@r;
            line-height: 30/@r;
            margin: 7/@r auto 0;
            .iconfont{
                display: block;
                font-size: 20px;
                text-align: center
            }
            .icon-jingdong{ 
                color:#e43130;
                font-weight: 600;
                width: 35/@r;
            }
            .icon-sousuo{
                color: #ccc;
                width: 20/@r;
                position: relative;
                padding-left:5/@r;
                &::after{
                    content: '';
                    position: absolute;
                    height: 15/@r;
                    left: 0;
                    top: 7.5/@r;
                    border-right: 1px solid #ccc;
                }
            }
            .text_box{
                display: block;
                width: 200/@r;
                box-sizing: border-box;
                padding: 0 10/@r;
                color: rgb(202, 199, 199);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        div:nth-child(3){
            width: 50/@r;
            margin: 4/@r 0 0;
            text-align: center;
        }
        .iconfont{
            color:#fff;
            font-size: 25px;
        }
    }
    .jd_header_top{
        background: transparent
    }
</style>