<script lang='ts'>
  import { ecuState as state } from '$lib/states.svelte';

  let { points } = $props();
</script>

<section class='flex flex-col gap-1'>
  <h2>Environmental Control Unit Zone ({points}/44)</h2>
  <button onclick={() => state.newPartsInZone = state.newPartsInZone < 8 ? state.newPartsInZone + 1 : 0}>
    <span>Total New Parts In Zone: {state.newPartsInZone}/8</span>
  </button>
  {#each state.fuses as x, i}
    <button onclick={() => state.fuses[i] = x === 'broken' ? 'empty' : x === 'empty' ? 'replaced' : 'broken'}>
      <span>Fuse {i + 1}: {x}</span>
    </button>
  {/each}
  {#each state.circuitBoards as x, i}
    <button onclick={() => state.circuitBoards[i] = x === 'broken' ? 'empty' : x === 'empty' ? 'replaced' : 'broken'}>
      <span>PCB {i + 1}: {x}</span>
    </button>
  {/each}
  {#each state.transformers as x, i}
    <button onclick={() => state.transformers[i] = x === 'broken' ? 'empty' : x === 'empty' ? 'replaced' : 'broken'}>
      <span>Transformer {i + 1}: {x}</span>
    </button>
  {/each}
</section>