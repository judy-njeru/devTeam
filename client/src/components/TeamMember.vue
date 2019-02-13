<template>
    <div>
        <p>{{member.name}}</p>
    </div>
</template>

<script>
    export default {
        name: 'TeamMember',
        props: ['member']
    }
</script>