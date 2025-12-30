<script lang='ts'>
  import { autonomousState as state } from '$lib/states.svelte';
  import NumberFlow from '$lib/NumberFlow.svelte';

  import Robot from '$lib/assets/images/robot.png';
  import SupplyItem from '$lib/assets/images/supply-item.svg';
  import Fan from '$lib/assets/images/fan.svg';
  import SteveHappy from '$lib/assets/images/steve_happy.svg';
  import SteveSad from '$lib/assets/images/steve_sad.svg';

  let { points } = $props();
</script>

<section class='flex flex-col items-center gap-4'>
  <header class='flex items-baseline gap-8'>
    <h2 class='text-stone-600 text-xl font-extrabold tracking-tight uppercase'>Autonomous</h2>
    <p><span class='inline-block text-4xl w-16.5 text-right font-display text-white text-shadow-[1px_1px] text-shadow-amber-500 translate-y-1'><NumberFlow value={points}/></span> / 26</p>
  </header>
  <main class='flex flex-wrap justify-center gap-4 max-w-2xl'>
    <button class='group flex items-center gap-4 pl-2 pr-4 py-3 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-base text-left active:translate-y-0.5 transition duration-50' onclick={() => state.isAutonomousInZone = !state.isAutonomousInZone}>
      <div class='mt-2 p-1 rounded bg-stone-700 border-2 border-dashed border-stone-400 shadow shadow-black/50'>
        <img class={`-mt-4 h-12 transition duration-200 ease-bounce-sm origin-[50%_75%] ${state.isAutonomousInZone ? 'group-hover:rotate-3 group-hover:-translate-y-1' : 'scale-90 rotate-20 -translate-y-9 grayscale-75 group-hover:rotate-15 group-hover:-translate-y-10'}`} src={Robot} alt='robot'/>
      </div>
      {#if state.isAutonomousInZone}
        <span>Robot Is In <br>Autonomous Zone ✓</span>
      {:else}
        <span>Robot Isn't In <br>Autonomous Zone ✗</span>
      {/if}
    </button>
    <button class='group flex items-center gap-2 pr-5 py-3 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-base text-left active:translate-y-0.5 transition duration-50' onclick={() => state.isFanPlaced = !state.isFanPlaced}>
      <img class={`h-20 -ml-4 -my-4 -rotate-6 transition duration-200 ease-bounce group-hover:-rotate-12 group-active:scale-95 ${state.isFanPlaced ? '' : 'grayscale-75'}`} src={Fan} alt='fan'/>
      {#if state.isFanPlaced}
        <span>Fan Is <br>Placed ✓</span>
      {:else}
        <span>Fan Isn't <br>Placed ✗</span>
      {/if}
    </button>
    <button class='group flex items-center gap-2 pr-6 py-3 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left active:translate-y-0.5' onclick={() => state.workersStanding = state.workersStanding < 2 ? state.workersStanding + 1 : 0}>
      <img class={`h-20 -ml-4 -my-4 -rotate-6 transition duration-200 ease-bounce group-hover:-rotate-12 group-active:scale-95 ${state.workersStanding > 0 ? '' : 'grayscale-75'}`} src={state.workersStanding === 2 ? SteveHappy : SteveSad} alt='worker'/>
      <div>
        <p><span class='text-2xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.workersStanding}/></span>/2</p>
        <p>Workers Standing</p>
      </div>
    </button>
    <div class='flex items-center -space-x-7'>
      <button class='px-4 py-3 pr-8 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-right active:translate-y-0.5 transition duration-50' onclick={() => {
        state.supplyItemsDelivered = state.supplyItemsDelivered < 4 ? state.supplyItemsDelivered + 1 : 0;
        state.supplyItemsOrientated = Math.min(state.supplyItemsOrientated + 1, state.supplyItemsDelivered);
      }}>
        <p><span class='text-2xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.supplyItemsDelivered}/></span>/4</p>
        <p>Supply Items Delivered</p>
      </button>
      <img class={`z-1 ${state.supplyItemsDelivered === 0 ? 'grayscale-75' : ''}`} src={SupplyItem} alt='supply item'/>
      <button class={`px-4 py-3 pl-8 rounded bg-stone-800 shadow-black/50 text-left font-medium transition duration-50 ${state.supplyItemsDelivered === 0 ? 'opacity-50' : 'hover:bg-stone-800/75 active:translate-y-0.5 shadow-xs'}`} onclick={() => state.supplyItemsOrientated = state.supplyItemsOrientated < state.supplyItemsDelivered ? state.supplyItemsOrientated + 1 : 0}>
        <p><span class='text-2xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.supplyItemsOrientated}/></span>/{state.supplyItemsDelivered}</p>
        <p>Placed With Tape On Top</p>
      </button>
    </div>
  </main>
</section>
