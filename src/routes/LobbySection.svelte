<script lang='ts'>
  import { lobbyState as state } from '$lib/states.svelte';
  import NumberFlow from '$lib/NumberFlow.svelte';

  import SteveHappy from '$lib/assets/images/steve_happy.svg';
  import SteveSad from '$lib/assets/images/steve_sad.svg';

  let { points } = $props();
</script>

<section class='flex flex-col items-center gap-4'>
  <header class='flex items-baseline gap-10'>
    <h2 class='text-stone-600 text-xl font-extrabold tracking-tight uppercase'>Lobby</h2>
    <p><span class='inline-block w-9 text-right text-4xl font-display text-white text-shadow-[1px_1px] text-shadow-amber-500 translate-y-0.5'><NumberFlow value={points}/></span> / 6</p>
  </header>
  <main class='flex flex-wrap justify-center gap-6'>
    <button class='group flex items-center gap-2 pr-6 py-3 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-base text-left active:translate-y-0.5 transition duration-50' onclick={() => state.isSteveDelivered = !state.isSteveDelivered}>
      <img class={`h-24 -ml-8 -my-8 transition duration-200 ease-bounce origin-[50%_75%] group-active:scale-95 ${state.isSteveDelivered ? 'group-hover:-rotate-3' : '-rotate-6 group-hover:-rotate-12 grayscale-75 opacity-90'}`} src={state.isSteveDelivered ? SteveHappy : SteveSad} alt='steve'/>
      {#if state.isSteveDelivered}
        <span>Steve Is <br>Delivered ✓</span>
      {:else}
        <span>Steve Isn't <br>Delivered ✗</span>
      {/if}
    </button>
    <button class='flex items-center gap-6 w-54 px-2 py-3 rounded bg-stone-800 hover:bg-stone-800/75 shadow-xs shadow-black/50 text-base text-left active:translate-y-0.5 transition duration-50' onclick={() => state.whenFlippedSwitch = state.whenFlippedSwitch === false ? '1st' : state.whenFlippedSwitch === '1st' ? '2nd' : false}>
      <div class='flex items-end gap-4 bg-stone-900 rounded-t-[50%_70%] rounded-b-md shadow-3d-inset p-1 pt-0'>
        <div class={`size-3 rounded-full shadow-3d ${state.whenFlippedSwitch === '1st' ? 'bg-green-500' : state.whenFlippedSwitch === '2nd' ? 'bg-yellow-500' : 'bg-green-900'}`}></div>
        <div class={`-my-1 w-3 h-14 bg-stone-600 rounded-sm shadow-3d transition duration-300 ease-gravity origin-[50%_90%] ${state.whenFlippedSwitch ? '-rotate-60' : 'rotate-60'}`}></div>
        <div class={`size-3 rounded-full shadow-3d ${!state.whenFlippedSwitch ? 'bg-red-600' : 'bg-red-900'}`}></div>
      </div>
      {#if state.whenFlippedSwitch === '1st'}
        <span>Flipped <br>Switch <strong class='text-xl leading-0'>1<sup class='inline-block translate-y-0.5'>st</sup></strong></span>
      {:else if state.whenFlippedSwitch === '2nd'}
        <span>Flipped <br>Switch <strong class='text-xl leading-0'>2<sup class='inline-block translate-y-0.5'>nd</sup></strong></span>
      {:else}
        <span>Didn't Flip <br>Switch ✗</span>
      {/if}
    </button>
  </main>
</section>
