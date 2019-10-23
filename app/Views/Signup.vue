<template>
    <Page class="page">
        <ActionBar class="action-bar" backgroundColor="#2d2d2d">
            <Label class="action-bar-title" text="Signup" ></Label>
        </ActionBar>
        <StackLayout id="view" backgroundColor="#2d2d2d">    
            <Label class="setting" text="Start hour:" />
            <TextField id="settingHour" class="text_field" v-model="hour" hint="Hour" keyboardType="number"/>
            <Label class="setting" text="Start minute:" />
            <TextField id="settingHour" class="text_field" v-model="minute" hint="Hour" keyboardType="number"/>
            <Label class="setting" text="Number of blocks:" />
            <TextField id="settingHour" class="text_field" v-model="blocks" hint="Hour" keyboardType="number"/>
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        data() {
            return {
                hour: this.$store.state.userSettings.startHour,
                minute: this.$store.state.userSettings.startMinute,
                blocks: this.$store.state.userSettings.nBlocks
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
