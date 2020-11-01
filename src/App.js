import React, { useState, useEffect } from "react";
import PeopleService from "./services/PeopleService";
import Personagem from "./component/PersonagemComponent";
import "./style.css";

export default function App() {
  const [lista, setListaReal] = useState([]);
  const [personagemUrlSelected, setPersonagemSelected] = useState("");

  useEffect(() => {
    fillList();
  }, []);

  function setLista(newLista) {
    if (newLista.length > 0) setPersonagemSelected(newLista[0].url);
    setListaReal(newLista);
  }

  async function fillList() {

    //mock para fugir do limite de requisição na plataforma
    const dados = [{ "eye_color": "Blue", "name": "Luke Skywalker", "url": "https://swapi.dev/api/people/1/", },{ "eye_color": "Blue", "name": "Luke Skywalker", "url": "https://swapi.dev/api/people/2/", },{ "eye_color": "Blue", "name": "Luke Skywalker", "url": "https://swapi.dev/api/people/4/", },{ "eye_color": "Blue", "name": "Luke Skywalker", "url": "https://swapi.dev/api/people/3/", },{ "eye_color": "Blue", "name": "Luke Skywalker", "url": "https://swapi.dev/api/people/5/", },{ "eye_color": "Blue", "name": "Luke Skywalker", "url": "https://swapi.dev/api/people/10/", },{ "eye_color": "Blue", "name": "Luke Skywalker", "url": "https://swapi.dev/api/people/6/", },{ "eye_color": "Blue", "name": "Luke Skywalker", "url": "https://swapi.dev/api/people/9/", },{ "eye_color": "Blue", "name": "Luke Skywalker", "url": "https://swapi.dev/api/people/7/", },{ "eye_color": "Blue", "name": "Luke Skywalker", "url": "https://swapi.dev/api/people/8/", }]

    setLista(dados)

    //const req = await PeopleService.getPeople();
    //if (!req.ok) return; //fazer tratamento para erro de requisição??
    //const res = await req.json();
    //const tempList = res.results
    //  .splice(0, 10)
    //  .sort((a, b) => ("" + a.name).localeCompare(b.name));
    //setLista(tempList);
  }

  function deleteMe(elm) {
    return () => {
      setLista(lista.filter(e => e != elm));
    };
  }

  function deleteFromComboBox() {
    setLista(lista.filter(e => e.url != personagemUrlSelected));
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      <select
        value={personagemUrlSelected}
        onChange={evt => setPersonagemSelected(evt.target.value)}
      >
        {lista.map((e, i) => (
          <option key={i} value={e.url}>{e.name}</option>
        ))}
      </select>
      <button onClick={deleteFromComboBox}>Delete This</button>

      <ul class="lista">
        {lista.map((e, i) => (
          <Personagem key={i} cor={e.eye_color} nome={e.name} click={deleteMe(e)} />
        ))}
      </ul>
    </div>
  );
}
