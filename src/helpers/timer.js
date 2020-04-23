export const formatSeconds = totalSeconds => {
  const hours = formatNumber(Math.floor(totalSeconds / 3600));
  totalSeconds %= 3600;
  const minutes = formatNumber(Math.floor(totalSeconds / 60));
  const seconds = formatNumber(totalSeconds % 60);

  return `${hours}:${minutes}:${seconds}`;
}

const formatNumber = (number) => {
  return number > 9 ? "" + number: "0" + number;
}
