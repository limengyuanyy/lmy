<template>
    <div>
        <CommonHeader title='购物车'></CommonHeader>
        <List></List>
        <MyFooter></MyFooter>
    </div>
</template>

<script>
    import CommonHeader from '../common/com_header.vue'
    import List from './list.vue'
    import MyFooter from './footer.vue'
    export default {
        components:{
            CommonHeader,List,MyFooter
        }
    }
</script>

<style scoped>

</style>