import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.styles.css";
// import TextField from "@mui/material/TextField";
// import { TextFields } from "@mui/icons-material";

const Form = () => {
  const [title, setTitle] = useState("My Todo-s");
  const [editTitle, setEditTitle] = useState(false);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleEditTitle = () => {
    setEditTitle(!editTitle);
  };

  /* TODO */
  // finish the double click outside of the input and update the title change

  const handleOutsideClick = () => {
    editTitle && setEditTitle(false);
  };

  return (
    <section onDoubleClick={handleOutsideClick} className="vh-100">
      <div style={{ border: "solid red 5px" }} className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card" id="list1">
              <div
                className="card"
                id="list1"
                style={{ borderRadius: ".75rem", backgroundColor: " #eff1f2" }}
              >
                <div className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                  {editTitle ? (
                    <div
                      onDoubleClick={handleEditTitle}
                      // className="h1 text-center mt-3 mb-4 pb-3 text-primary"
                    >
                      <form
                        autoComplete="off"
                        noValidate
                        onSubmit={handleEditTitle}
                        className="h1 text-center mt-3 mb-4 pb-3 text-primary"
                      >
                        <input
                          type="text"
                          defaultValue={title}
                          onChange={handleChangeTitle}
                        />

                        <button onClick={handleEditTitle}>OK</button>
                      </form>
                    </div>
                  ) : (
                    <div onClick={handleEditTitle}>
                      {title}
                      <BsPencilSquare type="button" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
