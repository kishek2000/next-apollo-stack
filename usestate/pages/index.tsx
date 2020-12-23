import React, { useState } from "react";
import { Container } from "../state";

// Renderprops

// Make a component for the main view

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <Container>
      {({ cityWeather, getCityWeather }) => {
        return (
          <div>
            <input
              onChange={(e) => {
                setQuery(e.target.value);
                console.log("query", query);
              }}
            />
            <div onClick={() => getCityWeather(query)}>submit</div>
            {JSON.stringify(cityWeather)}
          </div>
        );
      }}
    </Container>
  );
}
