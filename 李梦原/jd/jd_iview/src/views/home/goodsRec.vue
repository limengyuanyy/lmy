<template>
    <div class='rec_list_box'>
        <div class="title"> {{title}} </div>
        <div class="two">
            <ul class="ovf">
                <li class="lt" 
                    :class="{borderLeft:i%2 == 0,borderTop:i>2}" 
                    v-for='i in two'
                >
                    <strong>———西装礼仪—</strong>
                    <p class="text_over">西装指南</p>
                    <div class="img_box">
                        <img src="https://m.360buyimg.com/mobilecms/jfs/t21910/159/1001369388/134364/2af00a6/5b1e3800N3120681c.jpg!q70.jpg.dpg" alt="">
                        <img src="https://m.360buyimg.com/mobilecms/jfs/t21910/159/1001369388/134364/2af00a6/5b1e3800N3120681c.jpg!q70.jpg.dpg" alt="">
                    </div>
                </li>
            </ul>
        </div>
        <div class="four">
            <ul class="ovf">
                <li class="lt four_li" 
                    v-for='i in four' 
                    :class="{borderLeft:i!=1,borderTop:two||i>4}">
                    <strong>出差金鹰</strong>
                    <p>商务必备</p>
                    <img src="https://m.360buyimg.com/mobilecms/jfs/t1/854/1/5624/171941/5b9f5e9eE5627d153/1e86a540880ec060.png!q70.jpg.dpg" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props:['two','four','title']
    }
</script>

<style scoped lang='less'>
    @r:37.5rem;
    .rec_list_box{
        background: #f5f5f5;
        .title{
            height: 35/@r;
            line-height: 35/@r;
            text-align: center;
            font-size: 18/@r;
            font-weight: 600;
            background: -webkit-linear-gradient(left,#FF2A00,#FF00AF,#FF2A00);
            background: linear-gradient(90deg, #FF2A00,#FF00AF,#FF2A00);
            -webkit-background-clip: text;
            color: transparent;
            
        }
        .two,.four{
            background: #fff;
            overflow: hidden;
            ul{
                li{
                    width: 50%;
                    height: 120/@r;
                    padding: 0 10/@r;
                    box-sizing: border-box;
                    text-align: center;
                    overflow: hidden;
                    strong{
                        display: block;
                        font-size: 18/@r;
                    }
                    p{
                        font-size: 16/@r;
                    }
                    .img_box{
                        width: 100%;
                        height: 65/@r;
                        text-align: center;
                        box-sizing: border-box;
                        padding: 0 5/@r;
                        overflow: hidden;
                        img{
                            width: 65/@r;
                            height: 65/@r;
                        }
                    }
                }
                .four_li{
                    width: 25%;
                    height: 150/@r;
                    padding: 10/@r 6/@r ;
                    box-sizing: border-box;
                    img{
                        margin-top: 10/@r;
                        width: 80%;
                    }
                }
                li.borderTop{
                    border-top:1/@r solid #f5f5f5;
                }
                li.borderLeft{
                    border-left:1/@r solid #f5f5f5;
                }
            }
        }
        .two{
            padding-top:5/@r 
        }
        .four{
            padding-bottom: 5/@r;
        }
    }
</style>