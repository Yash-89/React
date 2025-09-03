import React from "react";

function Navbar({ opts }) {
  return (
    <nav className="bg-blue-300 p-6 rounded-4xl mb-7">
      <ul className="flex gap-4 justify-start">
        {opts.map((opt, index) => (
          <li
            key={index}
            className="text-xl text-gray-800 hover:underline cursor-pointer"
          >
            {opt}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
