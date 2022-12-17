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
  const [editIndex, setEditIndex] = React.useState(-1);

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
    const res = await fetch('http://127.0.0.1:8000/api/grocery/', {
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

  function editButton(itemIndex) {
    if (itemIndex === editIndex) {
      setEditIndex(-1);
    } else {
      setEditIndex(itemIndex);
    }
  }

  function deleteButton(itemIndex) {
    let newList = appList.filter((item, index) => index !== itemIndex);
    setAppList(newList);
  }

  return (
    <div className="app">
      <h1 className="app--title">Grocery Hub</h1>
      <ControllerBar onClickHandler={add} onChangeHandler={(input) => inputValue = input} />
      {!(appList.length === 0) ? (
        <Card
          appList={appList}
          onClickEdit={editButton}
          onClickDelete={deleteButton}
          editIndex={editIndex}
          setAppList={setAppList}
        />
      ) : null}
    </div>
  );
}

export default App;

