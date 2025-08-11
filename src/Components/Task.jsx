import { AiFillEdit } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";

function Task({ name, taskDel }) {
  return (
    <li className="flex items-center justify-between p-3 border-l-8 border-[#976f47] shadow-md rounded-sm w-full h-15">
      <p className="font-roboto-bold overflow-auto max-w-50">{name}</p>
      <div className="flex gap-x-4 ">
        {/* Edit Button */}
        <button className="text-[#976f47] text-2xl hover:text-[#693F26] cursor-pointer transition-all ease-in-out">
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
  );
}
export default Task;
