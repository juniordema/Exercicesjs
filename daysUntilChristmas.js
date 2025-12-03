export const daysUntilChristmas=(currentDate = new Date())=>{
    const christmas=new Date(currentDate.getFullYear(),11,25);
    if(currentDate>christmas){
        christmas.setFullYear(currentDate.getFullYear()+1);
    }
    const diffTime=christmas-currentDate;
    return Math.ceil(diffTime/(1000*60*60*24));
}
