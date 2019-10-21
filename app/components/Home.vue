<template>
    <Page class="page">
        <ActionBar class="action-bar" backgroundColor="#2d2d2d">
            <Label class="action-bar-title" text="Blocks" ></Label>
        </ActionBar>
        <StackLayout backgroundColor="#2d2d2d">    
            <StackLayout>
                <Button class="nutricional_block hide" :class="hide" height="200" width="200" backgroundColor="#3F4651"/>
                <Button class="nutricional_block" id="fats" @tap="tellBlockSize(120,50,30)" :class="hide" :height="nutricional.fats" width="200" backgroundColor="#3D5A6C"/>
                <Button class="nutricional_block" id="protein" :class="hide" :height="nutricional.protein" width="200" backgroundColor="#FFFD82"/>
                <Button class="nutricional_block" id="carbs" :class="hide" :height="nutricional.carbs" width="200" backgroundColor="#D90368"/>
            </StackLayout>
            <Button class="block" @tap="$navigateTo(Block)" v-for="block in blocks" :key="block" v-bind:text="tellTime(hour, minute, block - 1)+' - '+tellTime(hour, minute, block)" height="90" backgroundColor="#3F4651"/>
        </StackLayout>
    </Page>
</template>

<script>
    import Block from "./Block";

    export default {
        components: {
            Block
        },
        data() {
            return {
                hour: 13,
                minute: "30",
                blocks: 7,
                data: true,
                nutricional: {
                    carbs: 70,
                    proteins: 50,
                    fats: 90,
                }
            }
        },
        methods: {
            tellTime(hour, minute, addHour) {
                return (hour + addHour).toString() + ":" + minute;
            },
            tellBlockSize(carbs, proteins, fats) {
                var block_height = 200;

                var all_values = carbs + proteins + fats;
                var values = {
                    carbs: (carbs / all_values) * block_height,
                    proteins: (proteins / all_values) * block_height,
                    fats: (fats / all_values) * block_height
                }
                this.nutricional = values;
                return values;
            },
            eval_hide(data) {
                return hide ? data == true : ""
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    .fa {
        color: $accent-dark;
    }

    .hide {
        display: none;
    }

    .block {
        color: white;
        text-align: center;
        font-size: 20;
        font: bold;
        margin-top: 15;
    }

    .nutricional_block#carbs {
        border-radius: 0 0 10 10;
        transition: .3;
    }
    .nutricional_block#protein {
        border-radius: 0;
        margin: 0;
        transition: .3;
    }
    .nutricional_block#fats {
        border-radius: 10 10 0 0;
        margin: 0;
        transition: .3;
    }

    .nutricional_block {
        margin-top: 5;
        margin-bottom: 15;
        border-radius: 10;
        border: 0;
        background-color: white;
    }
</style>
