
<template>
    <div class="box-overlay box-add-new">
        <div class="container">
            <div class="box-overlay-top">
                <div class="box-pattern mr-3"></div>
                <button class="btn-exit" type="button" v-on:click='hide'>Cancel</button>
            </div>
            <!-- <div class="add-member">
                <label for="add-member"><strong> Add New Member: </strong></label>
                <input id='add-member' type="text" v-model='name' placeholder='Name'>
                <input id='add-skill' type="text" v-model='skills' placeholder='Skills'>
                <input id='add-background' type="text" v-model='background' placeholder='Background'>
                <button v-on:click='addMember'>add member</button>
            </div> -->

            <div class="row mt-5">
                <h3 class="col-12 col-lg-8 offset-lg-2 mb-4">Add to team</h3>
                <div class="d-flex col-12 col-lg-8 offset-lg-2 flex-wrap">
                    <form>
                        <div class="box-input" v-bind:class="{testFocus: inputFocus}">
                            <label for="add-member">Name</label>
                            <!-- <input name="" id="txt-name" class="col-12 mb-4 txt-input"> -->
                            <input id='add-member' type="text" v-model='name' v-on:focus='inputFocus' v-on:blur='inputFocus' class="col-12 mb-4 txt-input">
                        </div>
                        <div class="box-input" v-bind:class="{testFocus: inputFocus}">
                            <label for="add-skill">Skills <span class="t-thin t-light t-small">( seperate with ',' )</span></label>
                            <!-- <textarea name="" id="txt-skills" cols="30" rows="3" class="col-12 mb-4 txt-input"></textarea> -->
                            <textarea id='add-skill' type="text" v-model='skills' cols="30" rows="3" class="col-12 mb-4 txt-input"></textarea>
                        </div>
                        <div class="box-input">
                            <label for="add-background">Background</label>
                            <!-- <textarea name="" id="txt-background" cols="30" rows="5" class="col-12 mb-4 txt-input"></textarea> -->
                            <textarea id='add-background' type="text" v-model='background' cols="30" rows="5" class="col-12 mb-4 txt-input"></textarea>
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
                background: ''
            }
        },
       
        methods: {
            async addMember(){
                await memberService.addMember(this.name, this.skills, this.background)
                this.teamMember = await memberService.getMembers();
            },
            inputFocus(event){
                // console.log(this)
                // console.log(this.$parent)

                console.log(event.type)
                // this.testFocus = focus
                // this.$parent.testFocus = true
                // // if(focus == true){
                // //     this.$parent.testFocus = true
                // // }else{
                // //     this.$parent.testFocus = false
                // // }
                // console.log("jæ", this.$parent)
                // return focus
                return {
                    testFocus: event.type == 'focus' ? true : false
                }
            },
            hide(){
                this.$parent.hideAddForm()
            }
        }
    }

    // $(document).on('focus','.txt-input',function(){
    //     $(this).parent('.box-input').addClass('txt-focus')
    // })

    // $(document).on('blur','.txt-input',function(){
    //     if($(this).val() < 1){
    //         $(this).parent('.box-input').removeClass('txt-focus')
    //     }
    // })

</script>

<style lang="scss" scoped>
    $c-bg: #FBF9F5;
    $c-border: #F0F0F0;

    $c-white: #fff;
    $c-gray: #555;
    $c-light: #ccc;

    $c-black: #001124;
    $c-dark: #4A4A4A;

    $c-btn-bg: rgba(0,0,0,0.1);
    $c-btn-bg-dark: rgba(0,0,0,0.2);

    $c-wildcard: tomato;

    $font1: 'Open Sans', sans-serif;
    $font2: 'Montserrat', sans-serif;



    // OVERLAY

    .box-overlay {
        display: block !important;
        position: fixed;
        z-index: 1000;
        top: 0px;
        left: 0px;
        min-height: 100vh;
        min-width: 100vw;
        background: $c-bg;
        display: none;
        overflow-y: scroll;

        .box-overlay-top {
            display: flex;
            align-items: center;
            height: 60px;
        }

        .btn-exit {
            position: relative;
            height: 40px;
            // width: 30px;
            border-radius: 30px;
            border: none;
            background: $c-btn-bg;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0px 15px;
            line-height: 1em;
            font-weight: 600;
            font-size: 0.9em;
            letter-spacing: 1px;

            &:hover {
                background: $c-wildcard;
                color: $c-white;
            }
        }
    }




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
            // padding-top: 28px;
            // padding-bottom: 12px;
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
            // background: $c-white;
        }

        &.testFocus label {
            top: 0px;
            padding-top: 8px;
            font-weight: 700;
            font-size: 0.8em;
            color: $c-black;
            color: pink;
        }
    }



</style>