<template>
    <div class="card" :class="{ dissable: isDisabled }">
        <div class="card__inner" :class="{ 'is-flipped': isFlipped }" @click="onToggleFlipCard()">
            <div class="card__face card__face--front">
                <div class="card__content"></div>
            </div>
            <div class="card__face card__face--back">
                <div class="card__content" :style="{ backgroundImage: `url(${require('@/assets/' + imgBackFaceUrl)})` }">
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
export default {
    name: 'CardFlip',
    props: {
        imgBackFaceUrl: {
            type: String,
            required: true,
        },
        card: {
            type: [Number, Array, Object],
            required: true,
        }
    },
    data() {
        return {
            isFlipped: false,
            isDisabled: false,
        }
    },
    methods: {
        onToggleFlipCard() {
            if (this.isDisabled) return false;
            this.isFlipped = !this.isFlipped;
            if (this.isFlipped) this.$emit("onFliped", this.card);
        },
        onFlipBackCard() {
            this.isFlipped = false;
        },
        onDisableEnabledCard() {
            this.isDisabled = true;
        }
    }
}
</script>
    
<style lang="css" scoped>
.card {
    display: inline-block;
    margin-bottom: 1rem;
    margin-right: 1rem;
    width: 90px;
    height: 120px;
    align-self: center;
    justify-self: center;
}

.card__inner {
    width: 100%;
    height: 100%;
    transition-duration: 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
}

.card__inner.is-flipped {
    transform: rotateY(-180deg);
}

.dissable .card__inner {
    cursor: default;
}

.card__face--front .card__content {
    background: url('../assets/images/icon_back.png') no-repeat center;
    background-size: 40px 40px;
    height: 100%;
    width: 100%;
}

.card__face--back .card__content {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
}

.card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
}

.card__face--back {
    background: var(--light);
    transform: rotateY(-180deg);
}</style>