import { IoMdRemoveCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

function List() {
  return (
    <ul className="list-disc">
      {/*Styling for a Todo*/}
      <li className="flex items-center justify-between p-4 border-b border-b-[#D5C2A5]">
        <p className="font-roboto-bold">Play League of Legends</p>
        <div className="flex gap-x-4">
          <CiEdit className="text-2xl text-[#A26F25]" />
          <IoMdRemoveCircleOutline className="text-2xl text-red-700" />
        </div>
      </li>
    </ul>
  );
}

export default List;
