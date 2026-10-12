import React, {useEffect} from 'react';

const Navbar = ({color}) => {
    //Case 1 : Run on every render
    useEffect(() => {
        alert("Hey i will run on every render")
    })

    //Case 2 : Run only on first render
    useEffect(() => {
        alert("Hey welcome to my page")
    }, []);

    //Case 3 : Run only when certain values change
    useEffect(() => {
        alert("Hey I am running because Color was Changed")
    }, [color]);

    return (
        <div>
            I am navBar of {color} color hehehe...
        </div>
    );
};

export default Navbar;