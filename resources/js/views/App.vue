<template>
    <div>
        <div class="header">
            <router-link to="/pages/about"> go to about </router-link>
            <router-link to="/pages/posts"> go to posts </router-link>
            <router-link to="/"> go to home </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(0, 0, 0);
    height: 100px;
}
</style>
