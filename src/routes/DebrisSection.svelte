<script lang='ts'>
  import { debrisState as state } from '$lib/states.svelte';

  let { points } = $props();
</script>

<section class='flex flex-col gap-1'>
  <h2>Debris Zone ({points}/24)</h2>
  <button onclick={() => state.absPipes = state.absPipes < 4 ? state.absPipes + 1 : 0}>
    <span>ABS Pipes: {state.absPipes}/4</span>
  </button>
  <button onclick={() => state.poolNoodles = state.poolNoodles < 4 ? state.poolNoodles + 1 : 0}>
    <span>Pool Noodles: {state.poolNoodles}/4</span>
  </button>
  <button onclick={() => state.woodenBlocks = state.woodenBlocks < 4 ? state.woodenBlocks + 1 : 0}>
    <span>Wooden Blocks: {state.woodenBlocks}/4</span>
  </button>
  <button onclick={() => state.wires = state.wires < 4 ? state.wires + 1 : 0}>
    <span>Wires: {state.wires}/4</span>
  </button>
  <button onclick={() => state.fuses = state.fuses < 3 ? state.fuses + 1 : 0}>
    <span>ECU Fuses: {state.fuses}/3</span>
  </button>
  <button onclick={() => state.circuitBoards = state.circuitBoards < 3 ? state.circuitBoards + 1 : 0}>
    <span>Circuit Boards: {state.circuitBoards}/3</span>
  </button>
  <button onclick={() => state.transformers = state.transformers < 2 ? state.transformers + 1 : 0}>
    <span>Transformers: {state.transformers}/2</span>
  </button>
</section>