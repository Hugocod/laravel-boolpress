<template>
    <div class="container">
        <post-component></post-component>
    </div>
</template>

<script>
import PostComponent from "./PostComponent.vue";
export default {
    mounted() {
        console.log("Component mounted.");
    },
    components: { PostComponent },
};
</script>
