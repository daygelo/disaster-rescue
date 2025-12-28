<script lang='ts'>
  import { autonomousState, debrisState, ecuState, lobbyState, type ECUPartState } from '$lib/states.svelte';
  import NumberFlow from '$lib/NumberFlow.svelte';
  import AutoSection from './AutoSection.svelte';
  import DebrisSection from './DebrisSection.svelte';
  import ECUSection from './ECUSection.svelte';
  import LobbySection from './LobbySection.svelte';

  const calculateECUPartsPoints = (parts: ECUPartState[], hasBonus: boolean, basePoints: number) =>
    parts.reduce((sum, state) => {
      if (state !== 'broken') sum++;
      if (state === 'replaced') sum += basePoints + +hasBonus;
      return sum;
    }, 0);

  const lobbyPoints = $derived(+lobbyState.isSteveDelivered * 5 + +(lobbyState.whenFlippedSwitch === '1st'));
  
  const debrisPoints = $derived(Object.keys(debrisState).reduce((sum, key) => sum + (debrisState as any)[key], 0));
  
  const ecuPoints = $derived(
    ecuState.newPartsInZone
    + calculateECUPartsPoints(ecuState.fuses, lobbyState.whenFlippedSwitch !== false, 2)
    + calculateECUPartsPoints(ecuState.circuitBoards, lobbyState.whenFlippedSwitch !== false, 2)
    + calculateECUPartsPoints(ecuState.transformers, lobbyState.whenFlippedSwitch !== false, 4)
  );
  
  const autonomousPoints = $derived(
    +autonomousState.isAutonomousInZone * 5
    + autonomousState.supplyItemsDelivered * 2
    + autonomousState.supplyItemsOrientated
    + autonomousState.workersStanding * 2
    + +autonomousState.isFanPlaced * (lobbyState.whenFlippedSwitch !== false ? 5 : 4)
  );
  
  const totalPoints = $derived(lobbyPoints + debrisPoints + ecuPoints + autonomousPoints);
</script>

<main class='w-full min-h-screen flex flex-col justify-center items-center py-16 bg-stone-900 text-orange-100 md:text-lg font-sans'>

  <header class='flex items-baseline gap-8'>
    <p class='text-stone-600 text-4xl font-extrabold tracking-tight uppercase'>Total Score</p>
    <p><span class='inline-block w-[140px] text-right text-7xl font-display text-white text-shadow-[1px_2px] text-shadow-amber-500 translate-y-1'><NumberFlow value={totalPoints}/></span> / 100</p>
  </header>
  <div class='grid grid-cols-1 sm:grid-cols-[auto_auto] gap-16'>
    <div class='space-y-12'>
      <LobbySection points={lobbyPoints}/>
      <DebrisSection points={debrisPoints}/>
    </div>
    <div class='space-y-12'>
      <ECUSection points={ecuPoints}/>
      <AutoSection points={autonomousPoints}/>
    </div>
  </div>
</main>
