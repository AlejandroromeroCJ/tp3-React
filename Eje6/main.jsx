const { useState } = React;

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [color, setColor] = useState("");

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    if (!p || !a) return;

    const r = p / (a * a);
    setImc(r.toFixed(2));

    if (r < 18.5) {
      setMensaje("Nivel bajo");
      setColor("yellow");
    } else if (r <= 24.9) {
      setMensaje("Nivel normal");
      setColor("green");
    } else if (r <= 29.9) {
      setMensaje("Sobrepeso");
      setColor("orange");
    } else {
      setMensaje("Obesidad");
      setColor("red");
    }
  };

  return (
    <div>
      <h2>Calculadora IMC</h2>
      <input
        type="number"
        placeholder="Peso"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <br />
      <button onClick={calcularIMC}>Calcular</button>
      <br />
      {imc && (
        <div>
          <p>IMC: {imc}</p>
          <p style={{ color }}>{mensaje}</p>
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
