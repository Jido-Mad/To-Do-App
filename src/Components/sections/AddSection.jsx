import Button from "../Button.jsx";
import { useState } from "react";

function AddSection({ displayTasks }) {
  const [inputValue, setInputValue] = useState("");

  /* Stores the InputValue */
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  /* Handles the Add Button */
  function handleAddBtn(e) {
    if (e.type === "keydown" && e.key !== "Enter") return;
    if (!inputValue) {
      alert("Your Task can't be Empty");
    } else {
      displayTasks(inputValue);
      setInputValue("");
    }
  }

  return (
    <div className="flex flex-col items-center justify-between bg-[#ECD8B1] p-4 gap-8 md:w-[50%] md:h-150">
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <h2 className="font-roboto-bold text-lg text-[#3B2415] opacity-50">
            Add a Todo:
          </h2>
          <label htmlFor="todo-input" className="sr-only">
            Enter a new task
          </label>
          <input
            onKeyDown={handleAddBtn}
            value={inputValue}
            onChange={handleChange}
            id="todo-input"
            type="text"
            className="w-70 h-10 p-2 font-roboto text-md  rounded-md outline-none focus-within:shadow-md bg-white"
          />
        </div>
        <Button label="Add to list" onClick={handleAddBtn} />
      </div>

      <div className="flex flex-col gap-2  ">
        <Button label="Log In" />
        <Button label="Sign Up" />
      </div>
    </div>
  );
}

export default AddSection;
