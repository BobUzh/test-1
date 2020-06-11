import React from "react";
import "./styles.css";
import Header from "./components/header";
import List from "./components/list";

const list = [
  { id: 1, text: "1 Cras justo odio", ul: [] },
  {
    id: 2,
    text: "2 Dapibus ac facilisis in",
    ul: [
      { id: 4, text: "4 Sed ut perspiciatis unde omnis", ul: [] },
      { id: 5, text: "5 Quis autem vel eum iure", ul: [] }
    ]
  },
  { id: 3, text: "3 Morbi leo risus", ul: [] }
];

export default function App() {
  return (
    <div className="App container">
      <Header />
      <List data={list} />
    </div>
  );
}
