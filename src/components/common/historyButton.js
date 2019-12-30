import React from 'react';
import { useHistory } from "react-router-dom";

function HistoryButton() {

    let history = useHistory();

    return (
        <button className={"button"} onClick={() => { history.push("About") }} >About</button>
      );
}
    
export default HistoryButton;
