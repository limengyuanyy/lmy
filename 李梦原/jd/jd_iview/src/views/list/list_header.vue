<template>
    <div class="list_header ovf">
        <div class='lt' @click='back'>
            <!-- <Icon type="chevron-left"></Icon> -->
            <i class="iconfont icon-jiantou2" style='color:#848181'></i>
        </div>
        <div class="search_box lt">
            <span class='iconfont icon-sousuo lt'></span>
            <span class="text_box lt" @click='go'>茅台京东超级品牌日</span>    
        </div>
        <div class="rt">
            <!-- <Icon type="more"></Icon> -->
            <i class='iconfont icon-more' style="color:#848181"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        go() {
            this.$router.push('/search')  
        },
        back(){
            this.$router.back();
        }
    },
};
</script>

<style scoped lang='less'>
    @r: 37.5rem;
    .list_header {
        position: fixed;
        width: 100%;
        z-index: 1000;
        height: 44/@r;
        background: #fff;
        border-bottom:1px solid #e5e5e5;
        div{
            height: 100%;
        }
        div:nth-child(2n-1){
            width: 50/@r;
            line-height: 44/@r;
            font-size: 20/@r;
            text-align: center;
            color: rgb(139, 134, 134);
        }
        div:nth-child(2){
            background: #f7f7f7;
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
            .icon-sousuo{
                color: #ccc;
                width: 20/@r;
                position: relative;
                padding-left:5/@r;
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
        .iconfont{
            color:#fff;
            font-size: 25px;
        }
    }
    .jd_header_top{
        background: transparent
    }
</style>