// const user = {
//   name: "kim",
//   id: 0,
// }
var user1 = {
    name: "kim",
    id: 0,
};
var userAccount = /** @class */ (function () {
    function userAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    userAccount.prototype.getUserName = function () {
        return this.name;
    };
    return userAccount;
}());
var user2 = new userAccount("KIM", 1);
console.log(user2.name);
console.log(user2.id);
var windowState = "open";
function getLength(obj) {
    return obj.length;
}
var lt1 = getLength("asd");
var lt2 = getLength(['1', '2']);
console.log("length of string: ", lt1);
console.log("length of arrays: ", lt2);
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    else {
        return obj;
    }
}
var wraping1 = wrapInArray("1");
var wraping2 = wrapInArray(["1"]);
console.log("wraping1", wraping1);
console.log("wraping2", wraping2);
var stringArray1 = ['1', '2'];
var stringArray2 = ['1', '2'];
console.log("stringArray1", stringArray1);
console.log("stringArray2", stringArray2);
var objectWithNameArray = [{ name: "Kim" }];
console.log(objectWithNameArray[0].name);
function printPoint(p) {
    console.log(p.x + "," + p.y);
}
printPoint({
    x: 1,
    y: 2
});
