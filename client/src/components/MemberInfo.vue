<template>
    <div>
        <div class="member-info">
            <div class="member" 
                v-for="(info, index) in memberInfo"
                v-bind:item="info"
                v-bind:index="index"
                v-bind:key="info._id"   
            >
                <div class="text" >Skills: {{info.skills}}</div>
                <div class="text" >Backgorund: {{info.background}}</div>  
            </div>
        </div>
    </div>
</template>

<script>
    import memberService from '../memberService';

    export default {
        name: 'MemberInfo',  
        props: ['memberInfo']
    }

</script>