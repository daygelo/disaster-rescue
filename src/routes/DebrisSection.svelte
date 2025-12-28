<script lang='ts'>
  import { debrisState as state } from '$lib/states.svelte';
  import NumberFlow from '$lib/NumberFlow.svelte';

  let { points } = $props();
</script>

<section class='flex flex-col items-center gap-4'>
  <header class='flex items-baseline gap-8'>
    <h2 class='text-stone-600 text-2xl font-extrabold tracking-tight uppercase'>Debris</h2>
    <p><span class='inline-block text-5xl w-[66px] text-right font-display text-white text-shadow-[1px_1px] text-shadow-amber-500 translate-y-1'><NumberFlow value={points}/></span> / 24</p>
  </header>
  <main class='flex items-center gap-0.5'>
    <div class='flex flex-col gap-0.5'>
      <button class='pr-6 py-3 pl-12 -space-y-1 rounded-xs rounded-t-md bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left text-base active:translate-y-0.5 transition duration-50' onclick={() => state.absPipes = state.absPipes < 4 ? state.absPipes + 1 : 0}>
        <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.absPipes}/></span>/4</p>
        <p>ABS Pipes</p>
      </button>
      <button class='pr-6 py-3 pl-12 -space-y-1 rounded-xs bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left text-base active:translate-y-0.5 transition duration-50' onclick={() => state.poolNoodles = state.poolNoodles < 4 ? state.poolNoodles + 1 : 0}>
        <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.poolNoodles}/></span>/4</p>
        <p>Pool Noodles</p>
      </button>
      <button class='pr-6 py-3 pl-12 -space-y-1 rounded-xs bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left text-base active:translate-y-0.5 transition duration-50' onclick={() => state.woodenBlocks = state.woodenBlocks < 4 ? state.woodenBlocks + 1 : 0}>
        <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.woodenBlocks}/></span>/4</p>
        <p>2x2 Blocks</p>
      </button>
      <button class='pr-6 py-3 pl-12 -space-y-1 rounded-xs rounded-b-md bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left text-base active:translate-y-0.5 transition duration-50' onclick={() => state.wires = state.wires < 4 ? state.wires + 1 : 0}>
        <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.wires}/></span>/4</p>
        <p>Wires</p>
      </button>
    </div>
    <div class='flex flex-col gap-0.5'>
      <button class='pr-6 py-3 pl-12 -space-y-1 rounded-xs rounded-tr-md bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left text-base active:translate-y-0.5 transition duration-50' onclick={() => state.fuses = state.fuses < 3 ? state.fuses + 1 : 0}>
        <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.fuses}/></span>/3</p>
        <p>Fuses</p>
      </button>
      <button class='pr-6 py-3 pl-12 -space-y-1 rounded-xs bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left text-base active:translate-y-0.5 transition duration-50' onclick={() => state.circuitBoards = state.circuitBoards < 3 ? state.circuitBoards + 1 : 0}>
        <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.circuitBoards}/></span>/3</p>
        <p>Circuit Boards</p>
      </button>
      <button class='pr-6 py-3 pl-12 -space-y-1 rounded-xs rounded-br-md bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left text-base active:translate-y-0.5 transition duration-50' onclick={() => state.transformers = state.transformers < 2 ? state.transformers + 1 : 0}>
        <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.transformers}/></span>/2</p>
        <p>Transformers</p>
      </button>
    </div>
  </main>
</section>