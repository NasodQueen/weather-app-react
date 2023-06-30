import React from "react";

export default function Notice(props) {
  const noticeMapping = {
    "01d": "Make sure to wear sunscreen today!",
    "01n": "Perfect weather for stargazing!",
    "02d": "Make sure to bring your own sunshine today!",
    "02n": "You might spot the moon through the clouds!",
    "03d": "Make sure to bring your own sunshine today!",
    "03n": "You might spot the moon through the clouds!",
    "04d": "Make sure to bring your own sunshine today!",
    "04n": "You might spot the moon through the clouds!",
    "09d": "Make sure to bring an umbrella!",
    "09n": "Make sure to bring an umbrella!",
    "10d": "Make sure to bring an umbrella!",
    "10n": "Make sure to bring an umbrella!",
    "11d": "Make sure to bring an umbrella!",
    "11n": "Make sure to bring an umbrella!",
    "13d": "Make sure to bundle up and watch your step!",
    "13n": "Make sure to bundle up and watch your step!",
    "50d": "Make sure to bring your own sunshine today!",
    "50n": "Make sure to bring your own sunshine today!",
  };
  return (
    <div className="HeaderNotice">
      <h3 className="HeaderNoticeAdvice">{noticeMapping[props.code]}</h3>
    </div>
  );
}
