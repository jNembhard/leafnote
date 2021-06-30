import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import axios from "axios";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [inputText, setInputText] = useState({ title: "", content: "" });

  useEffect(() => {
    axios
      .get("routes/home")
      .then((inputText) => setInputText(inputText))
      .catch((err) => console.log(err));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setInputText((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    if (inputText.title !== "" || inputText.content !== "") {
      props.onAdd(inputText);

      axios
        .post("/routes/home", {
          title: inputText.title,
          content: inputText.content,
        })
        .then(function () {
          console.log("Information was sent from the client!");
        })
        .catch(function () {
          console.log("Information was not sent from the client");
        });
    }

    setInputText({ title: "", content: "" });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={inputText.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={inputText.content}
          placeholder="Write a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
