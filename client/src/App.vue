<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <Banner v-if="bannerActive"/>
    </transition>
    <nav class="container d-flex align-items-center">
      <svg width="101px" height="30px" viewBox="0 0 101 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Desktop-HD-Copy-27" transform="translate(-193.000000, -50.000000)" fill="#4A4A4A" fill-rule="nonzero">
            <g id="Group-2" transform="translate(193.000000, 50.000000)">
              <g id="Group">
                <path d="M53.9998014,17.6056338 C53.9999337,17.6290925 54,17.6525668 54,17.6760563 C54,24.4823825 48.435539,30 41.5714286,30 C34.7073181,30 29.1428571,24.4823825 29.1428571,17.6760563 C29.1428571,17.6525668 29.1429234,17.6290925 29.1430558,17.6056338 L29.1428571,0 L54,0 L54,17.6056338 Z" id="Combined-Shape"></path>
                <path d="M24.8521676,18.028169 C24.6641997,24.6716639 19.1739181,30 12.4285714,30 C5.56446097,30 0,24.4823825 0,17.6760563 C2.78084092,17.6760563 7.60539906,17.6760563 12.4285714,17.6760563 L12.4285714,0 L24.8571429,0 L24.8571429,18.028169 L24.8521676,18.028169 Z" id="Combined-Shape-Copy-3"></path>
                <path d="M77.470641,13.5169124 C81.2173347,14.3372846 84.0213613,17.6674941 84.0213613,21.6509434 C84.0213613,26.2502025 80.2833614,29.9786387 75.6723047,29.9786387 C75.5654691,29.9786387 75.4591021,29.9766371 75.3532394,29.9726697 L75.3532394,29.9793954 L58.2638524,29.9793954 L58.2638524,13.9140575 L58.2659822,13.9140575 L58.2659822,0.0186459215 L73.6905105,0.0186459215 C73.6977765,0.0186565424 73.705045,0.0186459215 73.7123161,0.0186459215 C77.7372214,0.0186459215 81.0000519,3.27312834 81.0000519,7.28773585 C81.0000519,9.93092567 79.5856754,12.2446154 77.470641,13.5169124 Z" id="Combined-Shape"></path>
                <rect id="Rectangle-3" x="87.4285714" y="0" width="12.8571429" height="30"></rect>
              </g>
            </g>
          </g>
          </g>
        </svg>
      <div class="pattern ml-3"></div>
    </nav>
    <TeamMembers v-bind:members="members" @member-info="updateParentInfo"/>
    <transition name="fade" mode="out-in">
      <AddMember v-bind:members="members" v-bind:addFormActive="addFormActive" v-if='addFormActive'/>
    </transition>
    <transition name="fade" mode="out-in">
      <MemberInfo v-bind:memberInfo="memberInfo" v-if="memberInfoActive"/>
    </transition>
    <div class="container">
      <div class="row d-flex align-items-start align-items-sm-end flex-grow-1 mt-3">
        <div class="col-12 col-lg-8 offset-lg-2 d-flex justify-content-center justify-content-md-end">
          <button class="btn-main" v-on:click="showAddForm">+ New</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import memberService from './memberService';
  import Banner from './components/Banner.vue';
  import TeamMembers from './components/TeamMembers.vue';
  import AddMember from './components/AddMember.vue';
  import MemberInfo from './components/MemberInfo.vue';

export default {
  name: 'app',
  components: {
    Banner,
    TeamMembers,
    AddMember,
    MemberInfo
  },

  data() {
    return {
      members: [],
      memberInfo:null,
      addFormActive: false,
      memberInfoActive: false,
      bannerActive: true
    }
  },
   methods: {
      updateParentInfo(data){
          this.memberInfo = data;
      },
      showAddForm(){
        this.addFormActive = true
      },
      hideAddForm(){
        this.addFormActive = false
      },
      showMemberInfo(){
        this.memberInfoActive = true
      },
      hideMemberInfo(){
        this.memberInfoActive = false
      },
      hideBanner(){
        this.bannerActive = false
      }
  },
  async created( ){
    console.log("created function")
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
  @import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900|Open+Sans:300,400,600,700,800');
  
  @import 'sass/variables.scss';
  @import 'sass/typography.scss';
  @import 'sass/pattern.scss';
  
  #app {
    min-height: 100vh;
    padding-bottom: 90px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: $font1;
    outline: none !important;
    color: $c-black;
  }

  body {
    background: $c-bg;
    min-height: 100vh;
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

  nav {
    position: relative;
    height: 60px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>
