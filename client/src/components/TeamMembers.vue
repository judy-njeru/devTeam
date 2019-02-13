<template>
    <div>
        <div v-bind:key="member.id" v-for="member in members">
           <TeamMember v-bind:member="member" />
        </div> 
    </div>
</template>

<script>
    import TeamMember from './TeamMember.vue';
    export default {
        name: 'TeamMembers',
        components: {
            TeamMember
        },
        props: ['members']
    }
</script>

<style scoped>

</style>
