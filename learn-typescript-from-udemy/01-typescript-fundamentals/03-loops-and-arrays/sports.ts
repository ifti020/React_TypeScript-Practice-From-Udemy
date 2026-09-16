let sportsOne: string [] = ["Golf", "Cricket", "Football", "Badminton"];

for (let i = 0 ; i<sportsOne.length ; i++)
{
    console.log(sportsOne[i]);
}

console.log("\n");

// lets use the simplied for loop

for (let tempSport of sportsOne)
{

    if(tempSport=="Cricket")
    {
        console.log(tempSport + " Iftis Favorite");

    }
    else {
        console.log (tempSport);
    }

}