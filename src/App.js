/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { getRandomColor, fetchData } from './utils';
import {
  Button,
  QuoteBox,
  Container,
} from './components';

function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const [color, setColor] = useState(null);

  const populateData = async () => {
    const result = await fetchData();
    const randomColor = getRandomColor();
    setColor(randomColor);
    setQuote(result.content);
    setAuthor(result.author);
  };

  useEffect(() => {
    populateData();
  }, []);

  return (
    <Container color={color}>
      <QuoteBox>
        <p id="quote" >{quote}</p>
        <p id="author" >{`- ${author || 'Anonymous'}`}</p>
        <Button onClick={populateData} color={color} text='Get Random Quote' />
      </QuoteBox>
    </Container >
  );
}

export default App;
