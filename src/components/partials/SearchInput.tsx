import { Icon } from "@iconify/react";

export default function SearchInput() {
  return (
    <div className=" w-3/5 md:w-1/2 lg:w-2/5 flex items-center relative">
      <input
        type="text"
        className="py-2 px-5 border-b-2 border-gray-400 outline-none w-full"
        placeholder="Search ..."
      />
      <Icon
        icon="ph:magnifying-glass-bold"
        className="w-8 h-8 text-gray-500 absolute right-2"
      />
    </div>
  );
}
