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

const fakeData = [
  {
    id: 1,
    title: "Go to Market",
  },
  {
    id: 2,
    title: "Study",
  },
  {
    id: 3,
    title: "Sammy's books",
  },
  {
    id: 4,
    title: "Article",
  },
];

function App() {
  const [appList, setAppList] = React.useState(fakeData);
  const [editIndex, setEditIndex] = React.useState(-1);

  // console.log(getLocalStorage())
  // React.useEffect(() => {
  //   localStorage.setItem("appList", JSON.stringify(appList));
  // }, [appList]);
  
  let inputValue;

  function add() {
    const id = appList[appList.length - 1].id + 1
    const newItem = { id: id, title: inputValue }
    setAppList([...appList, newItem]);
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

