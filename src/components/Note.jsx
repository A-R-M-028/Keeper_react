import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    // it is taking title, content, id, onDelete as
    //props frm parent component
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {/* it defines handle click that calls onDelete */}
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
