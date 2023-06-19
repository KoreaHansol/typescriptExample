// const user = {
//   name: "kim",
//   id: 0,
// }

interface User {
  name: string;
  id: number;
}

const user1: User = {
  name: "kim",
  id: 0,
}

class userAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  getUserName(): string {
    return this.name
  }
}

const user2: User = new userAccount("KIM", 1);
console.log(user2.name)
console.log(user2.id)

// 타입을 구축하기 위한 두 가지 구문이 있다는 것을 꽤 빠르게 알 수 있을 것입니다.: Interfaces and Types - interface를 우선적으로 사용하고 특정 기능이 필요할 때 type을 사용해야 합니다.

type myBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
const windowState: WindowStates = "open";

function getLength(obj: string | string[]) {
  return obj.length;
}

const lt1 = getLength("asd");
const lt2 = getLength(['1', '2']);
console.log("length of string: ", lt1);
console.log("length of arrays: ", lt2);

function wrapInArray(obj: string | string[]) {
  if(typeof obj === "string") {
    return [obj]
  } else {
    return obj;
  }
}

const wraping1 = wrapInArray("1")
const wraping2 = wrapInArray(["1"])

console.log("wraping1", wraping1)
console.log("wraping2", wraping2)

type StringArray = Array<string>;
type StringArray2 = string[];

const stringArray1: StringArray = ['1', '2']
const stringArray2: StringArray2 = ['1', '2']

console.log("stringArray1", stringArray1)
console.log("stringArray2", stringArray2)

type ObjectWithNameArray = Array<{name: string}>;
const objectWithNameArray: ObjectWithNameArray = [{name: "Kim"}];
console.log(objectWithNameArray[0].name)


interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(p.x + "," + p.y);
}

// 구조적 타입 시스템에서 두 객체가 같은 형태를 가지면 같은 것으로 간주됩니다. (printPoint함수 인자인 객체에 타입 정한적 없음)
// 객체 또는 클래스에 필요한 모든 속성이 존재한다면, TypeScript는 구현 세부 정보에 관계없이 일치하게 봅니다.
printPoint({
  x: 1,
  y: 2
});

