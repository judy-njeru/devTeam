<template>
    <div>
      <p class="error" v-if="error">{{error}}</p>
        <div class="members-container">
            <div class="member" v-on:dblclick='deleteMember(member._id)' >
            <!--{{ `${member.createdAt.getDate()}/${member.createdAt.getMonth()}/${member.createdAt.getFullYear()}`}}
            --><div class="text" v-on:click='viewMember(teamMember._id)'>{{teamMember.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import memberService from '../memberService';

    export default {
        name: 'TeamMember',
        props: ['member'],
        data() {
            return {
                teamMember: this.member,
                memberInfo: null,
                error: ''
            } 
        },
         async created( ){
            try{
                this.members = await memberService.viewMember();
               
            }catch(err){
                this.error= err.message;
            }
        },
     
         methods: {
            async deleteMember(id){
                await memberService.deleteMember(id)
                this.teamMember= await memberService.getMembers();
            },
            async viewMember(memberID){
                await memberService.viewMember(memberID)
                this.memberInfo= await memberService.viewMember(memberID);
                this.$emit('member-info',this.memberInfo);
            },
        }
    }
    
</script>