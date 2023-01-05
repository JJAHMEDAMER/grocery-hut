// React 
import { useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx"
import { TbEdit, TbTrashX } from "react-icons/tb"


//comp
import { AddItemBar } from "../";

// Styles
import styles from "./List.module.css";

export const List = ({
  appList,
  onClickDelete,
  editHandler,
}) => {
  let editValue
  const [editIndex, setEditIndex] = useState(-1);

  function editButton(itemIndex) {
    if (itemIndex === editIndex) {
      setEditIndex(-1);
    } else {
      setEditIndex(itemIndex);
    }
  }

  return (
    <div className={styles.item}>
      <h1 className={styles.item_number}># of Items:: {appList.length}</h1>
      <div className={styles.card}>
        {appList.map((item, index) => (
          <div className={styles.list_item_card}>
            <div><RxDragHandleDots2 /></div>
            <div key={item.id}>
              <div className={styles.section}>
                <p className={styles.name}>
                  <span className={styles.index}>{index + 1}.</span>
                  {item.title}
                </p>
                <div>
                  <TbEdit
                    className={styles.img}
                    alt="edit"
                    onClick={() => editButton(index)}
                  />
                  <TbTrashX
                    className={styles.img}
                    alt="delete"
                    onClick={() => onClickDelete(item.id)}
                  />
                </div>
              </div>
              {index === editIndex ? (
                <AddItemBar
                  isEdit={true}
                  onClickHandler={() => editHandler(item.id, editValue)}
                  onChangeHandler={(input) => editValue = input}
                />
              ) : null}
              {!(index + 1 === appList.length) && <div className="hr-line"></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};