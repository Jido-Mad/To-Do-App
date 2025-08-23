import { AiFillEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

function Task({ name, taskDel }) {
  // State & refs
  const [taskName, setTaskName] = useState(name);
  const [inputValue, setInputValue] = useState(name);
  const [editor, setEditor] = useState(false);
  const inputRef = useRef(null);

  // Classes
  const liClasses =
    "flex items-center  justify-between p-3 border-l-8 border-[#976f47] shadow-md rounded-sm w-full h-15 bg-white hover:brightness-98 transition ease-in-out duration-100 cursor-pointer";

  // Effects
  useEffect(() => {
    if (editor && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editor]);

  //Handlers
  function editTask() {
    setEditor(true);
  }

  /* Confirm Changes Function */
  function confirmChanges() {
    setEditor(false);
    setTaskName(inputValue);
  }

  /* Undo Changes Function */
  function undoChanges() {
    setInputValue(taskName);
    setEditor(false);
  }

  return (
    <>
      {editor ? (
        <li className={liClasses}>
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") return confirmChanges();
              if (e.key === "Escape") return undoChanges();
            }}
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="font-roboto-bold overflow-auto outline-none border border-zinc-300 rounded-md w-40 md:w-50 h-8 p-2"
            type="text"
          />
          <div className="flex gap-x-4 ">
            {/* Confirm Changes Button */}
            <button
              onClick={confirmChanges}
              title="Confirm Changes"
              aria-label="Confirm Changes"
              className="text-[#976f47] text-sm hover:text-[#693F26] cursor-pointer transition-colors ease-in-out"
            >
              Confirm
            </button>
            {/* Undo Changes Button */}
            <button
              onClick={undoChanges}
              title="Undo Changes"
              aria-label="Undo Changes"
              className="text-sm flex items-center justify-center text-white bg-[#976f47] w-12 h-8 rounded-md cursor-pointer hover:bg-[#693F26] transition-colors ease-in-out"
            >
              Undo
            </button>
          </div>
        </li>
      ) : (
        <li className={liClasses} title="Mark as completed">
          <p className="font-roboto-bold overflow-auto w-45 md:w-50 p-2">
            {taskName}z
          </p>
          <div className="flex gap-x-4 ">
            {/* Edit Button */}
            <button
              onClick={editTask}
              title="Edit Task"
              aria-label="Edit Task"
              className="text-[#976f47] text-2xl hover:text-[#693F26] cursor-pointer transition-colors ease-in-out"
            >
              <AiFillEdit />
            </button>
            {/* Remove Button */}
            <button
              onClick={taskDel}
              title="Delete Task"
              aria-label="Delete Task"
              className="flex items-center justify-center text-white bg-[#976f47] w-12 h-8 rounded-md cursor-pointer hover:bg-[#693F26] transition-colors ease-in-out"
            >
              <BsTrashFill />
            </button>
          </div>
        </li>
      )}
    </>
  );
}
export default Task;
