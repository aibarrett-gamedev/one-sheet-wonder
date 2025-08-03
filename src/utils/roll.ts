// src/utils/roll.ts
export function roll(die: number): number {
  return Math.floor(Math.random() * die) + 1;
}

export function rollD20(): { value: number; note: string } {
  const value = roll(20);
  return { value, note: `🎲 Rolled d20 → ${value}` };
}
