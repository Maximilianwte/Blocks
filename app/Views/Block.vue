<template>
    <Page class="page">
        <ActionBar class="action-bar" backgroundColor="#2d2d2d">
            <Label class="action-bar-title" text="GetABlock" ></Label>
        </ActionBar>
        <StackLayout class="block-outside" backgroundColor="#2d2d2d">
            
            <Button class="nutricional_block" id="fats" @tap="activateNutrient('Fats')" :height="nutricional.fats" width="200" backgroundColor="#3D5A6C"/>
            <Button class="nutricional_block" id="protein" @tap="activateNutrient('Protein')" :height="nutricional.protein" width="200" backgroundColor="#FFFD82"/>
            <Button class="nutricional_block" id="carbs" @tap="activateNutrient('Carbs')" :height="nutricional.carbs" width="200" backgroundColor="#D90368"/>
            
            <StackLayout class="block-outside Input" :class="{hide: active_nutrient == null}">
                <Label :text="this.input_phrase" />
                <TextField id="nutri" class="text_field" v-model="last_nutrient" hint="35 Grams" keyboardType="number"/>
                <Label :text="last_nutrient" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>

    export default {
        data() {
            return {
                active_nutrient: null,
                last_nutrient: null,
                input_phrase: null,
                nutricional: {
                    carbs: 70,
                    proteins: 50,
                    fats: 90,
                }
            }
        },
        watch: {
            last_nutrient: function(val) {
                //saveNutrional();
            }
        },
        methods: {
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
            activateNutrient(nutrient) {
                this.active_nutrient = nutrient;
                this.input_phrase = "Input: " + nutrient;
            },
            saveNutrional() {
                console.log("hey")
                switch (this.activateNutrient) {
                    case ("carbs"):
                        this.nutricional.carbs = this.last_nutrient;
                        this.last_nutrient = null;
                    case ("protein"):
                        this.nutricional.proteins = this.last_nutrient;
                        this.last_nutrient = null;
                 
                }
                this.tellBlockSize(nutricional.carbs, nutricional.proteins, nutricional.fats);
            },
            x(value) {
                return x
            },
            routeTo(View) {
                /* this.$navigateTo(Home, {
                transition: {
                    name:'fade',
                    duration: 50
                }
            }) */
            }
        }
    };
</script>

<style scoped lang="scss">
    .hide {
        visibility: collapse;
    }
    .nutricional_block#pre-block {
        margin-top: 120;
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
        margin-bottom: 0;
        transition: .3;
        margin-top: 120;
    }
    .nutricional_block {
        margin-top: 5;
        margin-bottom: 15;
        border-radius: 10;
        border: 0;
        background-color: white;
    }
    .Input {
        margin-top: 30;
        color: white;
        font-size: 25;
        text-align: center;
    }
    .text_field {
        margin-top: 15;
        color: white;
    }
</style>
