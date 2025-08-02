import { MdListAlt } from "react-icons/md";

function Header() {
  return (
    <div className="flex items-center justify-between p-2 font-roboto-bold bg-[#693F26] text-white">
      <MdListAlt className=" text-2xl" />
      <span>0/3 To Dos Completed</span>
    </div>
  );
}

export default Header;
