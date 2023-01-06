import { useState, useEffect } from "react";
import styles from './home.module.css'

// Comp
import { AddItemBar, List, Navbar } from "../../comp";

//utils
import { get, post, put, delete_rest } from "../../utils"


// function getLocalStorage() {
//   const data = localStorage.getItem("appList");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// }

function App() {
  let inputValue;

  const [appList, setAppList] = useState([]);

  async function getData() {
    const resJson = await get()
    setAppList(resJson)
  }

  useEffect(() => {
    getData()
  }, []);


  async function add(inputValue) {
    await post(inputValue)
    getData();
  }

  async function edit(id, editValue) {
    await put(id, editValue)
    getData();
  }

  async function deleteButton(id) {
    await delete_rest(id)
    getData();
  }

  return (
    <div>
      <Navbar />
      <div className={styles.app_container}>
        <div className={styles.app}>
          <AddItemBar onClickHandler={() => add(inputValue)} onChangeHandler={(input) => inputValue = input} />
          {!(appList.length === 0) ? (
            <List
              appList={appList}
              setAppList={setAppList}
              onClickDelete={deleteButton}
              editHandler={edit}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;

