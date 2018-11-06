<template>
    <div class="miaosha_box">
        <div class="title_wrap">
            <a href="javascript:void(0);" class="ovf">
                <strong class="seckill-tit-txt lt">京东秒杀</strong>
                <strong class="seckill-nth lt">12点场</strong>
                <div class="seckill-timer lt">
                    <div class="seckill-time lt">{{hour}}</div>
                    <span class="seckill-time-separator lt">:</span>
                    <div class="seckill-time lt">{{minute}}</div>
                    <span class="seckill-time-separator lt">:</span>
                    <div class="seckill-time lt">{{second}}</div>
                </div>
            </a>
            <a class="seckill-more-link rt" href="javascript:void(0);">
                更多秒杀<Icon type="ios-arrow-forward" class='more_arrow'></Icon>
            </a>
        </div>
        <div class="over_box">
            <div class="scroll_box">
                <ul :style="{width:liW*num+'px'}" ref='ul'>
                    <li class='lt' v-for='i in num' ref="li" @click='buy(i)'>
                        <img src="https://img14.360buyimg.com/n1/s200x200_jfs/t21064/116/2688094925/87836/e24c0e00/5b615f40Ndba79345.jpg.dpg" alt="">
                        <div class="new_price">￥1330</div>
                        <div class="old_price">￥1450</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 10,
                liW:'',
                hour:'',
                minute:'',
                second:'',
                timer: null
            }
        },
        mounted(){
            this.liW = parseFloat(getComputedStyle(this.$refs.li[0],null).width);
            this.timeCount()
        },
        methods:{
            timeCount(){
                let time = new Date().getTime() + 100000;
                setInterval(()=>{
                    this.computedTime(time);
                },1000)
            },
            computedTime(duration){
                let dur = new Date(duration).getTime();
                let now = new Date().getTime();
                let t = dur - now;
                let h = parseInt(t/3600000);
                t = t - h*3600000;
                let m = parseInt(t/60000);
                t = t - m * 60000;
                let s = parseInt(t/1000);
                this.hour = h < 10 ? `0`+h : h;
                this.minute = m < 10 ? '0'+m : m;
                this.second = s < 10 ? "0" + s : s;
            },
            buy(id){
                this.$router.push({path:'/product',query:{id:id}})
            }
        }
    }
</script>

<style scoped lang='less'>
    @r:37.5rem;
    .title_wrap{
        height: 34/@r;
        line-height: 34/@r;
        vertical-align: middle;
        a{
            color: #000;
        }
        .seckill-tit-txt{
            color:#f02b2b;
            font-size: 16/@r;
            margin-left: 5/@r;
        }
        .seckill-nth{
            color: #000;
            margin-left: 5/@r;
        }
        .seckill-timer{
            margin-left: 5/@r;
            vertical-align: middle;
            .seckill-time{
                width: 20/@r;
                height: 20/@r;
                border: 1px solid #ccc;
                line-height: 20/@r;
                text-align: center;
                margin-top: 7/@r;
            }
            .seckill-time-separator{
                
            }
        }
        .seckill-more-link{
            color: #f02b2b;
            font-size: 13/@r;
            margin-right: 7/@r;
            .more_arrow{
                padding-left: 5/@r;
            }
        }
    }   
    .over_box{
        height: 125/@r;
        overflow: hidden;
    } 
    .scroll_box{
        height: 135/@r;
        overflow: scroll;
        ul{
            li{
                height: 125/@r;
                overflow: hidden;
                width: 80/@r;
                img{
                    width: 70/@r;
                    height: 70/@r;
                }
                >div{
                    width: 100%;
                    text-align: center
                }
                .new_price{
                    font-size:16/@r;
                    color: #f02b2b; 
                }
                .old_price{
                    font-size: 14/@r;
                    color: #686868;
                    text-decoration: line-through;
                }
            }
        }
    }
</style>