const user = {
    id : 20,
    name: "ifti" ,
    age: 24,
    education:{
        degree: "BSC Engg",
    }
        /*
    residance:{
        hall: "SDZH",
    },
    */
};

// object theke name ber kore ene arekta variable a assign korte 
 const {name: nm} = user;
 console.log(nm);

 // nested way
 const {education:{degree:dg}}= user;
 console.log(dg);

 /*
  const {residance:{hall}}=user;
  console.log(hall);
*/
 // ekhon kono karone residance data jodi na ashe api theke 

 const {residance:{hall}={}} =user;
 console.log(hall);