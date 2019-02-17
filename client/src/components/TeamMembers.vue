<template>
    <div class="container">
        <h1>Latest Members</h1>
        <TeamMember v-bind:member="member"
            v-for="(member, index) in members"
            v-bind:item="member"
            v-bind:index="index"
            v-bind:key="member._id"
            @member-info="updateParentInfo"
        />
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
                // console.log(data)
                this.info = data;
                this.$emit('member-info',this.info);    
            }
        },
    }
</script>

<style scoped>

</style>
