<script lang='ts'>
  import { ecuState as state } from '$lib/states.svelte';
  import NumberFlow from '$lib/NumberFlow.svelte';

  let { points } = $props();

  const minimumPartsInZone = $derived(
    state.fuses.filter(x => x === 'replaced').length +
    state.circuitBoards.filter(x => x === 'replaced').length +
    state.transformers.filter(x => x === 'replaced').length
  );

  $effect(() => {
    if (state.newPartsInZone < minimumPartsInZone)
      state.newPartsInZone = minimumPartsInZone;
  });
</script>

<section class='flex flex-col items-center gap-2'>
  <header class='flex items-baseline gap-6'>
    <h2 class='-mx-6 w-max text-stone-600 text-2xl font-extrabold tracking-tighter uppercase scale-x-85'>Environmental Control Unit</h2>
    <p><span class='inline-block w-[72px] text-5xl text-right font-display text-white text-shadow-[1px_1px] text-shadow-amber-500 translate-y-1'><NumberFlow value={points}/></span> / 44</p>
  </header>
  <div class='flex gap-8 p-4 rounded-md bg-stone-800'>
    <div class='space-y-6'>
      <div class='flex gap-8'>
        {#each state.fuses as x, i}
          <button class='flex flex-col items-center odd:mt-8 even:mb-8' onclick={() => state.fuses[i] = x === 'broken' ? 'empty' : x === 'empty' ? 'replaced' : 'broken'}>
            {#if x === 'replaced'}
              <div class='size-8 rounded-full bg-green-500 border-2 border-stone-900'></div>
            {:else if x === 'empty'}
              <div class='size-8 rounded-full bg-stone-900'></div>
            {:else if x === 'broken'}
              <div class='size-8 rounded-full bg-red-500 border-2 border-stone-900'></div>
            {/if}
            <span class='text-sm'>Fuse {i + 1}</span>
          </button>
        {/each}
      </div>

      <div class='flex gap-4'>
        {#each state.transformers as x, i}
          <button class='flex flex-col items-center gap-1' onclick={() => state.transformers[i] = x === 'broken' ? 'empty' : x === 'empty' ? 'replaced' : 'broken'}>
            {#if x === 'replaced'}
              <div class='w-16 h-20 rounded-xs bg-green-500 border-2 border-stone-900'></div>
            {:else if x === 'empty'}
              <div class='w-16 h-20 rounded-xs bg-stone-900'></div>
            {:else if x === 'broken'}
              <div class='w-16 h-20 rounded-xs bg-red-500 border-2 border-stone-900'></div>
            {/if}
            <span class='text-sm'>Transformer {i + 1}</span>
          </button>
        {/each}
      </div>
    </div>
    <div class='flex'>
      {#each state.circuitBoards as x, i}
        <button class='flex flex-col items-center gap-1 first:h-36 nth-[2]:h-40 last:h-24 nth-[2]:mt-8 last:mt-14' onclick={() => state.circuitBoards[i] = x === 'broken' ? 'empty' : x === 'empty' ? 'replaced' : 'broken'}>
          <span class='text-sm'>CB {i + 1}</span>
          {#if x === 'replaced'}
            <div class='grow w-4 rounded-xs bg-green-500 border-2 border-stone-900'></div>
          {:else if x === 'empty'}
            <div class='grow w-4 rounded-xs bg-stone-900'></div>
          {:else if x === 'broken'}
            <div class='grow w-4 rounded-xs bg-red-500 border-2 border-stone-900'></div>
          {/if}
        </button>
      {/each}
    </div>
  </div>
  <button class='flex items-center gap-6 px-4 py-1 rounded-md bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left text-base active:translate-y-0.5 transition duration-50' onclick={() => state.newPartsInZone = state.newPartsInZone < 8 ? state.newPartsInZone + 1 : 0}>
    <p>Total Components <em>Brought</em> To ECU Zone</p>
    <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.newPartsInZone}/></span>/8</p>
  </button>
</section>