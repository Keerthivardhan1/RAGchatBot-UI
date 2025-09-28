import { useState } from 'react';
import { AiFillHome } from "react-icons/ai";
import { IoChatbox } from "react-icons/io5";


export default function SideNavbar() {
  const [open, setOpen] = useState(true);

  return (
    <aside className={`bg-gray-800 text-white transition-all duration-300 ${open ? 'w-48' : 'w-12'}`}>
      <button
        className="p-2 bg-gray-700 w-full text-left"
        onClick={() => setOpen(!open)}
      >
        {open ? 'Close Menu' : 'Open Menu'}
      </button>
      {open && (
        <ul className="p-2 space-y-2">
          <li className="hover:bg-gray-700 p-2 rounded">Home</li>
          <li className="hover:bg-gray-700 p-2 rounded">ChatBox</li>
          <li className="hover:bg-gray-700 p-2 rounded">Settings</li>
          <li className="hover:bg-gray-700 p-2 rounded">About</li>
        </ul>
      )}
    </aside>
  );
}
