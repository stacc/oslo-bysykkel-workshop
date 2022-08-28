import React from "react";
import styles from "../../styles/Tasks.module.css";


const DropDown = ({choices = [], selectName,  label}) => {
    return (
        <div className={styles.dropDown}>
            <label>{label}</label>
            <select name={selectName} id={selectName} >
                {choices.map(choice => (
                    <option key={choice.label} value={choice.value}>{choice.label}</option>
                ))}
            </select>
        </div>
    )
}
export default DropDown