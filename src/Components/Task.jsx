import { CiEdit } from "react-icons/ci";
import DeleteBtn from "./Buttons/DeleteBtn.jsx";

function Task({ name }) {
  return (
    <li className="flex items-center justify-between p-3 border-l-8 border-[#976f47] shadow-md rounded-sm w-full h-15">
      <p className="font-roboto-bold">{name}</p>
      <div className="flex gap-x-4">
        <CiEdit className="text-2xl text-[#A26F25]" />
        <DeleteBtn />
      </div>
    </li>
  );
}
export default Task;
