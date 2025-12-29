<script lang='ts'>
  import { lobbyState as state } from '$lib/states.svelte';
  import NumberFlow from '$lib/NumberFlow.svelte';

  let { points } = $props();
</script>

<section class='flex flex-col items-center gap-4'>
  <header class='flex items-baseline gap-12'>
    <h2 class='text-stone-600 text-2xl font-extrabold tracking-tight uppercase'>Lobby</h2>
    <p><span class='inline-block w-9 text-right text-5xl font-display text-white text-shadow-[1px_1px] text-shadow-amber-500 translate-y-1'><NumberFlow value={points}/></span> / 6</p>
  </header>
  <main class='flex gap-4'>
    <button class='w-44 py-3 pl-12 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-lg text-left active:translate-y-0.5 transition duration-50' onclick={() => state.isSteveDelivered = !state.isSteveDelivered}>
      {#if state.isSteveDelivered}
        <span>Steve Is <br>Delivered ✓</span>
      {:else}
        <span>Steve Isn't <br>Delivered ✗</span>
      {/if}
    </button>
    <button class='w-44 py-3 pl-12 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-lg text-left active:translate-y-0.5 transition duration-50' onclick={() => state.whenFlippedSwitch = state.whenFlippedSwitch === false ? '1st' : state.whenFlippedSwitch === '1st' ? '2nd' : false}>
      {#if state.whenFlippedSwitch === '1st'}
        <span>Flipped <br>Switch <strong class='text-2xl leading-0'>1<sup class='inline-block translate-y-0.5'>st</sup></strong></span>
      {:else if state.whenFlippedSwitch === '2nd'}
        <span>Flipped <br>Switch <strong class='text-2xl leading-0'>2<sup class='inline-block translate-y-0.5'>nd</sup></strong></span>
      {:else}
        <span>Didn't Flip <br>Switch ✗</span>
      {/if}
    </button>
  </main>
</section>
