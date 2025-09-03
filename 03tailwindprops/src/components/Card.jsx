import React from "react";

function Card({ username = "HC", post = "Not assigned yet" }) {
  //   console.log(props);

  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="w-67 h-48 shadow-xl rounded-md"
            alt=""
            src="https://images.pexels.com/photos/18681382/pexels-photo-18681382.jpeg"
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-medium">{username}</span>
          <span className="font-medium text-sky-500">{post}</span>
          <span className="flex gap-2 font-md text-gray-600 dark:text-gray-400">
            <span>2025</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
