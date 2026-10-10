/** Junta clases condicionales. Sin deps: el design system no usa variantes conflictivas. */
export function cn(...clases: Array<string | false | null | undefined>): string {
  return clases.filter(Boolean).join(" ");
}
