import React from "react";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Note(props) {
  function clickOnDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.contact}</p>
      <Zoom in={true}>
        <Fab onClick={clickOnDelete}>
          <DeleteForeverIcon />
        </Fab>
      </Zoom>
    </div>
  );
}
export default Note;
