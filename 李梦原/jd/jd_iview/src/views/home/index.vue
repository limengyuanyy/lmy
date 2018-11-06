<template>
    <div class='homeBox'>
        <myheader></myheader>
        <mySwiper :data="ary"></mySwiper>
        <div class="ad_box">
            <img src="https://m.360buyimg.com/mobilecms/jfs/t26821/315/1207928843/116614/3d50981f/5bc44208Nc9ac4ca7.jpg!q70.jpg.dpg">
        </div>
        <navs></navs>
        <kuaibao :data='kbList'></kuaibao>
        <div class="quanBox">
           <img src='https://m.360buyimg.com/mobilecms/jfs/t22744/292/1084367988/71231/bda0b7d6/5b4ef400Nbdededc9.jpg!q70.jpg.dpg'>
           <img src='https://m.360buyimg.com/mobilecms/jfs/t22744/292/1084367988/71231/bda0b7d6/5b4ef400Nbdededc9.jpg!q70.jpg.dpg'>
        </div>
        <miaosha></miaosha>
        <div class="ad_box2">
            <img src='https://m.360buyimg.com/mobilecms/jfs/t26707/113/1279602227/106480/76fc002d/5bc591b2Nd8d7432c.jpg!q70.jpg.dpg'>
        </div>
        <goodsRec :two='[1,2,3,4]' :four='[1,2,3,4]' title='农 / 家 / 小 / 院'></goodsRec>
        <goodsRec :two='[1,2]' :four='[1,2,3,4]' title='每 / 日 / 逛'></goodsRec>
        <goodsRec :four='[1,2,3,4]' title='爱 / 生 / 活'></goodsRec>
        <goodsRec :two='[1,2,3,4]'  title='逛 / 商 / 场'></goodsRec>
        <recommond :data='[1,2,3,4,5,6,7,8,9,10]'></recommond>
    </div>
</template>

<script>
    import myheader from '../common/home_header.vue'
    import mySwiper from '../common/swiper.vue'
    import navs from './navs.vue'
    import kuaibao from '../common/kuaibao.vue'
    import miaosha from './miaosha.vue'
    import goodsRec from './goodsRec.vue'
    import recommond from './recommond.vue'
    export default {
        data(){
             return {
                 ary:[{"id":1,"src":"https://m.360buyimg.com/mobilecms/jfs/t25339/69/2102467589/153201/28ee479d/5bc404f3N3924acf5.jpg!cr_1125x549_0_72"},{"id":2,"src":"https://m.360buyimg.com/mobilecms/jfs/t1/3711/3/11242/87899/5bcec49cE25a2e605/18780e5e01bf73c6.jpg!cr_1125x549_0_72"},{"id":3,"src":"https://m.360buyimg.com/mobilecms/jfs/t1/4443/7/11024/151130/5bcd2b72E843d6713/ded4149d39ba1091.jpg!cr_1125x549_0_72"},{"id":4,"src":"https://m.360buyimg.com/mobilecms/s1125x690_jfs/t1/4985/17/11214/166970/5bce72a0Ecc628d48/af965d72018cc9dd.jpg!cr_1125x549_0_72!q70.jpg.dpg"},{"id":5,"src":"https://m.360buyimg.com/mobilecms/s1125x690_jfs/t25096/271/2218221646/107871/ba4b932e/5bc5a33dN103a7170.jpg!cr_1125x549_0_72!q70.jpg.dpg"}],
                 kbList:[{"text":"国产新机皇诞生：5G手机＋1024G＋9000W像素","type":"最热"},{"text":"首款10G运存机型将亮相，网友感叹电脑才8G，真不敢想","type":"推荐"},{"text":"10G运存机型将亮相，网友感叹电脑才8G，真不敢想","type":"最新"},{"text":"首款1将亮相，网友感叹电脑才8G，真不敢想","type":"推荐"},{"text":"首款22G运存机型将亮相，网友感叹电脑才8G，真不敢想","type":"最热"},{"text":"11G运存机型将亮相，网友感叹电脑才8G，真不敢想","type":"推荐"},{"text":"运存机型将亮相，网友感叹电脑才8G，真不敢想","type":"最新"}]
             }
        },
        components:{
            myheader:myheader,
            mySwiper,
            navs,
            kuaibao,
            miaosha,
            goodsRec,
            recommond
            
        }
    }
</script>

<style scoped lang='less'>
@r:37.5rem;
.homeBox{
    margin-bottom:70/@r;
}
.ad_box{
    width: 100%;
    height:115 / @r; 
    background:#ccc;
    border-radius: 10 / @r 10 / @r 0 0;
    margin-top:-10 / @r;
    position: relative;
    z-index:50;
    overflow: hidden;
        img{
           width: 100%;
        }
}
.quanBox{
    width:100%;
    overflow: hidden;
    img{
        width:50%;
        float: left;
    }

}
.ad_box2{
    width:100%;
    height:115/@r;
    img{
        width: 100%;
    }
}

</style>