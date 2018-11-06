<template>
    <div>
        <myHeader></myHeader>
        <myContent></myContent>
    </div>
</template>

<script>
    import myHeader from './list_header.vue'
    import myContent from './content/index.vue'
    export default {
        components:{
            myHeader,
            myContent
        }
    }
</script>

<style scoped>

</style>