<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <TeamMembers v-bind:members="members" @member-info="updateParentInfo"/>
    <AddMember v-bind:members="members" v-bind:addForm="addForm" v-if='addForm'/>
    <MemberInfo v-bind:memberInfo="memberInfo"/>
    <button class="btn-main" v-on:click="showAddForm">+ New</button>
  </div>
</template>

<script>
  // window.$ = require('jquery')
  // window.JQuery = require('jquery')
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
      memberInfo:null,
      addForm: false
    }
  },
   methods: {
      updateParentInfo(data){
          this.memberInfo = data;
      },
      showAddForm(){
        // console.log("jæ")
        this.addForm = true
      },
      hideAddForm(){
        // console.log("jæ")
        this.addForm = false
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

<style lang="scss">
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  



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


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Montserrat', sans-serif; */
    font-family: $font1;
    outline: none !important;
    color: $c-black;
  }




  .btn-main {
      color: $c-black;
      font-weight: 700;
      font-size: 1.1em;
      padding: 10px 30px;
      background: $c-btn-bg;
      border: none;
      border-radius: 50px;
      transition: all 0.2s ease-in-out;
      letter-spacing: 1px;

      &:hover {
          background: $c-black;
          background: $c-wildcard;
          color: $c-white;
      }
  }

  p {
      line-height: 1.8em;
  }

  h2 {
      font-family: $font2;
      font-size: 5em;
      font-weight: 800;
  }

  h3 {
      font-family: $font2;
      font-size: 2em;
      font-weight: 800;  
  }

  h4 {
      font-size: 0.9em;
      font-weight: 700;
  }

  .t-thin {
      font-weight: 200;
  }

  .t-light {
      color: $c-gray;
  }

  .t-small {
      font-size: 0.8em;
  }



</style>
