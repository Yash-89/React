import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const data = useLoaderData();

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/yash-89")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/yash-89");
  return res.json();
};
