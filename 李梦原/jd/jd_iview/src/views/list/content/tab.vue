<template>
    <div class="left_inner" ref='left_inner' :style="{transform:`translateY(${y}px)`,transition:`${time}s`}">
        <ul>
            <li :class="{current:id == item.id}" v-for="item in tabAry" @click='fn(item)'>{{item.til}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id:1,
                time:0,
                y:0,
                rem:0,
                h:0,
            }
        },
        props:['tabAry'],
        mounted() {
            this.setHeight();
            this.bindmoveEvent();
        },
        methods:{
            setHeight(){
                let wh = document.documentElement.clientHeight || document.body.height;
                let rem = parseFloat(getComputedStyle(document.documentElement,null).fontSize);
                this.h = wh - 55/37.5*rem;
                this.rem = rem;
            },
            bindmoveEvent(){
                let div = this.$refs.left_inner;
                //通过$refs获取元素
                let flag = false;
                let that = this;
                div.ontouchstart = function (e) {
                    this.sy = e.touches[0].pageY;
                    this.startY = that.y;
                    that.time = 0;
                    flag = true
                };
                div.ontouchmove = function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if(!flag)return;
                    this.my = e.touches[0].pageY;
                    let h = this.my - this.sy;
                    that.y = h + this.startY ;
                };
                div.ontouchend = function () {
                    if(that.y > 0){
                        that.y = 0
                    }
                    flag = false;
                }
            },
            fn(item){
                let n = this.tabAry.indexOf(item);
                let div = this.$refs.left_inner;
                this.y = -n*45*rem/37.5;
                this.id = item.id;
                this.$emit('click',item)
                this.time = 0.5;

                console.log(this.tabAry.indexOf(item))
            }
        }
    }
</script>

<style scoped lang='less'>
    @r:37.5rem;
    ul{
        li{
            height: 45/@r;
            line-height: 45/@r;
            text-align: center;
            font-size: 16/@r;
        }
        li.current{
            background: #fff;
        }
    }
</style>