<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TeamMembers v-bind:members="members" @member-info="updateParentInfo"/>
    <AddMember v-bind:members="members" />
    <MemberInfo v-bind:memberInfo="memberInfo"/>
  </div>
</template>

<script>
  import memberService from './memberService';
  import TeamMembers from './components/TeamMembers.vue';
  import AddMember from './components/AddMember.vue';
  import MemberInfo from './components/MemberInfo.vue';

export default {
  name: 'app',
  components: {
    TeamMembers,
    AddMember,
    MemberInfo
  },

  data() {
    return {
      members: [],
      memberInfo:null
    }
  },
   methods: {
      updateParentInfo(data){
          this.memberInfo = data;
      }
  },
  async created( ){
    try{
        this.members = await memberService.getMembers();
      }catch(err){
          this.error= err.message;
      }
    }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
