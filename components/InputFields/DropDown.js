import React from "react";
import styles from "../../styles/Tasks.module.css";

/**
 * A dropdown-component that takes choices (the options in the dropdown), name for the component and
 * a label for displaying next to the dropdown.
 * @param choices A list of stations
 * @param name The name for the component, you use this name for accessing the values later
 * @param label The label is displayed on the page
 * @returns {JSX.Element}
 */
const DropDown = ({choices = [], name,  label}) => {
    return (
        <div className={styles.dropDown}>
            <label>{label}</label>
            <select name={name} id={name} >
                {choices.map(choice => (
                    <option key={choice.label} value={choice.value}>{choice.label}</option>
                ))}
            </select>
        </div>
    )
}
export default DropDown