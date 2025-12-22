<script lang='ts'>
  import { autonomousState as state } from '$lib/states.svelte';

  let { points } = $props();
</script>

<section class='flex flex-col gap-1'>
  <h2>Autonomous Zone ({points}/26)</h2>
  <button onclick={() => state.isAutonomousInZone = !state.isAutonomousInZone}>
    <span>{state.isAutonomousInZone ? 'Autonomous Robot In Zone' : 'Autonomous Robot Not In Zone'}</span>
  </button>
  <button onclick={() => state.isFanPlaced = !state.isFanPlaced}>
    <span>{state.isFanPlaced ? 'Fan Placed' : 'Fan Not Placed'}</span>
  </button>
  <button onclick={() => {
    state.supplyItemsDelivered = state.supplyItemsDelivered < 4 ? state.supplyItemsDelivered + 1 : 0;
    state.supplyItemsOrientated = Math.min(state.supplyItemsOrientated + 1, state.supplyItemsDelivered);
  }}>
    <span>Supply Items Delivered: {state.supplyItemsDelivered}/4</span>
  </button>
  {#if state.supplyItemsDelivered > 0}
    <button onclick={() => state.supplyItemsOrientated = state.supplyItemsOrientated < state.supplyItemsDelivered ? state.supplyItemsOrientated + 1 : 0}>
      <span>With Correct Orientation: {state.supplyItemsOrientated}/{state.supplyItemsDelivered}</span>
    </button>
  {/if}
  <button onclick={() => state.workersStanding = state.workersStanding < 2 ? state.workersStanding + 1 : 0}>
    <span>Workers Standing: {state.workersStanding}/2</span>
  </button>
</section>
