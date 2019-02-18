<template>
    <div class="overlay box-member-info">
        <div class="container">
            <div class="overlay-top">
                <div class="pattern mr-3"></div>
                <button class="btn-exit" v-on:click="close">Back</button>
            </div>
            <div class="member" 
                v-for="(info, index) in memberInfo"
                v-bind:item="info"
                v-bind:index="index"
                v-bind:key="info._id"   
            >   
                <div class="row mt-5">
                    <h2 class="d-flex col-12 col-md-8 offset-md-2 align-items-center justify-content-center">{{info.name}}</h2>
                </div>
                <div class="row mt-3">
                    <div class="box-member-2 d-flex col-12 col-md-8 offset-md-2 flex-column flex-wrap flex-md-nowrap">
                        <h4>Skills</h4>
                    </div>
                </div>
                <div class="row mt-1">
                    <div class="box-member-2 d-flex col-12 flex-column flex-wrap flex-md-nowrap">
                        <div class="d-flex justify-content-center flex-wrap" v-bind:value="getSkills(info.skills)">
                            <div v-bind:key="skill" v-for="skill in skills" class="box-skill ml-2 mr-2 mt-2">{{skill}}</div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3 pb-5">
                    <div class="box-member-2 d-flex col-12 col-md-8 offset-md-2 flex-column flex-wrap flex-md-nowrap">
                        <h4>Background</h4>
                        <p class="mt-2">{{info.background}}</p>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
    import memberService from '../memberService';

    export default {
        name: 'MemberInfo',  
        props: ['memberInfo'],
        data() {
            return {
                skills: [],
            }
        },
        methods: {
            close(){
                this.$parent.hideMemberInfo()
            },
            getSkills(skills){
                this.skills = skills.split(',');
            }
        },
    }

</script>


<style lang="scss" scoped>
    
    @import '../sass/variables.scss';
    @import '../sass/overlay.scss';

    .box-member-info {
        .box-skill {
            font-size: 1em;
            font-weight: 600;
            letter-spacing: 1px;
        }
    }

</style>