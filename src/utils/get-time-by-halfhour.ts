export const getTimeByHalfHour = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const minutesRounded = Math.round(minutes / 30) * 30;

  return new Date(date.setHours(hours, minutesRounded, 0, 0)).getTime();
};
