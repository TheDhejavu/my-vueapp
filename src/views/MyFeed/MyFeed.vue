<template>
    <layout page="My Feed">
        <div v-for="item in data" v-bind:key="item.id" class="card-container">
             <card :item="item"></card>
        </div>
    </layout>
</template>
<script>
import Layout from "../../components/Layout/Layout.vue";
import Card from "../../components/Card/Card.vue";


export default {
    name:"my-feed",
    components:{
        Layout, Card
    },
    mounted(){
        this.$progress.inc(0.5);
    },
    data (){
        return {
            "data":[
                {
                    "id": "1",
                    "date": "15hrs ago",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                    "user": {
                        "name": "Akinola ayodeji",
                        "avatar": "/assets/avatar.png"
                    }
                },
                {
                    "id": "2",
                    "date": "15hrs ago",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                    "user": {
                        "name": "Akinola ayodeji",
                        "avatar": "/assets/avatar.png"
                    }
                },
                {
                    "id": "3",
                    "date": "15hrs ago",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                    "user": {
                        "name": "Akinola ayodeji",
                        "avatar": "/assets/avatar.png"
                    }
                },
                {
                    "id": "4",
                    "date": "15hrs ago",
                    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
                    "user": {
                        "name": "Akinola ayodeji",
                        "avatar": "/assets/avatar.png"
                    }
                }
            ]
        }
    },

}
</script>
<style lang="scss" src="./MyFeed.scss"></style>
