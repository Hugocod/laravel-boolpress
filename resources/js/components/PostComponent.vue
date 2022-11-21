<template>
    <h1>io sono vue</h1>
</template>

<script>
export default {
    name: "PostComponent",
    data() {
        return {
            posts: [],
        };
    },
    mounted() {
        console.log("ciao exist");
    },
};
</script>

<style scoped lang="scss"></style>
