const { useState } = React;

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operacion, setOperacion] = useState("suma");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res = "";

    if (operacion === "suma") res = a + b;
    else if (operacion === "resta") res = a - b;
    else if (operacion === "multiplicacion") res = a * b;

    setResultado(res);
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <input
        type="number"
        placeholder="Primer número"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Segundo número"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>
      <br />
      <button onClick={calcular} disabled={operacion === "division"}>
        Calcular
      </button>
      <br />
      {resultado !== null && (
        <p>Resultado: {resultado}</p>
      )}
      {operacion === "division" && (
        <p style={{ color: "red" }}>No se permite realizar divisiones.</p>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
