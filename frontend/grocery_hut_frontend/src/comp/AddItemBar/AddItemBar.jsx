// Styles
import addStyles from "./AddItemBar.module.css"
import editStyles from "./editItemBar.module.css"

export const AddItemBar = ({ onClickHandler, onChangeHandler, isEdit }) => {
    const styles = isEdit ? editStyles : addStyles;
    return (
        <div className={styles.control}>
            <div className="flex">
                <h1 className={styles.text}>{isEdit ? "Edit" : "Add To List"}</h1>
                <input
                    className={styles.input}
                    placeholder="eggs"
                    onChange={(change) => onChangeHandler(change.target.value)}
                />
            </div>
            <button className={styles.button} onClick={onClickHandler}>
                {isEdit ? "Update" : "Add"}
            </button>
        </div>
    )
}; 