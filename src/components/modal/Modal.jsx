import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

import styles from "./modal.module.css";

const Modal = ({ setData, setShowModal }) => {
  const [inputData, setInputData] = useState({
    id: uuidv4(),
    title: "",
    body: "",
    createdAt: new Date().toString(),
    archived: false,
  });

  const [error, setError] = useState({ title: "", body: "" });

  const onChangeChecked = () => {
    setInputData((prev) => ({
      ...prev,
      archived: !inputData.archived,
    }));
  };

  const validateData = () => {
    const newErrors = {};

    if (inputData.title === "") {
      newErrors.title = "Please input the title";
    }
    if (inputData.body === "") {
      newErrors.body = "Please input the description";
    }

    return newErrors;
  };

  const onSaveNote = () => {
    const validationErrors = validateData();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
    setData((prev) => [...prev, inputData]);
    setShowModal(false);
    toast.success("Note saved!", { autoClose: 2000 });
  };

  console.log(inputData);
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={() => setShowModal(false)}>
          &times;
        </span>
        {/* {children} */}
        <h1 className={styles.titleModal}>Add new note</h1>

        <form action="" className={styles.form}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter your title"
            className={styles.inputForm}
            onChange={(e) =>
              setInputData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          {error?.title && (
            <p className="text-sm text-red-500">{error?.title}</p>
          )}
          <label>Description</label>
          <textarea
            name="description"
            cols="20"
            rows="5"
            className={styles.inputTextArea}
            placeholder="Enter your description"
            onChange={(e) =>
              setInputData((prev) => ({ ...prev, body: e.target.value }))
            }
          ></textarea>
          {error?.body && <p className="text-sm text-red-500">{error?.body}</p>}
          <div className={styles.checkBox}>
            <input
              type="checkbox"
              checked={inputData.archived}
              onChange={() => onChangeChecked()}
            />
            <span onClick={() => onChangeChecked()}>Note archived</span>
          </div>
        </form>

        <div className={styles.modalBtn}>
          <button onClick={() => setShowModal(false)}>Cancel</button>
          <button onClick={() => onSaveNote()}>Save</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setShowModal: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};

export default Modal;
