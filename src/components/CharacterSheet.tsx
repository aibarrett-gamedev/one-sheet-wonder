import { useState } from "react";

interface Stats {
  hp: number;
  gold: number;
  level: number;
}

export default function CharacterSheet() {
  const [stats, setStats] = useState<Stats>({
    hp: 10,
    gold: 0,
    level: 1,
  });

  return (
    <section style={card}>
      <h2 style={title}>Character Sheet</h2>
      <ul style={list}>
        {Object.entries(stats).map(([key, value]) => (
          <li key={key} style={row}>
            <span>{key.toUpperCase()}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---- tiny inline styles so we don’t need Tailwind yet ---- */
const card = {
  padding: "1rem",
  maxWidth: "260px",
  border: "1px solid #5553",
  borderRadius: "12px",
  background: "#222a",
  color: "white",
} as const;

const title = { margin: "0 0 .5rem", fontSize: "1.25rem" } as const;
const list = { listStyle: "none", padding: 0, margin: 0 } as const;
const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: ".25rem",
} as const;
