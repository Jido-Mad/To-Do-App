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
    <div className="flex flex-col items-center p-4 gap-8">
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
          placeholder="Type Here..."
          className="w-70 h-10 p-2  rounded-md outline-none focus-within:shadow-md bg-white"
        />
      </div>
      <button
        onClick={handleAddBtn}
        className="text-white font-roboto-bold bg-[#693F26] w-70 h-10 rounded-md shadow-md hover:bg-[#976f47] cursor-pointer transition-all ease-in-out"
      >
        Add to list
      </button>
    </div>
  );
}

export default AddSection;
