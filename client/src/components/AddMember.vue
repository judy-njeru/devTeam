
<template>
    <div class="container">
        <div class="add-member">
            <label for="add-member"><strong> Add New Member: </strong></label>
            <input id='add-member' type="text" v-model='name' placeholder='Name'>
            <input id='add-skill' type="text" v-model='skills' placeholder='Skills'>
            <input id='add-background' type="text" v-model='background' placeholder='Background'>
            <button v-on:click='addMember'>add member</button>
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
            }
        }

    }
</script>