import React from 'react';
import {useParams} from "react-router-dom";


const User = () => {

    const params = useParams();
  return (
    <>
      I am user {params.username}
    </>
  );
};

export default User;