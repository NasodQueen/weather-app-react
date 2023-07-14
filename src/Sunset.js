export default function Sunset(props) {
  let sunsetUnix = props.sunset;
  let timezone = props.timezone;
  let sunsetTime = new Date((sunsetUnix + timezone) * 1000);
  let sunsetHours = sunsetTime.getUTCHours();
  if (sunsetHours < 10) {
    sunsetHours = `0${sunsetHours}`;
  }
  let sunsetMinutes = sunsetTime.getUTCMinutes();
  if (sunsetMinutes < 10) {
    sunsetMinutes = `0${sunsetMinutes}`;
  }
  return `${sunsetHours}:${sunsetMinutes}`;
}
