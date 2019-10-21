<template>
    <Page class="page">
        <ActionBar class="action-bar" backgroundColor="#2d2d2d">
            <Label class="action-bar-title" text="Blocks" ></Label>
        </ActionBar>
        <StackLayout class="block-outside" backgroundColor="#2d2d2d">
            <Label text="lol"></Label>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                carbs: null,
                proteins: null,
                fat: null
            }
        },
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: $accent-dark;
    }

    .info {
        font-size: 20;
    }

    .block {
        color: white;
        text-align: center
    }
</style>
