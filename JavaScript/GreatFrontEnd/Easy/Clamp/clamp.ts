export default function clamp(value: number, lower: number, upper:number) {
  Math.min(upper, Math.max(value, lower))
}