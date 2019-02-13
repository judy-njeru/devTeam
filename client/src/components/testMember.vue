<template>
    <div class="container">
        <h1>Latest Members</h1>
        <div class="add-member">
            <label for="add-member">say something</label>
            <input id='add-member' type="text" v-model='text' placeholder='add member'>
            <button v-on:click='addMember'>add member</button>
        </div>
        <p class="error" v-if="error">{{error}}</p>
        <div class="members-container">
            <div class="member" 
                v-for="(member, index) in members"
                v-bind:item="member"
                v-bind:index="index"
                v-bind:key="member._id"
                v-on:dblclick='deleteMember(member._id)'
            >
            {{ `${member.createdAt.getDate()}/${member.createdAt.getMonth()}/${member.createdAt.getFullYear()}`}}
            <div class="text">{{member.text}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import memberService from '../memberService';
    export default {
        name: 'testMember',
        data() {
            return {
                members: [],
                error: '',
                text:''
            }
        },
        async created( ){
            try{
                this.members = await memberService.getMembers();
            }catch(err){
                this.error= err.message;
            }
        },
        methods: {
            async addMember(){
                await memberService.addMember(this.text)
                this.members = await memberService.getMembers();
            },
            async deleteMember(id){
                await memberService.deleteMember(id)
                this.members = await memberService.getMembers();
            }
        }

    }
</script>

<style scoped>

</style>