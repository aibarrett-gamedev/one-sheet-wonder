import CharacterSheet from "./components/CharacterSheet";

function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "linear-gradient(135deg,#1e1e30,#303068)",
      }}
    >
      <CharacterSheet />
    </main>
  );
}

export default App;
