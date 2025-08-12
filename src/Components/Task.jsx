import { AiFillEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

function Task({ name, taskDel }) {
  const [inputValue, setInputValue] = useState(name);
  const [editor, setEditor] = useState(false);
  const inputRef = useRef(null);

  function handleEditor() {
    setEditor((prev) => !prev);
  }

  useEffect(() => {
    if (editor && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editor]);

  return (
    <>
      {editor ? (
        <li className="flex items-center justify-between p-3 border-l-8 border-[#976f47] shadow-md rounded-sm w-full h-15">
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="font-roboto-bold overflow-auto max-w-40 border border-zinc-300 rounded-md w-45 h-8 p-2"
            type="text"
            placeholder="Type Something.."
          />
          <div className="flex gap-x-4 ">
            {/* Edit Button */}
            <button className="text-[#976f47] text-sm hover:text-[#693F26] cursor-pointer transition-all ease-in-out">
              Confirm
            </button>
            {/* Remove Button */}
            <button className=" text-sm flex items-center justify-center text-white bg-[#976f47] w-12 h-8 rounded-md cursor-pointer hover:bg-[#693F26] transition-all ease-in-out">
              Undo
            </button>
          </div>
        </li>
      ) : (
        <li className="flex items-center justify-between p-3 border-l-8 border-[#976f47] shadow-md rounded-sm w-full h-15">
          <p className="font-roboto-bold overflow-auto max-w-45 p-2">{name}</p>
          <div className="flex gap-x-4 ">
            {/* Edit Button */}
            <button
              onClick={handleEditor}
              className="text-[#976f47] text-2xl hover:text-[#693F26] cursor-pointer transition-all ease-in-out"
            >
              <AiFillEdit />
            </button>
            {/* Remove Button */}
            <button
              onClick={taskDel}
              className="flex items-center justify-center text-white bg-[#976f47] w-12 h-8 rounded-md cursor-pointer hover:bg-[#693F26] transition-all ease-in-out"
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
