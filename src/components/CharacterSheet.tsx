import { useState } from "react";
import { rollD20 } from "../utils/roll";

interface Stats {
  hp: number;
  gold: number;
  level: number;
}

export default function CharacterSheet() {
  const [stats, setStats] = useState<Stats>({ hp: 10, gold: 0, level: 1 });
  const [log, setLog] = useState<string[]>([]);

  function handleRoll() {
    const { value, note } = rollD20();
    // Simple rule: if you roll 15+, gain 1 gold
    setStats((s) => ({ ...s, gold: s.gold + (value >= 15 ? 1 : 0) }));
    setLog((arr) => [note, ...arr.slice(0, 4)]); // keep last 5 lines
  }

  return (
    <section style={card}>
      <h2 style={title}>Character Sheet</h2>

      <ul style={list}>
        {Object.entries(stats).map(([k, v]) => (
          <li key={k} style={row}>
            <span>{k.toUpperCase()}</span>
            <span>{v}</span>
          </li>
        ))}
      </ul>

      <button style={btn} onClick={handleRoll}>
        Roll d20
      </button>

      <pre style={logBox}>
        {log.length === 0 ? "💤 No rolls yet" : log.join("\n")}
      </pre>
    </section>
  );
}

/* ---- tiny inline styles ---- */
const card = {
  padding: "1rem",
  maxWidth: "260px",
  border: "1px solid #5553",
  borderRadius: "12px",
  background: "#222a",
  color: "white",
  lineHeight: 1.4,
} as const;

const title = { margin: "0 0 .5rem", fontSize: "1.25rem" } as const;
const list = { listStyle: "none", padding: 0, margin: 0 } as const;
const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: ".25rem",
} as const;

const btn = {
  width: "100%",
  marginTop: ".75rem",
  padding: ".4rem",
  borderRadius: "6px",
  border: "1px solid #888",
  background: "#444",
  color: "#fff",
  cursor: "pointer",
} as const;

const logBox = {
  marginTop: ".75rem",
  background: "#1116",
  padding: ".4rem",
  minHeight: "3.2rem",
  whiteSpace: "pre-wrap",
  fontSize: ".85rem",
} as const;
