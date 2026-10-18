import React, {useEffect} from 'react';
import {data, useLoaderData} from "react-router-dom";

const GitHub = () => {
    // const [data, setData] = React.useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/ifti020")
    //         .then(res => res.json())
    //         .then (data => {
    //             console.log(data);
    //             setData(data);
    //         })
    // },[])
// another method
        const data = useLoaderData()

  return (
    <>
      <div className={` text-center items-center justify-center m-4 bg-gray-700 text-4xl p-4 text-white`}>
          GitHub Followers:{data?.followers}
          <img src={data.avatar_url} alt="Git Picture" width={300}/>
      </div>
    </>
  )

};

export default GitHub;

export const gitHubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/ifti020");
    return await response.json();

}