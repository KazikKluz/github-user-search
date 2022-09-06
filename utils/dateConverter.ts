const DateConverter = (input: string): string => {
  const mydate = new Date(input);
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ][mydate.getMonth()];
  return `${mydate.getDate()} ${month} ${mydate.getFullYear()}`;
};

export default DateConverter;
