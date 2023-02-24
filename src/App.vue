<template>
  <main-screen v-if="statusMatch === 'default'" @onStart="handleStart($event)"/>
  <interact-screen v-if="statusMatch === 'inGame'" :cardsContext ="setting.cardsContext" :totalBlocks="setting.totalBlocks"/>
</template>

<script>
import MainScreen from './components/MainScreen.vue';
import InteractScreen from './components/InteractScreen.vue';
import { shuffle } from './utils/array';
export default {
  name: 'App',
  data() {
    return{
      setting: {
        totalBlocks: 0,
        cardsContext: [],
        startedAt: null,
        
      },
      statusMatch: "default",
    }
  },
  components: {
    MainScreen,
    InteractScreen,
  },
  methods: {
  handleStart(config) {
    this.setting.totalBlocks = config.totalBlocks;
    const firstCards = Array.from({length: config.totalBlocks / 2}, (_, i) => i+1) 
    const secondCards = [...firstCards];
    const cards = [...firstCards,...secondCards];
    this.setting.cardsContext = shuffle(shuffle(shuffle(shuffle(cards))));
    this.setting.startedAt = new Date().getTime();
    // data ready
    this.statusMatch = "inGame";
  }
}
}

</script>

<style>

</style>
