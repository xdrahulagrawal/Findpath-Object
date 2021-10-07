/**Date : 07-10-2021
 * Developer : Rahul Agrawal
 * Method-Name -: Findpath object
 */

/*  It's method takes two params object and key and check both are available or not if it exists at that path * * inside the object, else return undefined
 */
const obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

function findPath(obj, key) {
  //check object is valid or not
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
    return "It is not valid object";
  }
  //check string is valid or not
  if (!key || typeof key !== "string") {
    return "It is not valid key";
  }
  // string is converted into array
  const keysArray = key.split(".");
  //create a sallow copy of object don't manupilate actual object
  let currentObj = { ...obj };
  for (let i = 0; i < keysArray.length; i++) {
    //check in keyArray have key or not other return undefined
    if (currentObj[keysArray[i]] === undefined) {
      return undefined;
    }
    currentObj = currentObj[keysArray[i]];
  }
  return currentObj;
}
console.log(findPath([], "a.b")); //It is not valid object
console.log(findPath(obj, "a.b")); //object
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.k")); //null
console.log(findPath(obj, "a.b.d")); //undefined
console.log(findPath(obj, "a.b.j.e")); //undefined
