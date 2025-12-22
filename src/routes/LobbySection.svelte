<script lang='ts'>
  import { lobbyState as state } from '$lib/states.svelte';

  let { points } = $props();
</script>

<section class='flex flex-col gap-1'>
  <h2>Lobby ({points}/6)</h2>
  <button onclick={() => state.isSteveDelivered = !state.isSteveDelivered}>
    <span>{state.isSteveDelivered ? 'Delivered Steve' : 'Didn\'t Deliver Steve'}</span>
  </button>
  <button onclick={() => state.whenFlippedSwitch = state.whenFlippedSwitch === false ? '1st' : state.whenFlippedSwitch === '1st' ? '2nd' : false}>
    <span>{state.whenFlippedSwitch ? `Flipped Switch ${state.whenFlippedSwitch}` : 'Didn\'t Flip Switch'}</span>
  </button>
</section>
