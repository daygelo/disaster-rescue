<script lang='ts'>
  import { autonomousState as state } from '$lib/states.svelte';
  import NumberFlow from '$lib/NumberFlow.svelte';

  let { points } = $props();
</script>

<section class='flex flex-col items-center gap-4'>
  <header class='flex items-baseline gap-8'>
    <h2 class='text-stone-600 text-2xl font-extrabold tracking-tight uppercase'>Autonomous</h2>
    <p><span class='inline-block text-5xl w-[66px] text-right font-display text-white text-shadow-[1px_1px] text-shadow-amber-500 translate-y-1'><NumberFlow value={points}/></span> / 26</p>
  </header>
  <main class='flex items-center gap-0.5'>
    <div class='flex flex-col gap-0.5'>
      <button class='pr-4 py-3 pl-12 rounded-xs rounded-t-md bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left text-base active:translate-y-0.5 transition duration-50' onclick={() => state.isAutonomousInZone = !state.isAutonomousInZone}>
        {#if state.isAutonomousInZone}
          <span>Robot Is In <br>Autonomous Zone ✓</span>
        {:else}
          <span>Robot Isn't In <br>Autonomous Zone ✗</span>
        {/if}
      </button>
      <button class='pr-4 py-3 pl-12 rounded-xs bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left text-base active:translate-y-0.5 transition duration-50' onclick={() => state.isFanPlaced = !state.isFanPlaced}>
        {#if state.isFanPlaced}
          <span>Fan Is Placed ✓</span>
        {:else}
          <span>Fan Isn't Placed ✗</span>
        {/if}
      </button>
      <button class='pr-6 py-3 pl-12 -space-y-1 rounded-xs rounded-b-md bg-stone-800 shadow-xs shadow-black/50 text-left text-base' onclick={() => state.workersStanding = state.workersStanding < 2 ? state.workersStanding + 1 : 0}>
        <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.workersStanding}/></span>/2</p>
        <p>Workers Standing</p>
      </button>
    </div>
    <div class='flex flex-col gap-0.5'>
      <button class='pr-6 py-3 pl-12 -space-y-1 rounded-xs rounded-tr-md bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-left text-base active:translate-y-0.5 transition duration-50' onclick={() => {
        state.supplyItemsDelivered = state.supplyItemsDelivered < 4 ? state.supplyItemsDelivered + 1 : 0;
        state.supplyItemsOrientated = Math.min(state.supplyItemsOrientated + 1, state.supplyItemsDelivered);
      }}>
        <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.supplyItemsDelivered}/></span>/4</p>
        <p>Supply Items Delivered</p>
      </button>
      <button class={`pr-6 py-3 pl-12 -space-y-1 rounded-xs rounded-br-md bg-stone-800 shadow-xs shadow-black/50 text-left text-base font-medium active:translate-y-0.5 transition duration-50 ${state.supplyItemsDelivered === 0 ? 'opacity-50 text-stone-500' : 'hover:bg-stone-800/75'}`} onclick={() => state.supplyItemsOrientated = state.supplyItemsOrientated < state.supplyItemsDelivered ? state.supplyItemsOrientated + 1 : 0}>
        <p><span class='text-3xl font-bold text-white text-shadow-sm text-shadow-stone-900'><NumberFlow value={state.supplyItemsOrientated}/></span>/{state.supplyItemsDelivered}</p>
        <p>With Correct Orientation</p>
      </button>
    </div>
  </main>
</section>
