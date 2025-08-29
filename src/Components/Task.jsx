// Task.js
import { AiFillEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

function Task({ task, taskDel, toggleComplete }) {
  const { id, name, completed } = task;

  const [taskName, setTaskName] = useState(name);
  const [inputValue, setInputValue] = useState(name);
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef(null);

  const liClasses =
    "flex items-center justify-between text-sm md:text-md p-3 border-l-8 border-[#976f47] shadow-md rounded-sm w-full min-h-15 bg-white hover:brightness-98 transition ease-in-out duration-100 cursor-pointer";
  const completedTaskClasses =
    "flex items-center justify-between text-sm md:text-md  text-white line-through p-3 shadow-md rounded-sm w-full h-15 bg-[#976f47]";

  useEffect(() => {
    if (editMode && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editMode]);

  function editTask() {
    setEditMode(true);
  }

  function confirmChanges() {
    setEditMode(false);
    setTaskName(inputValue);
  }

  function undoChanges() {
    setInputValue(taskName);
    setEditMode(false);
  }

  return (
    <>
      {editMode ? (
        <li className={liClasses}>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") confirmChanges();
              if (e.key === "Escape") undoChanges();
            }}
            className="font-roboto-bold  outline-none border border-zinc-300 rounded-md w-40 md:w-50 h-8 p-2"
            type="text"
          />
          <div className="flex gap-x-4">
            <button
              onClick={confirmChanges}
              title="Confirm Changes"
              aria-label="Confirm Changes"
              className="text-[#976f47] text-sm hover:text-[#693F26] cursor-pointer transition-colors ease-in-out"
            >
              Confirm
            </button>
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
        <li
          className={completed ? completedTaskClasses : liClasses}
          onClick={() => toggleComplete(id)}
        >
          <p
            title={completed ? "" : "Mark as completed"}
            className="font-roboto-bold overflow-auto w-45 md:w-50"
          >
            {taskName}
          </p>
          <div className="flex gap-x-4">
            {/* Edit Button */}
            {!completed && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  editTask();
                }}
                title="Edit Task"
                aria-label="Edit Task"
                className="text-[#976f47] text-2xl hover:text-[#693F26] cursor-pointer transition-colors ease-in-out"
              >
                <AiFillEdit />
              </button>
            )}

            {/* Remove Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                taskDel(id);
              }}
              title="Delete Task"
              aria-label="Delete Task"
              className={`${completed ? "text-[#976f47]" : "text-white"} ${
                completed ? "bg-white" : "bg-[#976f47]"
              } ${
                completed ? "hover:shadow-md" : "hover:bg-[#693F26]"
              } flex items-center justify-center w-12 h-8 rounded-md cursor-pointer transition-colors ease-in-out`}
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
