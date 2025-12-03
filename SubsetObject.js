
   export const isSubsetObject = (mainObject, subObject) => {
    const subKeys = Object.keys(subObject);
    const matchedKeys = subKeys.filter(key => mainObject[key] === subObject[key]);
    return matchedKeys.length === subKeys.length;
};

const objectA = { name: "dema", age: 25, city: "paris" };
const objectB = { age: 34, firstName: "junior" };

console.log(isSubsetObject(objectA, objectB));
