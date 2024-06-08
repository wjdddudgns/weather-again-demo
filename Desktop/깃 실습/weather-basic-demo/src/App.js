import styled from 'styled-components';
import React, { useState } from "react";

function App() {
  const [location, setLocation] = useState('');
  //const API_KEY = "7ff916a8d02ddfc4b1d7ad2e5745b949";
  //const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  console.log(location)
  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios.get(URL);
        console.log(data);
        if (data) {
          setWeather(data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  return ( 
  <Container>
    <div>
      <input placeholder='도시를 입력하세요.' value={location} onChange={(e) => setLocation(e.target.value)}  />
    </div>
  </Container>
  );
}

//
// 

const Container = styled.div `
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  
  justify-content: center;
  align-items: center;
`;


export default App;