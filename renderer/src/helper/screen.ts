export function screenFit(val: number) {
  return `${(screen.width / 1920) * val}px`;
}
