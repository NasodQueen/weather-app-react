export default function SunriseSunset(props) {
  let timeUnix = props.time;
  let timezone = props.timezone;
  let timeTime = new Date((timeUnix + timezone) * 1000);
  let timeHours = timeTime.getUTCHours();
  if (timeHours < 10) {
    timeHours = `0${timeHours}`;
  }
  let timeMinutes = timeTime.getUTCMinutes();
  if (timeMinutes < 10) {
    timeMinutes = `0${timeMinutes}`;
  }
  return `${timeHours}:${timeMinutes}`;
}
