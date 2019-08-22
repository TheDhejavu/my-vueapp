<template>
    <button class="btn compose-button ripple" @click="openDialog"><i class='uil uil-comment-alt-edit'></i>Compose </button>
</template>
<script>
export default {
    name: "compose-button",
    props: {
        method: { type: Function },
    },
    methods: {
        openDialog() {
            this.$emit("open")
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../styles/common.scss";

.compose-button{
    border-radius:50px;
    background:$primary-color;
    padding:10px 20px;
    box-shadow:0 5px 10px 0 rgba(0,0,0,0.1);
    position:fixed;
    bottom:10px;
    right:10px;
    font-weight:600px;
    font-size:1rem;
    letter-spacing:0.02rem;
    color:#fff;
    font-weight:500;
    opacity:1;
    transition:cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
    &:hover{
        box-shadow:0 10px 18px 0 rgba(0,0,0,0.2);
    }
    i{
        font-size:1.2rem;
        padding-right:5px;
    }
}
</style>