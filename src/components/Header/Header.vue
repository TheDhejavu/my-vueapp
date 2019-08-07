<template>
    <header class="header">
        <div class="app-header">
            <div class="app-header__panel">
                <div class="app-header__left flex">
                    <div class="logo-container">
                        <h4 class="logo">My Vue-app</h4>
                    </div>
                    <button class="harmburger-btn btn reset-btn">
                        <i class='uil uil-bars'></i>
                    </button>
                </div>
                <nav class="app-header__nav to-right">
                    <ul >
                        <li class="list">
                                <a href="#" class="link">
                                    <i class='uil uil-bell'></i>
                                </a>
                        </li>
                        <li class="list">
                                <a href="#" class="link" > <i class='uil uil-comment-alt-lines'></i></a>
                            </li>
                            <li class="profile list">
                                <div class="flex">
                                    <img src="/assets/avatar.png" class="profile-image" alt="profile image"/>
                                    <p class="name">akinola!</p>
                                </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="header-menu">
            <div class="header-menu__panel">
                <div v-if="viewContent" >
                    <router-link to="/" class="back-button reset-btn">
                        <i class='uil uil-angle-left'></i> Go home
                    </router-link>
                </div>
                <ul class="" v-else>
                    <li >
                        <router-link to="/" > <i class='uil uil-rss'></i> My Feed</router-link>
                    </li>
                    <li >
                        <router-link to="/activity"><i class='uil uil-analytics'></i> Activity</router-link>
                    </li>
                    <li >
                        <router-link to="/settings"><i class='uil uil-cog'></i> Settings</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name:"header",
    props:{
        viewContent:{
            type:Boolean,
            default: false
        }
    },
    methods:{
        goBack: function (event){
            console.log( "go back")
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" src="./Header.scss"></style>
