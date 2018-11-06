<template>
    <div class="rec_box">
        <div class="til">
            ————————— <Icon type="thumbsup"></Icon> 为您推荐 —————————
        </div>
        <ul class="list_box ovf">
            <li :class="{lt:i%2,rt:i%2==0}" v-for="i in data">
                <img src="https://img10.360buyimg.com/n7/jfs/t25771/209/543308705/199437/28e65d76/5b74245bN2abf455d.jpg!q70.dpg" alt="">
                <div>飞亚达石英表</div>
                <div>
                    <div>$700.00</div>
                    <div>看相似</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['data']
    }
</script>

<style scoped lang='less'>
    @r:37.5rem;
    .rec_box{
        background: #f0f2f5;
        .til{
            position: relative;
            color: #848689;
            font-size: 14/@r;
            padding: 20/@r 10/@r;
            text-align: center
        }
        .list_box{
            li{
                background: #fff;
                width: 186/@r;
                text-align: center;
                border-top:3/@r solid #f0f2f5;
                img{
                    width: 100%
                }
            }
        }
    }
</style>