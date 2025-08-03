/** roll(6) => 1‒6, roll(20) => 1‒20 */
export function roll(die: number): number {
  return Math.floor(Math.random() * die) + 1;
}
