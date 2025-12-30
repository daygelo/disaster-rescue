<script lang='ts'>
  import { debrisState as state } from '$lib/states.svelte';
  import NumberFlow from '$lib/NumberFlow.svelte';

  import Pipe from '$lib/assets/images/pipe.svg';
  import PoolNoodle from '$lib/assets/images/pool-noodle.svg';
  import WoodenBlock from '$lib/assets/images/2by2-block.svg';
  import Wire from '$lib/assets/images/wire.svg';
  import Fuse from '$lib/assets/images/fuse.svg';
  import CircuitBoard from '$lib/assets/images/circuit-board.svg';
  import Transformer from '$lib/assets/images/transformer.svg';

  let { points } = $props();
</script>

<section class='flex flex-col items-center gap-4'>
  <header class='flex items-baseline gap-8'>
    <h2 class='text-stone-600 text-xl font-extrabold tracking-tight uppercase'>Debris</h2>
    <p><span class='inline-block text-4xl w-16.5 text-right font-display text-white text-shadow-[1px_1px] text-shadow-amber-500 translate-y-0.5'><NumberFlow value={points}/></span> / 24</p>
  </header>
  <main class='flex items-center gap-4'>
    <div class='flex flex-col gap-2 items-end'>
      <button class='group flex items-center gap-2 pl-6 py-3 -space-y-1 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-right active:translate-y-0.5 transition duration-50' onclick={() => state.absPipes = state.absPipes < 4 ? state.absPipes + 1 : 0}>
        <div>
          <p><span class='text-2xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.absPipes}/></span>/4</p>
          <p>ABS Pipes</p>
        </div>
        <img class={`transition duration-200 ease-bounce group-hover:rotate-12 group-active:scale-95 -mr-4 rotate-3 ${state.absPipes === 0 ? 'grayscale-75 opacity-75' : ''}`} src={Pipe} alt='abs pipe'/>
      </button>
      <button class='group flex items-center gap-2 pl-6 py-3 -space-y-1 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-right active:translate-y-0.5 transition duration-50' onclick={() => state.poolNoodles = state.poolNoodles < 4 ? state.poolNoodles + 1 : 0}>
        <div>
          <p><span class='text-2xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.poolNoodles}/></span>/4</p>
          <p>Pool Noodles</p>
        </div>
        <img class={`transition duration-200 ease-bounce group-hover:rotate-12 group-active:scale-95 -mr-4 rotate-3 ${state.poolNoodles === 0 ? 'grayscale-75 opacity-75' : ''}`} src={PoolNoodle} alt='pool noodle'/>
      </button>
      <button class='group flex items-center gap-2 pl-6 py-3 -space-y-1 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-right active:translate-y-0.5 transition duration-50' onclick={() => state.woodenBlocks = state.woodenBlocks < 4 ? state.woodenBlocks + 1 : 0}>
        <div>
          <p><span class='text-2xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.woodenBlocks}/></span>/4</p>
          <p>2x2 Blocks</p>
        </div>
        <img class={`transition duration-200 ease-bounce group-hover:rotate-12 group-active:scale-95 -mr-4 rotate-3 ${state.woodenBlocks === 0 ? 'grayscale-75 opacity-75' : ''}`} src={WoodenBlock} alt='wooden block'/>
      </button>
      <button class='group flex items-center gap-2 pl-6 py-3 -space-y-1 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-right active:translate-y-0.5 transition duration-50' onclick={() => state.wires = state.wires < 4 ? state.wires + 1 : 0}>
        <div>
          <p><span class='text-2xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.wires}/></span>/4</p>
          <p>Wires</p>
        </div>
        <img class={`transition duration-200 ease-bounce group-hover:rotate-12 group-active:scale-95 -mr-4 rotate-3 ${state.wires === 0 ? 'grayscale-75 opacity-75' : ''}`} src={Wire} alt='wire'/>
      </button>
    </div>
    <div class='flex flex-col gap-2 items-start'>
      <button class='group flex items-center gap-2 pr-6 py-3 -space-y-1 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left active:translate-y-0.5 transition duration-50' onclick={() => state.fuses = state.fuses < 3 ? state.fuses + 1 : 0}>
        <img class={`transition duration-200 ease-bounce group-hover:-rotate-21 group-active:scale-95 -ml-4 -rotate-12 ${state.fuses === 0 ? 'grayscale-75 opacity-75' : ''}`} src={Fuse} alt='old fuse'/>
        <div>
          <p><span class='text-2xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.fuses}/></span>/3</p>
          <p>Old Fuses</p>
        </div>
      </button>
      <button class='group flex items-center gap-2 pr-6 py-3 -space-y-1 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left active:translate-y-0.5 transition duration-50' onclick={() => state.circuitBoards = state.circuitBoards < 3 ? state.circuitBoards + 1 : 0}>
        <img class={`transition duration-200 ease-bounce group-hover:-rotate-12 group-active:scale-95 -ml-4 -rotate-3 ${state.circuitBoards === 0 ? 'grayscale-75 opacity-75' : ''}`} src={CircuitBoard} alt='old circuit board'/>
        <div>
          <p><span class='text-2xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.circuitBoards}/></span>/3</p>
          <p>Old Circuit Boards</p>
        </div>
      </button>
      <button class='group flex items-center gap-2 pr-6 py-3 -space-y-1 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left active:translate-y-0.5 transition duration-50' onclick={() => state.transformers = state.transformers < 2 ? state.transformers + 1 : 0}>
        <img class={`transition duration-200 ease-bounce group-hover:-rotate-12 group-active:scale-95 -ml-4 -rotate-3 ${state.transformers === 0 ? 'grayscale-75 opacity-75' : ''}`} src={Transformer} alt='old transformer'/>
        <div>
          <p><span class='text-2xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.transformers}/></span>/2</p>
          <p>Old Transformers</p>
        </div>
      </button>
    </div>
  </main>
</section>