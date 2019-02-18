
<template>
    <div class="overlay box-add-new">
        <div class="container">
            <div class="overlay-top">
                <div class="pattern mr-3"></div>
                <button class="btn-exit" type="button" v-on:click='hide'>Cancel</button>
            </div>
            <div class="row mt-5">
                <h3 class="col-12 col-lg-8 offset-lg-2 mb-4">Add to team</h3>
                <div class="d-flex col-12 col-lg-8 offset-lg-2 flex-wrap">
                    <form>
                        <div class="box-input" v-bind:class="{testFocus: nameFocus}">
                            <label for="add-member">Name</label>
                            <input id='add-member' type="text" v-model='name' v-on:focus='inputFocus("nameFocus","name",true)' v-on:blur='inputFocus("nameFocus","name",false)' class="col-12 mb-4 txt-input">
                        </div>
                        <div class="box-input" v-bind:class="{testFocus: skillsFocus}">
                            <label for="add-skill">Skills <span class="t-thin t-light t-small">( seperate with ',' )</span></label>
                            <textarea id='add-skill' type="text" v-model='skills' v-on:focus='inputFocus("skillsFocus","skills",true)' v-on:blur='inputFocus("skillsFocus","skills",false)' cols="30" rows="3" class="col-12 mb-4 txt-input"></textarea>
                        </div>
                        <div class="box-input" v-bind:class="{testFocus: backgroundFocus}">
                            <label for="add-background">Background</label>
                            <textarea id='add-background' type="text" v-model='background' v-on:focus='inputFocus("backgroundFocus","background",true)' v-on:blur='inputFocus("backgroundFocus","background",false)' cols="30" rows="5" class="col-12 mb-4 txt-input"></textarea>
                        </div>
                        <button v-on:click='addMember' class="btn-main" type="button">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import memberService from '../memberService';

    export default {
        name: 'AddMember',
        props: ['members'],
        data() {
            return {
                teamMember: this.members,
                name: '',
                skills: '',
                background: '',
                nameFocus: false,
                skillsFocus: false,
                backgroundFocus: false,
            }
        },
       
        methods: {
            async addMember(){
                await memberService.addMember(this.name, this.skills, this.background)
                this.$parent.hideAddForm()
                this.$parent.members = await memberService.getMembers()
            },
            inputFocus(input,value,focus){
                if(!focus && this[value] != ''){
                    this[input] = true
                }else{
                    this[input] = focus
                }
            },
            hide(){
                this.$parent.hideAddForm()
            }
        }
    }

</script>

<style lang="scss" scoped>

    @import '../sass/variables.scss';
    @import '../sass/overlay.scss';

    form {
        width: 100%;
    }

    .box-input {
        position: relative;

        input,
        textarea {
            border: none;
            border: 4px solid $c-white;
            border-top: 30px solid $c-white;
            border-bottom: 8px solid $c-white;
            padding: 0px 15px;
            filter: drop-shadow(0 4px 8px rgba(0,0,0,0.05));
        }

        label {
            font-weight: 700;
            width: calc(100% - 28px);
            position: absolute;
            z-index: 1;
            top: 15px;
            left: 14px;
            padding-left: 5px;
            padding-right: 5px;
            font-size: 1.2em;
            transition: all 0.2s ease;
            color: $c-gray;
        }

        &.testFocus label {
            top: 0px;
            padding-top: 8px;
            font-weight: 700;
            font-size: 0.8em;
            color: $c-black;
        }
    }

</style>