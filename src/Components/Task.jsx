import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

function Task({ name, taskDel }) {
  return (
    <li className="flex items-center justify-between p-3 border-l-8 border-[#976f47] shadow-md rounded-sm w-full h-15">
      <p className="font-roboto-bold overflow-auto max-w-50">{name}</p>
      <div className="flex gap-x-4">
        {/* Edit Button */}
        <button className="flex items-center justify-center text-white bg-[#693F26] w-12 h-8 rounded-md cursor-pointer hover:bg-[#A26F25]">
          <AiFillEdit />
        </button>
        {/* Remove Button */}
        <button
          onClick={taskDel}
          className="text-[#693F26] text-2xl hover:text-[#A26F25] cursor-pointer"
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
}
export default Task;
