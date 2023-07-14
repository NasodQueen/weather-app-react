export default function Sunrise(props) {
  let sunriseUnix = props.sunrise;
  let timezone = props.timezone;
  let sunriseTime = new Date((sunriseUnix + timezone) * 1000);
  let sunriseHours = sunriseTime.getUTCHours();
  if (sunriseHours < 10) {
    sunriseHours = `0${sunriseHours}`;
  }
  let sunriseMinutes = sunriseTime.getUTCMinutes();
  if (sunriseMinutes < 10) {
    sunriseMinutes = `0${sunriseMinutes}`;
  }
  console.log(sunriseTime);
  return `${sunriseHours}:${sunriseMinutes}`;
}
