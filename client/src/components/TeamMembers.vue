<template>
    <div class="container">
        <h2 class="text-center mt-5 mb-5">Our team</h2>
        <div class="row">
            <div class="box-members d-flex justify-content-between col-12 col-lg-8 offset-lg-2 flex-wrap">
                <TeamMember v-bind:member="member"
                    v-for="(member, index) in members"
                    v-bind:item="member"
                    v-bind:index="index"
                    v-bind:key="member._id"
                    @member-info="updateParentInfo"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import TeamMember from './TeamMember.vue';
    import memberService from '../memberService';

    export default {
        name: 'TeamMembers',
        components: {
            TeamMember
        },
        props: [
            'members'
        ],
        data(){
            return {
                info: null
            }
        },
        methods: {
            updateParentInfo(data){
                this.info = data;
                this.$emit('member-info',this.info);    
            },
            async deleteMember(id){
                await memberService.deleteMember(id)
                this.$parent.members = await memberService.getMembers()
            },
        },
    }
</script>

<style scoped>

</style>
