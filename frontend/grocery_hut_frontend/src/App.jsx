import React from "react";
import './App.css'

// Comp
import Card from "./comp/card";
import ControllerBar from "./comp/controller";


function getLocalStorage() {
  const data = localStorage.getItem("appList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

function App() {
  const [appList, setAppList] = React.useState(getLocalStorage);
  const [editIndex, setEditIndex] = React.useState(-1);

  React.useEffect(() => {
    localStorage.setItem("appList", JSON.stringify(appList));
  }, [appList]);

  function add() {
    setAppList([...appList, inputValue]);
  }

  let inputValue;
  function getInput(changedValue) {
    inputValue = changedValue;
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
      <h1 className="app--title">Grocery List</h1>
      <ControllerBar onClickHandler={add} onChangeHandler={getInput} />
      {!(appList.length === 0) && (
        <Card
          appList={appList}
          onClickEdit={editButton}
          onClickDelete={deleteButton}
          editIndex={editIndex}
          setAppList={setAppList}
        />
      )}
    </div>
  );
}

export default App;

