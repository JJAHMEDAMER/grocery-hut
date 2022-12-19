// React 
import { useState } from "react";

//comp
import EditSection from "../editSection";

//assets
import trash from "../../assets/trash.png";
import pen from "../../assets/pen.png";

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
    <div className="item">
      <h1 className="item--number"># of Items:: {appList.length}</h1>
      <div className="card">
        {appList.map((item, index) => (
          <div key={item.id}>
            <div className="item--section">
              <p className="item--name">
                <span className="item--index">{index + 1}.</span> {item.title}
              </p>
              <div>
                <img
                  src={pen}
                  className="item--img"
                  alt="edit"
                  onClick={() => editButton(index)}
                />
                <img
                  src={trash}
                  className="item--img"
                  alt="delete"
                  onClick={() => onClickDelete(item.id)}
                />
              </div>
            </div>
            {index === editIndex ? (
              <EditSection
                onClickHandler={() => editHandler(item.id, editValue)}
                onChangeHandler={(input) => editValue = input}
              />
            ) : null}
            {!(index + 1 === appList.length) && <div className="hr-line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};