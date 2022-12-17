import React from "react";

//assets
import trash from "../assets/trash.png";
import pen from "../assets/pen.png";

//comp
import EditSection from "./editSection";

const Card = ({
  appList,
  onClickDelete,
  onClickEdit,
  editHandler,
}) => {
  let editValue
  const [editIndex, setEditIndex] = React.useState(-1);

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
                onClickHandler={() => editHandler(index, editValue)}
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

export default Card;
