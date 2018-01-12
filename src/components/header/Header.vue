<template>
    <div class="header">
        <div class="content_wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64" />
            </div>
        </div>

    </div>
</template>
<script>

export default{
    //该组件的名称
    name:"Header",
    props:{
        seller:{
            type:Object
        }
    },
    components:{
        //注册子组件

    },
    data(){
        return{
            detailShow : false
        }
    },
    methods:{
        showDetail(){
            this.detailShow = true;
        },
        closeDetail(){
            this.detailShow = false;
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
    color:#fff
    background:rgba(7,17,27,0.5)
    position:relative
    overflow:hidden
</style>