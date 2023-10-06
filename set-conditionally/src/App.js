import "./App.css";

function App() {
  const isTrue = true;
  const deger = isTrue ? "evet doğru" : "hayır yanlış";
  {
    /* şimdi üst satırdaki ifade eğer isTrue doğru ise evet doğru stringini alacak,
    yanlışsa da hayır yanlış  stringini alacak*/
  }
  return <div className="App">{`yanıtınız: ${deger}`}</div>;
}

export default App;
