import { IoMdRemoveCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

function List() {
  return (
    <div className="shadow-lg h-90 w-[90%] p-4 bg-[#FAF6EF] rounded-2xl flex flex-col items-center gap-5 self-center">
      <h2 className="font-roboto-bold text-2xl text-shadow-sm">Todos</h2>
      <ul className="w-full flex flex-col items-center gap-5 h-full  overflow-auto">
        {/*Styling for the Tasks*/}
        <li className="flex items-center justify-between p-3 border-l-8 border-[#D5C2A5] shadow-md rounded-sm w-full h-15">
          <p className="font-roboto-bold">Play League of Legends</p>
          <div className="flex gap-x-4">
            <CiEdit className="text-2xl text-[#A26F25]" />
            <IoMdRemoveCircleOutline className="text-2xl text-red-700" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default List;
