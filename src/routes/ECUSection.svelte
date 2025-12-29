<script lang='ts'>
  import { ecuState as state } from '$lib/states.svelte';
  import NumberFlow from '$lib/NumberFlow.svelte';

  const LABELS = {
    broken: 'Broken ✗',
    empty: 'Empty',
    replaced: 'Replaced ✓',
  };

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
  <header class='flex items-baseline gap-10'>
    <h2 class='-mx-6 w-max text-stone-600 text-2xl font-extrabold tracking-tighter uppercase scale-x-90'>Environmental Control Unit</h2>
    <p><span class='inline-block w-18 text-5xl text-right font-display text-white text-shadow-[1px_1px] text-shadow-amber-500 translate-y-1'><NumberFlow value={points}/></span> / 44</p>
  </header>
  <div class='flex items-end gap-4 p-4 rounded-lg border border-stone-700 shadow-inner shadow-stone-950/50'>
    <div class='flex flex-col items-center gap-4'>
      <div class='flex gap-4'>
        {#each state.fuses as x, i}
          <button class='group relative flex flex-col items-center gap-1 odd:mt-8 even:mb-8 p-2 rounded-md hover:bg-stone-700/50 active:translate-y-0.5 transition duration-50' onclick={() => state.fuses[i] = x === 'broken' ? 'empty' : x === 'empty' ? 'replaced' : 'broken'}>
            <span>Fuse {i + 1}</span>
            <span class={`hidden group-hover:block absolute top-11 px-1 rounded-md shadow-2xs shadow-black/50 text-white text-base font-bold capitalize whitespace-nowrap ${x === 'replaced' ? 'bg-green-700' : x === 'broken' ? 'bg-red-700' : 'bg-stone-950'}`}>{LABELS[x]}</span>
            {#if x === 'replaced'}
              <div class='size-10 rounded-full bg-green-500 border-4 border-stone-950'></div>
            {:else if x === 'empty'}
              <div class='size-10 rounded-full bg-stone-950'></div>
            {:else if x === 'broken'}
              <div class='size-10 rounded-full bg-red-500 border-4 border-stone-950'></div>
            {/if}
          </button>
        {/each}
      </div>
      <div class='flex gap-2'>
        <button class='group relative flex flex-col items-center gap-1 p-2 rounded-md hover:bg-stone-700/50 active:translate-y-0.5 transition duration-50' onclick={() => state.transformers[0] = state.transformers[0] === 'broken' ? 'empty' : state.transformers[0] === 'empty' ? 'replaced' : 'broken'}>
          {#if state.transformers[0] === 'replaced'}
            <div class='w-22 h-24 rounded-sm bg-green-500 border-4 border-stone-950'></div>
          {:else if state.transformers[0] === 'empty'}
            <div class='w-22 h-24 rounded-sm bg-stone-950'></div>
          {:else if state.transformers[0] === 'broken'}
            <div class='w-22 h-24 rounded-sm bg-red-500 border-4 border-stone-950'></div>
          {/if}
          <span>Transformer 1</span>
          <span class={`hidden group-hover:block absolute bottom-18 px-1 rounded-md shadow-2xs shadow-black/50 text-white text-base font-bold capitalize whitespace-nowrap ${state.transformers[0] === 'replaced' ? 'bg-green-700' : state.transformers[0] === 'broken' ? 'bg-red-700' : 'bg-stone-950'}`}>{LABELS[state.transformers[0]]}</span>
        </button>
        <button class='group relative flex flex-col items-center gap-1 p-2 rounded-md hover:bg-stone-700/50 active:translate-y-0.5 transition duration-50' onclick={() => state.transformers[1] = state.transformers[1] === 'broken' ? 'empty' : state.transformers[1] === 'empty' ? 'replaced' : 'broken'}>
          {#if state.transformers[1] === 'replaced'}
            <div class='w-14 h-24 rounded-sm bg-green-500 border-4 border-stone-950'></div>
          {:else if state.transformers[1] === 'empty'}
            <div class='w-14 h-24 rounded-sm bg-stone-950'></div>
          {:else if state.transformers[1] === 'broken'}
            <div class='w-14 h-24 rounded-sm bg-red-500 border-4 border-stone-950'></div>
          {/if}
          <span>Transformer 2</span>
          <span class={`hidden group-hover:block absolute bottom-18 px-1 rounded-md shadow-2xs shadow-black/50 text-white text-base font-bold capitalize whitespace-nowrap ${state.transformers[1] === 'replaced' ? 'bg-green-700' : state.transformers[1] === 'broken' ? 'bg-red-700' : 'bg-stone-950'}`}>{LABELS[state.transformers[1]]}</span>
        </button>
      </div>
    </div>
    <div class='flex -space-x-2'>
      {#each state.circuitBoards as x, i}
        <button class='group relative flex flex-col items-center gap-2 first:h-44 nth-[2]:h-48 last:h-32 nth-[2]:mt-8 last:mt-14 p-2 rounded-md hover:bg-stone-700/50 active:translate-y-0.5 transition duration-50' onclick={() => state.circuitBoards[i] = x === 'broken' ? 'empty' : x === 'empty' ? 'replaced' : 'broken'}>
          {#if x === 'replaced'}
            <div class='grow w-5 rounded-sm bg-green-500 border-4 border-stone-950'></div>
          {:else if x === 'empty'}
            <div class='grow w-5 rounded-sm bg-stone-950'></div>
          {:else if x === 'broken'}
            <div class='grow w-5 rounded-sm bg-red-500 border-4 border-stone-950'></div>
          {/if}
          <span class='leading-tight'>PCB<br>{i + 1}</span>
          <span class={`hidden group-hover:block absolute -top-5 px-1 rounded-md shadow-2xs shadow-black/50 text-white text-base font-bold capitalize whitespace-nowrap ${x === 'replaced' ? 'bg-green-700' : x === 'broken' ? 'bg-red-700' : 'bg-stone-950'}`}>{LABELS[x]}</span>
        </button>
      {/each}
    </div>
  </div>
  <button class={`flex items-center gap-6 px-4 py-1 rounded-md bg-stone-800 shadow-xs shadow-black/50 text-left text-base transition duration-50 ${minimumPartsInZone === 8 ? 'opacity-50 text-stone-500' : 'hover:bg-stone-800/75 active:translate-y-0.5'}`} onclick={() => state.newPartsInZone = state.newPartsInZone < 8 ? state.newPartsInZone + 1 : 0}>
    <p>Total New Components <em>Brought</em> To ECU Zone</p>
    <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.newPartsInZone}/></span>/8</p>
  </button>
</section>