import React from "react";
import styles from "../../styles/Tasks.module.css";


const Submit = ({label, rest}) => {
    return (
        <input type={"submit"} value={label} className={styles.button}  {...rest}/>
    )
}
export default Submit
