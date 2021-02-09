const average = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

const JohnsTeamAverage = average(89, 120, 103);
const MikesTeamAverage = average(116, 94, 123);
const MarysTeamAverage = average(97, 134, 105);


if(JohnsTeamAverage > MikesTeamAverage) 
    console.log(`John's team average score is higher than Mike's team average score, the score is ${JohnsTeamAverage}:${MikesTeamAverage}`);
else if(JohnsTeamAverage < MikesTeamAverage)
    console.log(`Mike's team average score is higher than John's team average score, the score is ${MikesTeamAverage}:${JohnsTeamAverage}`);
else    
    console.log(`John's and Mike's teams has the same average score ${JohnsTeamAverage}`)


if(JohnsTeamAverage > MikesTeamAverage && JohnsTeamAverage > MarysTeamAverage)
    console.log(`John's team has the highest average score ${JohnsTeamAverage}`);
else if(MikesTeamAverage > JohnsTeamAverage && MikesTeamAverage > MarysTeamAverage)
    console.log(`Mike's team has the highest average score ${MikesTeamAverage}`);   
else if(MarysTeamAverage > JohnsTeamAverage && MarysTeamAverage > MikesTeamAverage)
    console.log(`Mary's team has the highest average score ${MarysTeamAverage}`);  
else if(JohnsTeamAverage > MarysTeamAverage && MikesTeamAverage > MarysTeamAverage)
    console.log(`John's and Mike's team has the highest average score ${JohnsTeamAverage}`);
else if(JohnsTeamAverage > MikesTeamAverage && MarysTeamAverage > MikesTeamAverage)
    console.log(`John's and Mary's teams has the highest average score ${JohnsTeamAverage}`);
else if(MikesTeamAverage > JohnsTeamAverage && MarysTeamAverage > JohnsTeamAverage)
    console.log(`Mike's and Mary's teams has the highest average score ${MikesTeamAverage}`);
else
    console.log(`John's, Mike's and Mary's teams has the same average score ${JohnsTeamAverage}`)

