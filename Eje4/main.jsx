const { useState } = React;

function App() {
  const [habilitado, setHabilitado] = useState("izquierdo");

  const handleIzquierdo = () => setHabilitado("derecho");
  const handleDerecho = () => setHabilitado("izquierdo");

  return (
    <div>
      <h1>Botoncitos</h1>
      <button onClick={handleIzquierdo} disabled={habilitado !== "izquierdo"}>
        Izquierdo
      </button>
      <button onClick={handleDerecho} disabled={habilitado !== "derecho"}>
        Derecho
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);