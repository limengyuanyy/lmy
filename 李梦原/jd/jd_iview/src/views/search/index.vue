<template>
<div class="search_box">
    <div class="list_header ovf">
        <div class='lt' @click='back'>
            <Icon type="chevron-left"></Icon>
        </div>
        <div class="search_box lt">
            <span class='iconfont icon-sousuo lt'></span>
            <input class="text_box lt" placeholder="茅台酒" v-model='name'>    
        </div>
        <div class="rt">
            <Button type="error" class='btn'>搜索</Button>
        </div>
    </div>
    <div class="hotSearch">
        <h2>热门搜索</h2>
        <ul class='ovf'>
            <li class='lt' v-for="item in ary" @click="fn(item)">{{item.til}}</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            ary:[
                    {id:1,til:"北极星挂钟"},
                    {id:2,til:"录音笔"},
                    {id:3,til:"篮球鞋"},
                    {id:4,til:"高清屏幕"},
                    {id:5,til:"加湿器"},
                    {id:6,til:"实木沙发"},
                    {id:7,til:"真丝睡衣"},
                ],
            name:''
        }
    },
    mounted() {
        
    },
    methods: {
        back() {
            this.$router.back();
        },
        fn(obj){
            this.name=obj.til;
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
            line-height: 40/@r;
            font-size: 20/@r;
            text-align: center;
            color: rgb(139, 134, 134);
        }
        div:nth-child(2){
            background: #f7f7f7;
            border-radius:50/@r;
            padding:0 5/@r;
            width: 260/@r;
            height: 30/@r;
            line-height: 28/@r;
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
                font-size: 15/@r;
                width: 180/@r;
                border:none;
                background: transparent;
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
        .btn{
            font-size: 14/@r;
            width: 40/@r;
            height: 27/@r;
            padding: 0
        }
    }
    .jd_header_top{
        background: transparent;
    }
    .hotSearch{
        padding: 50/@r 10/@r;
        box-sizing: border-box;
        h2{
            font-size:18/@r;
        }
        ul{
            li{
                height: 20/@r;
                padding: 2/@r 15/@r;
                background: #f7f7f7;
                border-radius: 5/@r;
                margin: 5/@r;
            }
        }
    }
</style>
