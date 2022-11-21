<template>
    <div>
        <div v-for="post in posts" :key="post.id">
            <h1>{{ post.title }}</h1>
            <p>{{ post.content }}</p>
            <hr />
        </div>
    </div>
</template>

<script>
export default {
    name: "PostComponent",
    data() {
        return {
            posts: "",
            errorMessage: "qualcosa non quadra",
        };
    },
    mounted() {
        console.log("ciao exist");

        axios.get("/api/posts").then((response) => {
            console.log(response.data.result);
            if (response.data.success) {
                this.posts = response.data.result;
            } else {
                this.errorMessage = response.data.error;
            }
        });
    },
};
</script>

<style scoped lang="scss"></style>
