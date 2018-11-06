<template>
    <div class="jd_kb ovf">
        <img class='lt' src="https://m.360buyimg.com/mobilecms/jfs/t14752/82/2574581467/6535/c8158ace/5aa8935bN94e31ff6.jpg.dpg" alt="">
        <div class="swiper-container kb lt">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiper-no-swiping" v-for="item in data">
                    <a href="###">{{item.text}}</a>
                </div>
                <!-- <div class="swiper-slide swiper-no-swiping">
                    <a href="###">这是个京东快报的模板</a>
                </div>
                <div class="swiper-slide swiper-no-swiping">
                    <a href="###">这是个京东快报的模板这是个京东快报的模板</a>
                </div> -->
            </div>
            
        </div>
        <a href='###' class='more rt'>更多</a>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        props:{
            data:{
                default(){
                    return []
                }
            }
        },
        mounted(){
            if(this.data.length){
                this.init()
            }
        },
        updated(){
            this.init()
        },
        methods:{
            init(){
                let kb = new Swiper('.kb',{
                    autoplay:{
                        delay:2000,
                        disableOnInteraction:false
                    },
                    loop:true,
                    direction:'vertical'
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @r:37.5rem;
    .jd_kb{
        width: 350/@r;
        height: 30/@r;
        margin: 5/@r auto;
        font-size: 14px;
        a{
            color:#111;
        }
        >img{
            width: 73/@r;
        }
        .swiper-container{
            width: 230/@r;
            height: 30/@r;
            a{
                display: block;
                width: 100%;
                height: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                padding-left:5/@r;
            }
        }
        .more{
            position: relative;
            &::after{
                content: '';
                position: absolute;
                height: 15/@r;
                border-right:1px solid #ccc; 
                left: -10/@r;
                top: 2/@r;
            }
        }
    }
</style>