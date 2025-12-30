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
  <header class='flex sm:items-baseline gap-8'>
    <h2 class='w-max text-stone-600 text-xl font-extrabold tracking-tighter uppercase'>
      Environmental <br class='sm:hidden'>Control Unit
    </h2>
    <p><span class='inline-block w-18 text-4xl text-right font-display text-white text-shadow-[1px_1px] text-shadow-amber-500 translate-y-0.5'><NumberFlow value={points}/></span> / 44</p>
  </header>
  <div class='flex items-end gap-4 p-4 rounded-lg bg-stone-800/25 shadow-3d-inset max-sm:text-xs'>
    <div class='flex flex-col items-center gap-4'>
      <div class='flex gap-4'>
        {#each state.fuses as x, i}
          <button class='group relative flex flex-col items-center gap-1 odd:mt-8 even:mb-8 p-2 rounded-md hover:bg-stone-700/50 active:translate-y-0.5 transition duration-50' onclick={() => state.fuses[i] = x === 'broken' ? 'empty' : x === 'empty' ? 'replaced' : 'broken'}>
            <span class='group-hover:opacity-0'>Fuse {i + 1}</span>
            <span class={`hidden group-hover:block absolute top-2 px-1 rounded-md shadow-2xs shadow-black/50 text-white font-bold capitalize whitespace-nowrap ${x === 'replaced' ? 'bg-green-700' : x === 'broken' ? 'bg-red-700' : 'bg-stone-900'}`}>{LABELS[x]}</span>
            <div class='size-10 p-1 rounded-full bg-stone-950 shadow-3d-inset overflow-hidden'>
              <div class={`size-full rounded-full ${x === 'replaced' ? 'bg-ecu-replaced shadow-3d' : x === 'broken' ? 'bg-ecu-broken shadow-3d' : ''}`}></div>
            </div>
          </button>
        {/each}
      </div>
      <div class='flex gap-2'>
        <button class='group relative flex flex-col items-center gap-1 p-2 rounded-md hover:bg-stone-700/50 active:translate-y-0.5 transition duration-50' onclick={() => state.transformers[0] = state.transformers[0] === 'broken' ? 'empty' : state.transformers[0] === 'empty' ? 'replaced' : 'broken'}>
          <div class='relative w-22 h-24 p-1 rounded-lg bg-stone-950 shadow-3d-inset overflow-hidden'>
            <div class={`size-full rounded ${state.transformers[0] === 'replaced' ? 'bg-ecu-replaced shadow-3d' : state.transformers[0] === 'broken' ? 'bg-ecu-broken shadow-3d' : ''}`}></div>
            <div class={`absolute top-8 left-7 size-8 rounded-full ${state.transformers[0] !== 'empty' ? 'bg-stone-950 shadow shadow-white/50' : ''}`}></div>
          </div>
          <span class='group-hover:opacity-0'>Transformer 1</span>
          <span class={`hidden group-hover:block absolute bottom-2 px-1 rounded-md shadow-2xs shadow-black/50 text-white font-bold capitalize whitespace-nowrap ${state.transformers[0] === 'replaced' ? 'bg-green-700' : state.transformers[0] === 'broken' ? 'bg-red-700' : 'bg-stone-900'}`}>{LABELS[state.transformers[0]]}</span>
        </button>
        <button class='group relative flex flex-col items-center gap-1 p-2 rounded-md hover:bg-stone-700/50 active:translate-y-0.5 transition duration-50' onclick={() => state.transformers[1] = state.transformers[1] === 'broken' ? 'empty' : state.transformers[1] === 'empty' ? 'replaced' : 'broken'}>
          <div class='relative w-14 h-24 p-1 rounded-lg bg-stone-950 shadow-3d-inset overflow-hidden'>
            <div class={`size-full rounded ${state.transformers[1] === 'replaced' ? 'bg-ecu-replaced shadow-3d' : state.transformers[1] === 'broken' ? 'bg-ecu-broken shadow-3d' : ''}`}></div>
            <div class={`absolute top-8 left-3 size-8 rounded-full -scale-x-100 ${state.transformers[1] === 'replaced' ? 'bg-ecu-replaced shadow-3d' : state.transformers[1] === 'broken' ? 'bg-ecu-broken shadow-3d' : ''}`}></div>
          </div>
          <span class='group-hover:opacity-0'>Transformer 2</span>
          <span class={`hidden group-hover:block absolute bottom-2 px-1 rounded-md shadow-2xs shadow-black/50 text-white font-bold capitalize whitespace-nowrap ${state.transformers[1] === 'replaced' ? 'bg-green-700' : state.transformers[1] === 'broken' ? 'bg-red-700' : 'bg-stone-900'}`}>{LABELS[state.transformers[1]]}</span>
        </button>
      </div>
    </div>
    <div class='flex -space-x-2'>
      {#each state.circuitBoards as x, i}
        <button class='group relative flex flex-col items-center gap-2 first:h-44 nth-[2]:h-48 last:h-32 nth-[2]:mt-8 last:mt-14 p-2 rounded-md hover:bg-stone-700/50 active:translate-y-0.5 transition duration-50' onclick={() => state.circuitBoards[i] = x === 'broken' ? 'empty' : x === 'empty' ? 'replaced' : 'broken'}>
          <div class='grow w-5 p-1 rounded bg-stone-950 shadow-3d-inset overflow-hidden'>
            <div class={`size-full ${x === 'replaced' ? 'bg-ecu-replaced shadow-3d' : x === 'broken' ? 'bg-ecu-broken shadow-3d' : ''}`}></div>
          </div>
          <span class='leading-tight group-hover:opacity-0'>PCB {i + 1}</span>
          <span class={`hidden group-hover:block absolute bottom-2 px-1 z-1 rounded-md shadow-2xs shadow-black/50 text-white font-bold capitalize whitespace-nowrap ${x === 'replaced' ? 'bg-green-700' : x === 'broken' ? 'bg-red-700' : 'bg-stone-950'}`}>{LABELS[x]}</span>
        </button>
      {/each}
    </div>
  </div>
  <button class={`flex sm:items-baseline gap-4 mt-2 px-4 pt-1 pb-1.5 rounded bg-stone-800 shadow-black/50 text-left sm:text-base transition duration-50 ${minimumPartsInZone === 8 ? 'opacity-50' : 'hover:bg-stone-800/75 active:translate-y-0.5 shadow-xs'}`} onclick={() => state.newPartsInZone = state.newPartsInZone < 8 ? state.newPartsInZone + 1 : 0}>
    <p><span class='text-2xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.newPartsInZone}/></span>/8</p>
    <p>Total New Components <br class='sm:hidden'><em>Brought</em> To ECU Zone</p>
  </button>
</section>