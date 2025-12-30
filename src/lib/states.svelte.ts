export type LobbyState = {
  isSteveDelivered: boolean;
  whenFlippedSwitch: false | '1st' | '2nd';
}

export const lobbyState: LobbyState = $state({
  isSteveDelivered: false,
  whenFlippedSwitch: false,
});

export type DebrisState = {
  absPipes: number;
  poolNoodles: number;
  woodenBlocks: number;
  wires: number;
  fuses: number;
  circuitBoards: number;
  transformers: number;
}

export const debrisState: DebrisState = $state({
  absPipes: 0,
  poolNoodles: 0,
  woodenBlocks: 0,
  wires: 0,
  fuses: 0,
  circuitBoards: 0,
  transformers: 0,
});

export type ECUPartState = 'broken' | 'empty' | 'replaced';
export type ECUState = {
  newPartsInZone: number;
  fuses: [ECUPartState, ECUPartState, ECUPartState];
  circuitBoards: [ECUPartState, ECUPartState, ECUPartState];
  transformers: [ECUPartState, ECUPartState];
}

export const ecuState: ECUState = $state({
  newPartsInZone: 0,
  fuses: ['broken', 'broken', 'broken'],
  circuitBoards: ['broken', 'broken', 'broken'],
  transformers: ['broken', 'broken'],
});

export type AutonomousState = {
  isAutonomousInZone: boolean;
  supplyItemsDelivered: number;
  supplyItemsOrientated: number;
  workersStanding: number;
  isFanPlaced: boolean;
}

export const autonomousState: AutonomousState = $state({
  isAutonomousInZone: false,
  supplyItemsDelivered: 0,
  supplyItemsOrientated: 0,
  workersStanding: 0,
  isFanPlaced: false,
});