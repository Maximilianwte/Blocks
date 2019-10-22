<template>
    <Page class="page">
        <ActionBar class="action-bar" backgroundColor="#2d2d2d">
            <Label class="action-bar-title" text="Blocks" ></Label>
        </ActionBar>
        <StackLayout id="view" backgroundColor="#2d2d2d">    
            <Button class="block" @tap="routeTo(Block)" v-for="block in blocks" :key="block" v-bind:text="tellTime(hour, minute, block - 1)+' - '+tellTime(hour, minute, block)" height="90" backgroundColor="#3F4651" width="300"/>
        </StackLayout>
    </Page>
</template>

<script>
    import Block from "./Block.vue";

    export default {
        data() {
            return {
                hour: this.$store.state.userSettings.startHour,
                minute: this.$store.state.userSettings.startMinute,
                blocks: this.$store.state.userSettings.nBlocks
            }
        },
        methods: {
            tellTime(hour, minute, addHour) {
                return (hour + addHour).toString() + ":" + minute;
            },
            routeTo(View) {
                this.$navigateTo(Block, {
                transition: {
                    name:'fade',
                    duration: 50
                }
            })
            }
        }
    };
</script>

<style scoped lang="scss">
    #view {
        padding-top: 15;
    }
    .block {
        color: white;
        text-align: center;
        font-size: 25;
        font: bold;
        margin-top: 15;
        border-radius: 15;
    }
</style>
