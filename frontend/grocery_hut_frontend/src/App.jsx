import React from "react";
import './App.css'

// Comp
import Card from "./comp/card";
import ControllerBar from "./comp/controller";


// function getLocalStorage() {
//   const data = localStorage.getItem("appList");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// }

function App() {
  const [appList, setAppList] = React.useState([]);

  async function getData() {
    const res = await fetch('http://127.0.0.1:8000/api/grocery/')
    const resJson = await res.json()
    setAppList(resJson)
    console.log(resJson)
  }

  React.useEffect(() => {
    getData()
  }, []);

  let inputValue;

  async function add() {
    await fetch('http://127.0.0.1:8000/api/grocery/', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: inputValue
      })
    })
    getData();
  }

  async function edit(id, editValue) {
    await fetch(`http://127.0.0.1:8000/api/grocery/${id}/`, {
      method: 'Put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: editValue
      })
    })
    getData();
  }

  async function deleteButton(id) {
    await fetch(`http://127.0.0.1:8000/api/grocery/${id}/`, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    getData();
  }

  return (
    <div className="app">
      <h1 className="app--title">Grocery Hub</h1>
      <ControllerBar onClickHandler={add} onChangeHandler={(input) => inputValue = input} />
      {!(appList.length === 0) ? (
        <Card
          appList={appList}
          onClickDelete={deleteButton}
          editHandler={edit}
          setAppList={setAppList}
        />
      ) : null}
    </div>
  );
}

export default App;

