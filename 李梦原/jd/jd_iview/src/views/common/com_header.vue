<template>
    <div class="list_header ovf">
        <div class='lt' @click='back'>
            <!-- <Icon type="chevron-left"></Icon> -->
            <i class="iconfont icon-jiantou2" style='color:#848181'></i>
        </div>
        <div class="search_box lt">
            {{title}}
        </div>
        <div class="rt">
            <!-- <Icon type="more"></Icon> -->
            <i class='iconfont icon-more' style="color:#848181"></i>
        </div>
    </div>
</template>

<script>
export default {
    props:['title'],
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
        .search_box{
            text-align: center;
            width:273/ @r;
            line-height:  30 /@r;
            margin:7/@r auto 0;
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