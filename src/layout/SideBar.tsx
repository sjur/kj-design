import React from "react";

const SideBar = () => {
  return (
    <ul>
      <li>
        <a href="/">Hjem</a>
      </li>
      <li>
        <a href="/palette">Farger</a>
      </li>
      <li>
        <a href="/typography">Tekst og fonter</a>
      </li>
      <li>
        <a href="/button">Knapper</a>
      </li>
      <li>
        <a href="/tabnavigation">Faner</a>
      </li>
      <li>
        <a href="/icons">Ikoner</a>
      </li>
      <li>
        <a href="/patientcard">Kort </a>
      </li>
      <li>
        <a href="/table">Tabell</a>
      </li>
      <li>
        <a href="/patientrecord">Forside pasient</a>
      </li>
    </ul>
  );
};

export default SideBar;
