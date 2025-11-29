
      export  const  calculateArea=(radius)=> {
            if (radius === undefined) {
                throw new Error("Radius is missing!");
            }
            return Math.PI * Math.pow(radius, 2);
        }
        try {
            console.log(calculateArea(5)); 
            console.log(calculateArea());  
        } catch (error) {
            console.error(error.message);
        }

