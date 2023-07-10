import dayjs from "dayjs";

export function getNextDays() {
  const days = [];
  const today = new Date();

  for (let i = 0; i < 5; i++) {
    const date = new Date();

    date.setDate(today.getDate() + (i + 1));

    days.push(dayjs(date).format('DD/MM'));
  }

  return days;
}