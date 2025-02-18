import React from 'react';
import { useState, useEffect } from 'react';
import '../style/main.scss'

const Wapi = () => {
    const [weather, setWeather] = useState(null);
    const [dateTime, setDateTime] = useState(new Date());
    const API_Key = 'f345d9fa15f0951d6b2f408db3fb8d00'; // API 키 문자열로 정의
    const city = 'seoul';
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`; // 'metric'으로 수정

    useEffect(() => {
    fetch(weatherAPI)
    .then(response => response.json())
    .then(data => setWeather(data))
    .catch(error => console.error('오류발생', error)); 

    const timer = setInterval(() => {
        setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []); // 빈 배열로 종속성 제거

return (
    <div className='Wapi'>
    <div className='cityBox'>
        <div>Seoul</div>
    </div>
    <p>오늘의 날짜 : {dateTime.toLocaleDateString()}</p>
    {weather ? (
        <div>
            <div>시간: {dateTime.getHours() +':'+dateTime.getMinutes()}</div>
            <div>온도: {weather.main.temp}°C</div> {/* API에서 가져온 데이터는 weather.main.temp */}
        </div>
        ) : (<p>날씨 데이터를 불러오는 중...</p>)
    }
    </div>
);
}

export default Wapi;