import { MdListAlt } from "react-icons/md";

function Header() {
  return (
    <div className="flex items-center justify-between p-2 font-roboto-bold bg-[#ECD8B1]">
      <MdListAlt className="text-[#301E14] text-2xl" />
      <span className="text-[#301E14]">0/3 To Dos Completed</span>
    </div>
  );
}

export default Header;
