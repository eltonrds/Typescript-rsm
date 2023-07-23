// string, boolean, number
let x: number = 10;
x = 12;

console.log(x);

//inferencia x annotatiom
let y = 12;
// y = "teste" erro
let z: number = 12;

//tipos basicos
let firtName: string = "Elton";
let age: number = 31;
const isAdmin: boolean = true

// string != string
console.log(typeof firtName);
firtName = "joao";

console.log(firtName);

//object
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.toUpperCase()); erro

console.log(firtName.toUpperCase());
myNumbers.push(5);

console.log(myNumbers);

// tuplas -> tuble
let myTuple: [number, string, string[]]
myTuple = [5, "test", ["a", "b"]]
//myTuple = [true, false, true] erro

// object literals -> {prop: value}
const user: { name: string; age: number } = {
    name: "Pedro",
    age: 18,
};

console.log(user);
console.log(user.name);
//user.job = "Programador" erro

//any
let a: any = 0
a = "teste";
a = true;
a = [];

// union type 
let id: string | number = "10"
id = 200
// id = true erro
// id = [] erro

//type alias
type myIdType = number | string
const userId: myIdType = 10
const productId: myIdType = "00001"
const shirdId: myIdType = 123

//enum
// tamanho de roupas (size: Médio, size; Pequeno)
enum size {
    P = "pequeno",
    M = "Médio",
    G = "Grande",
}
const camisa = {
    name: "Camisa gola V",
    price: "$59.90",
    color: "branca",
    size: size.G,
};

console.log(camisa);

// literal types
let teste: "autenticado" | null;
// test = "outrovalor" erro
teste = "autenticado";
teste = null;

// funcoes
function sum(a: number, b: number) {
    return a + b
}
console.log(sum(12, 12));
// console.log(sum("12", true)); erro

function sayHelloto(name: string): string {
    return `Hello ${name}`;
}
console.log(sayHelloto("Matheus"));

function logger(msg: string): void {
    console.log(msg);
}
logger("Teste!");

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`olá ${greet} ${name}`);
        return;
    }
    console.log(`olá ${name}`);
}
greeting("José");
greeting("Pedro", "sir");

// interface -> interface pra funcoes matematicas
interface MathFunctionParams {
    n1: number,
    n2: number,
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 = nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10,
}
console.log(multiplyNumbers(someNumbers));

//narrowing -> checagem de tipos
function doSomething(info: number | boolean) {
    if (typeof info === "number") {
        console.log(`o número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);

//generics 
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}
const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]
showArraysItems(a1);
showArraysItems(a2);

//classes
class User {
    name
    role
    isApproved
    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow: boolean): void {
        if (canShow) {
            console.log(`Idade do usuário é ${this.role}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const zeca = new User("Zéca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);

// interfaces em classes
interface Ivehicle {
    brand: string
    showBrand(): void
}
class Car implements Ivehicle {
    brand
    wheels
    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(` A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();


//heranca
class Supercar extends Car {
    engine;
    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new Supercar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();

//decorators
// Construtor decoretor ->
function BaseParamters(){
    return function <T extends{new(...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        };
    };
}
@BaseParamters() //decorator com parâmetro vazio () => {}
class Person {
    name
    constructor(name: String){
        this.name = name
    }
}
const sam = new Person("Sam");
console.log(sam);
