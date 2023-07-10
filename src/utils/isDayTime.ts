export function isDayTime() {
  const hours = new Date().getHours();
  return hours > 6 && hours < 18;
}