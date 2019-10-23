<template>
    <Page class="page">
        <ActionBar class="action-bar" backgroundColor="#2d2d2d">
            <Label class="action-bar-title" text="Settings" ></Label>
        </ActionBar>
        <StackLayout id="view" backgroundColor="#2d2d2d">    
            <Label class="setting" text="Start hour:" />
            <TextField id="settingHour" class="text_field" v-model="hour" keyboardType="number"/>
            <Label class="setting" text="Start minute:" />
            <TextField id="settingMinute" class="text_field" v-model="minute" keyboardType="number"/>
            <Label class="setting" text="Number of blocks:" />
            <TextField id="settingBlock" class="text_field" v-model="blocks" keyboardType="number"/>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        computed: {
            hour: {
                get() {
                    return this.$store.state.userSettings.startHour;
                },
                set(value) {
                    this.$store.commit("set_startHour", value);
                }
            },
            minute: {
                get() {
                    return this.$store.state.userSettings.startMinute;
                },
                set(value) {
                    this.$store.commit("set_startMinute", value);
                }
            },
            blocks: {
                get() {
                    return this.$store.state.userSettings.nBlocks;
                },
                set(value) {
                    this.$store.commit("set_Blocks", value);
                }
            }
        },
        methods: {
            routeTo(View) {
                /* this.$navigateTo(Block, {
                transition: {
                    name:'fade',
                    duration: 50
                } 
            })*/
            }
        }
    };
</script>

<style scoped lang="scss">
 #view {
     color: white;
     text-align: center;
     margin-top: 20;
     font-size: 25;
 }
 .setting {
     margin-top: 30;
 }
</style>
