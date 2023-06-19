const a: number = 5;
const b: string = 'abc';
const c: boolean = true;
const t: true = true;
const d: null = null;
const e: undefined = undefined;
const f: any = 'asjdio';

// function add(x: number, y: number): number { return x + y }
// type Add = (x: number, y: number) => number;
interface Add {
  (x: number, y: number): number;
}
const add: Add = (x, y) => x + y;
const obj: { lat: number, lon: number } = { lat: 37.5, lon: 127.5 };

const arr: string[] = ['123', '234'];
const arr2: Array<number> = [123, 456];

// 튜플
const arr3: [number, number, string] = [1, 2, 'strubg'];
