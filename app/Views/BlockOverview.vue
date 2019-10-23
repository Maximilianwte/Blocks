<template>
    <Page class="page">
        <ActionBar class="action-bar" backgroundColor="#2d2d2d">
            <Label class="action-bar-title" text="Blocks" ></Label>
        </ActionBar>
        <GridLayout id="view" backgroundColor="#2d2d2d" rows="100,100,100,100,100" cols="100,100,100,100,100">    
            <Button row="0" col="0" :text="num.id" class="block" @tap="routeTo(Block)" v-for="num in allBlocks" :key="num" height="70" width="70" backgroundColor="#3F4651"/>
        </GridLayout>
    </Page>
</template>

<script>
    import Block from "./Block.vue";

    export default {
        data() {
            return {
                allBlocks: [
                    {
                        id: "T"
                    },
                    {
                        id: "P"
                    }
                ]
            }
        },
        computed: {
            blocks: {
                get() {
                    return this.$store.state.userSettings.nBlocks;
                }
            },
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
        font-size: 20;
        font: bold;
        margin-top: 15;
        border-radius: 7;
    }
</style>
