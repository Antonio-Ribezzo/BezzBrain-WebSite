<script>
    export default {
        name: 'cookieBanner',
        methods: {
            acceptCookies() {
                this.$posthog.opt_in_capturing();
                this.$emit("hideBanner")
            },
            declineCookies() {
                this.$posthog.opt_out_capturing();
                this.$emit("hideBanner")
            }
        }
    }
</script>

<template>
    <div class="banner position-fixed text-black">
        <p>
            We use tracking cookies to understand how you use the product and help us improve it. Please accept cookies to help us improve.
        </p>
        <button class="btn btn-outline-dark me-2" @click="acceptCookies">Accept</button>
        <button class="btn btn-outline-dark ms-2" @click="declineCookies">Decline</button>
    </div>
</template>

<style lang="scss" scoped>
    .banner {
        top: 0;
        left: 0;
        right: 0;
        background-color: #d66f07f6;
        padding: 20px;
        text-align: center;
    }
</style>