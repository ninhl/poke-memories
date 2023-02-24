<template>
  <div class="screen">
    <h1 class="game-title">Poke Memories</h1>
    <h3 class="game-intro">
      Select mode to start game.
    </h3>
    <div class="actions">
      <button @click="onStart(16)">
        <p>4x4</p>
        <p>Easy</p>
      </button>
      <button @click="onStart(36)">
        <p>6x6</p>
        <p>Normal</p>
      </button>
      <button @click="onStart(64)">
        <p>8x8</p>
        <p>Hard</p>
      </button>
      <button @click="onStart(100)">
        <p>10x10</p>
        <p>Supper Hard</p>
      </button>
    </div>
  </div>
</template>
    
<script>
  export default {
    methods: {
      onStart (totalBlocks){
        this.$emit("onStart",{totalBlocks})
      }
    }
  }
</script>
    
<style lang="css" scoped>
.screen{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--dark);
  color: var(--light);
}
.game-title{
  font-size: 4rem;
  font-weight: bold;
}
.game-intro{
  font-size: 2rem;
  font-weight: bold;
}
.actions{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-top: 2rem;
}
.actions button{
  /* padding: 2rem12 */
  border-radius: 5px;
  background-color: transparent;
  color: var(--light);
  border: solid 1px var(--light);
  word-break: break-word;
  width: 120px;
  height: 120px;
  font-weight: normal;
  font-size: 1rem;
}
.actions button:hover{
  border: solid 1px var(--dark);
  background-color: var(--light);
  color: var(--dark);
  cursor: pointer;
}
</style>