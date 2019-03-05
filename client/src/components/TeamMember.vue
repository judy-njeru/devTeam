<template>
    <div class="box-member col-12 col-md-5 mb-3 mb-md-5">
        <p class="error" v-if="error">{{error}}</p>
        <div class="box-actions">
            <button class="btn-delete" v-on:click='deleteMember(member._id)'>
                <svg width="19px" height="18px" viewBox="0 0 19 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="Desktop-HD-Copy-28" transform="translate(-44.000000, -163.000000)" fill="#4A4A4A" fill-rule="nonzero">
                            <path d="M53.5,168.464466 L58.8033009,163.161165 L62.3388348,166.696699 L57.0355339,172 L62.3388348,177.303301 L58.8033009,180.838835 L53.5,175.535534 L48.1966991,180.838835 L44.6611652,177.303301 L49.9644661,172 L44.6611652,166.696699 L48.1966991,163.161165 L53.5,168.464466 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
        <div class="box-member-inner" v-on:click='viewMember(teamMember._id)'>
            {{teamMember.name}}
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
     
        methods: {
            async deleteMember(id){
                this.$parent.deleteMember(id)
            },
            async viewMember(memberID){
                await memberService.viewMember(memberID)
                this.memberInfo = await memberService.viewMember(memberID);
                this.$emit('member-info',this.memberInfo);
                this.$parent.$parent.showMemberInfo()
            },
        }
    }
    
</script>

<style lang="scss" scoped>

@import '../sass/variables.scss';

.box-member {
    padding-top: 40%;
    background: $c-btn-bg;
    position: relative;
    z-index: 0;
    transition: all 0.4s ease;
    cursor: pointer;
    // background: $c-wildcard;

    &:after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        background-image: url('../assets/gif5.gif'); // try gif nr 5, 6 & 7 
        z-index: -1;
        opacity: 0;
        transition: all 0.4s ease;
        background-size: 120%;
        background-position: 50% 50%;
    }

    .box-actions {
        position: absolute;
        top: 15px;
        right: 20px;
        display: none;
        z-index: 1;

        .btn-delete {
            height: 40px;
            width: 40px;
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            transition: all 0.1s ease;
            background: transparent;
            border: none;

            &:hover {
                background: $c-wildcard;

                svg path {
                    fill: $c-white;
                }
            }
        }
    }

    &:hover {
        background: $c-bg;
        .box-actions {
            display: block;
        }

        &:after {
            opacity: 0.1;
        }
    }
}

.box-member-inner {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    font-weight: 800;
    font-family: $font2 !important;
    padding: 10px;
    text-align: center;
    overflow: hidden;

    // &:hover {
    //     color: $c-wildcard;
    // }
}


</style>
