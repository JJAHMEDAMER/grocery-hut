// React 
import { useState, useRef } from "react";
import { RxDragHandleDots2 } from "react-icons/rx"
import { TbEdit, TbTrashX } from "react-icons/tb"

//comp & styles
import { AddItemBar } from "../";
import styles from "./List.module.css";

//utils
import { updateListOrder } from "../../utils";

export const List = ({
  appList,
  setAppList,
  onClickDelete,
  editHandler,  
}) => {
  let editValue
  const [editIndex, setEditIndex] = useState(-1);
  const [hoverIndex, setHoverIndex] = useState(-1);

  const itemDrag = useRef()
  const itemDragOver = useRef()

  function editButton(itemIndex) {
    if (itemIndex === editIndex) {
      setEditIndex(-1);
    } else {
      setEditIndex(itemIndex);
    }
  }

  Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
    return this;
  };

  function startDrag(e, index) {
    // console.log({ startDrag: index })
    itemDrag.current = index
  }

  function enterDrag(e, index) {
    // console.log({ enterDrag: index })
    itemDragOver.current = index
    setHoverIndex(index)
  }

  function endDrag(e, index) {
    // console.log({ endDrag: index })
    if (itemDrag.current != itemDragOver.current) {
      // console.log({ itemDrag: itemDrag.current, itemDragOver: itemDragOver.current })
      let newList = [...appList.move(itemDrag.current, itemDragOver.current)]
      setAppList(newList)

      const tempId1 = appList[itemDrag.current]['title']
      const tempId2 = appList[itemDragOver.current]['title']

      updateListOrder(appList[itemDragOver.current]['id'], tempId1)
      updateListOrder(appList[itemDrag.current]['id'], tempId2)
    }
    setHoverIndex(-1)
  }

  return (
    <div className={styles.list}>
      <h1 className={styles.item_number}># of Items:: {appList.length}</h1>
      <div className={styles.container}>
        {appList.map((item, index) => (
          <div key={item.id} >
            <div className={styles.card}
              onDragEnter={e => enterDrag(e, index)}
            >
              <div className={styles.drag}
                draggable
                onDragStart={(e) => startDrag(e, index)}
                onDragEnd={e => endDrag(e, index)}
              >
                <RxDragHandleDots2 />
              </div>
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
            </div>
            <div className={(index === hoverIndex) ? styles.opacity : styles.drag_line}></div>
            {!(index + 1 === appList.length) ? <div className={styles.hr_line}></div> : null}
          </div>
        ))}
      </div>
    </div>
  );
};