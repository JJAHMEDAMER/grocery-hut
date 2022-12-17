const EditSection = ({ onClickHandler, onChangeHandler }) => (
  <div className="edit">
    <div className="flex">
      <h1 className="edit--text">Edit item:</h1>
      <input
        className="edit--input"
        placeholder="eggs"
        onChange={(change) => onChangeHandler(change.target.value)}
      ></input>
    </div>
    <button className="edit--button" onClick={onClickHandler}>
      Edit
    </button>
  </div>
);

export default EditSection;
