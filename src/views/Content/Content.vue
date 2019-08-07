<template>
    <layout page="My Feed" :viewContent="true">
         <div class="card">
             <div class="top">
                    <p class="timeago"><i class='uil uil-calendar-alt'></i> {{ item.date }}</p>
                </div>
                <p class="text"> {{ item.text }}<p>
                <div class="bottom">
                    <div class="user flex">
                        <img :src="item.user.avatar" >
                        <p class="name">{{ item.user.name }} </p>
                    </div>
                    <div class="to-right">
                        <button class="reset-btn more-button ripple">
                            <i class='uil uil-ellipsis-v'></i>
                        </button>
                    </div>
                </div>
         </div>
    </layout>
</template>
<script>
import Layout from "../../components/Layout/Layout.vue";

export default {
    name:"my-feed",
    components:{
        Layout
    },
    data(){
        return {
            "item": {
                    "id": "4",
                    "date": "15hrs ago",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                    "user": {
                        "name": "Akinola ayodeji",
                        "avatar": "/assets/avatar.png"
                    }
                }
        }
    }
}
</script>
<style lang="scss" src="./Content.scss"></style>
