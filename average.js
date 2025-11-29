
      export    const  average=(...scores)=> {
          if (scores.length===0) return 0;

          const sum = scores.reduce((acc,score)=> acc+score );

          const avg =  sum/scores.length;

          return Math.round (avg*100) / 100;

        }
        console.log(average(89,85,78,92));

        console.log(average(100,95,88));

        console.log(average(65));
     
  
