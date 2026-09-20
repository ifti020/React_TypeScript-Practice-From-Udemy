import { Coach } from "./Coach";
import { CricketCaoch } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCaoch();
let myGolfCoach =  new GolfCoach();

let theCoaches: Coach[] =[];

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);


for (let tempCoach of theCoaches)
{
    console.log(tempCoach.getDailyWorkout());
}