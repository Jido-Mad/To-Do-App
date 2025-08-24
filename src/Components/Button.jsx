function Button({ label, onClick }) {
  return (
    <button
      className="text-white font-roboto-bold bg-[#693F26] w-70 h-10 rounded-md shadow-md hover:bg-[#976f47] cursor-pointer transition-all ease-in-out"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
export default Button;
