<template>
    <div class="screen">
        <div class="header__container">
            <h1 class="header__title">Poke Memories</h1>
            <div class="time__container">
                <div class="time">
                    <div class="time__label">Time: </div>
                    <div class="time__value">{{ time }}s</div>
                </div>
            </div>
        </div>
        <div class="main__content" :style="{'grid-template-columns': `repeat(${Math.sqrt(totalBlocks)}, 1fr)`}">
            <card-flip v-for="(card, index) in cardsContext" :key="index" :ref="`card-${index}`"
            :imgBackFaceUrl="`images/${card}.png`" :card="{ index, value: card }" @onFliped="checkRule($event)" />
        </div>
    <copy-right/>
        
    </div>
</template>
    
<script>
import CardFlip from './Card.vue'
import CopyRight from './CopyRight.vue';
export default {
    data() {
        return {
            rules: [],
            time: 0,
            interval: 0,
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            this.time += 1;
        }, 1000)
    },
    props: {
        cardsContext: {
            type: Array,
            required: true,
            default: () => []
        },
        totalBlocks: {
            type: Number,
            required: true,
        }
    },
    components: {
        CardFlip,
        CopyRight
    },
    methods: {
        checkRule(card) {
            if (this.rules.length === 2) return false;
            this.rules.push(card);
            if (this.rules.length === 2 && this.rules[0].value === this.rules[1].value) {
                this.$refs[`card-${this.rules[0].index}`][0].onDisableEnabledCard();
                this.$refs[`card-${this.rules[1].index}`][0].onDisableEnabledCard();
                this.rules = [];
                const disabledElements = document.querySelectorAll('.screen .card.dissable');
                if (disabledElements?.length === this.cardsContext.length - 2) {
                    setTimeout(() => {
                        clearInterval(this.interval);
                        alert(`You won with ${this.time} seconds!`);
                    }, 800);
                }


            } else if (this.rules.length === 2 && this.rules[0].value !== this.rules[1].value) {
                setTimeout(() => {
                    this.$refs[`card-${this.rules[0].index}`][0].onFlipBackCard()
                    this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard()
                    this.rules = [];
                }, 800);
            } else return false;
        }
    },


}
</script>
    
<style scoped>
.screen {
    background-color: rgb(36, 79, 94);
    height: auto;
    min-height: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.main__content{
    padding-top: 50px;
    display: grid;
    max-width: 1200px;
    justify-content: center;
    align-items: center;
    width: 80%;
    gap: 1em;
}
.header__title{
    font-size: 3rem;
}
.header__container{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
}

.time {
    display: flex;
    align-items: center;
    font-size: 2rem;
}
</style>