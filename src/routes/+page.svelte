<script lang='ts'>
  import { autonomousState, debrisState, ecuState, lobbyState, type ECUPartState } from '$lib/states.svelte';
  import NumberFlow from '$lib/NumberFlow.svelte';
  import AutoSection from './AutoSection.svelte';
  import DebrisSection from './DebrisSection.svelte';
  import ECUSection from './ECUSection.svelte';
  import LobbySection from './LobbySection.svelte';
  import GitHubIcon from '$lib/GitHubIcon.svelte';

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

  const resetState = () => {
    lobbyState.isSteveDelivered = false;
    lobbyState.whenFlippedSwitch = false;

    debrisState.absPipes = 0;
    debrisState.poolNoodles = 0;
    debrisState.woodenBlocks = 0;
    debrisState.wires = 0;
    debrisState.fuses = 0;
    debrisState.circuitBoards = 0;
    debrisState.transformers = 0;

    ecuState.newPartsInZone = 0;
    ecuState.fuses = ['broken', 'broken', 'broken'];
    ecuState.circuitBoards = ['broken', 'broken', 'broken'];
    ecuState.transformers = ['broken', 'broken'];

    autonomousState.isAutonomousInZone = false;
    autonomousState.supplyItemsDelivered = 0;
    autonomousState.supplyItemsOrientated = 0;
    autonomousState.workersStanding = 0;
    autonomousState.isFanPlaced = false;
  };

  const fillState = () => {
    lobbyState.isSteveDelivered = true;
    lobbyState.whenFlippedSwitch = '1st';

    debrisState.absPipes = 4;
    debrisState.poolNoodles = 4;
    debrisState.woodenBlocks = 4;
    debrisState.wires = 4;
    debrisState.fuses = 3;
    debrisState.circuitBoards = 3;
    debrisState.transformers = 2;

    ecuState.newPartsInZone = 8;
    ecuState.fuses = ['replaced', 'replaced', 'replaced'];
    ecuState.circuitBoards = ['replaced', 'replaced', 'replaced'];
    ecuState.transformers = ['replaced', 'replaced'];

    autonomousState.isAutonomousInZone = true;
    autonomousState.supplyItemsDelivered = 4;
    autonomousState.supplyItemsOrientated = 4;
    autonomousState.workersStanding = 2;
    autonomousState.isFanPlaced = true;
  };
</script>

<main class='w-full min-h-screen flex flex-col justify-center items-center px-2 pb-12 bg-stone-900 text-orange-100 text-sm'>
  <header class='group sticky top-2 z-10 flex justify-center items-baseline gap-8 w-full mb-6 py-1 rounded-lg bg-stone-950/75 text-orange-100 shadow-3d-inset backdrop-blur-lg'>
    <p class='max-md:hidden absolute top-2 left-2 text-stone-700 text-sm  opacity-0 group-hover:opacity-100 transition'>
      Disaster Rescue &bull; Skills Canada 2026<br>
      <a class='hover:text-stone-500' href='https://daygineer.com' target='_blank'>Built By Angelo 🫰🏿</a>
    </p>
    <a class='max-md:hidden absolute bottom-2 left-2 text-stone-700 hover:text-stone-500 opacity-0 group-hover:opacity-100 transition' href='https://github.com/daygelo/disaster-rescue' target='_blank'>
      <GitHubIcon class='size-6'/>
    </a>
    <p class='text-stone-700 text-xl sm:text-3xl font-extrabold tracking-tight uppercase'>Total</p>
    <p><span class='inline-block w-24 sm:w-35 text-right text-5xl sm:text-7xl font-display text-white text-shadow-[1px_2px] text-shadow-amber-500 translate-y-1'><NumberFlow value={totalPoints}/></span> / 100</p>
    <div class='absolute top-4 right-4 flex flex-col items-end gap-2 opacity-0 group-hover:opacity-100 transition'>
      <button class='px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-red-500 shadow-sm shadow-black/50' onclick={resetState}>Reset to 0</button>
      <button class='px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 shadow-sm shadow-black/50' onclick={fillState}>Fill to 100</button>
    </div>
  </header>
  <div class='flex flex-wrap justify-center gap-x-16 gap-y-10 md:px-8'>
    <div class='space-y-10'>
      <LobbySection points={lobbyPoints}/>
      <DebrisSection points={debrisPoints}/>
    </div>
    <div class='space-y-10'>
      <ECUSection points={ecuPoints}/>
      <AutoSection points={autonomousPoints}/>
    </div>
  </div>
</main>
