
        const object= (obj1,obj2)=>{
            const keys=Object.keys(obj2);
            const fil= keys.filter(key=>obj1[key]===obj2[key]);
            return fil.length=keys.length;
        }
        const a={nom:"dema", Age:25,ville:"paris"};
        const b={age:34, prenom:"junior"};
        console.log(object(a,b));
 