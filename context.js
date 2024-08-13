import { differenceInSeconds, getSeconds } from "date-fns";
let a = new Date();
console.log(a);
let ab = new Date(15, 8, 2024);
console.log(ab);
let abc = new Date(3);
console.log(abc);
let abcd = new Date().getTime();
console.log(abcd);
let abcde = new Date(abcd);
console.log(abcde);
let abc1 = new Date().getSeconds();
console.log(abc1);
let ab1 = abc1.setSeconds(); //setSeconds cannot be used on variable name in this way
let bd = new Date().setSeconds(new Date().getSeconds() + 30000);
console.log(bd);
let dg = new Date().getDate();
let dh = new Date().getMonth();
let of = new Date().getFullYear();
console.log(dg + '-' + dh + '-' + of);
let dgl = new Date().getTime();
console.log(dgl);
let dgp = new Date().getHours();
console.log(dgp);
let ghj = new Date().getMinutes();
console.log(ghj);
let lop = new Date().getSeconds();
console.log(lop);
let vk = new Date().getSeconds() + 30;
console.log(vk);
const date1 = new Date(2024, 5, 9, 12, 0, 0); // June 9, 2024, 12:00:00
const date2 = new Date(2024, 5, 9, 12, 10, 30); // June 9, 2024, 12:10:30
let importing = new Date(getSeconds()); //date-fns can be imported in this way too
const difference = differenceInSeconds(date2, date1); // Calculate the difference
console.log(`The difference in seconds is: ${difference}`);
let ay = new Date();
console.log(ay);
let as = new Date().getDate();
console.log(as);
let az = new Date().getDay();
console.log(az);
let azq = new Date().getDay(); //local day hi carry krega a/c to computer date
console.log(azq);
let yu = new Date().getMonth();
console.log(yu); //index 5 june k lye kyn k 0 se start hti he month ki indexing
let fu = new Date().getFullYear();
console.log(fu);
let gu = new Date().getTime(); //1970 se ab tk k seconds btaega milliseconds m
console.log(gu); //ye human readable nh hai
let gui = new Date(gu); //ye human readable hai
console.log(gui);
let hj = new Date().getHours();
console.log(hj);
let ki = new Date().getMinutes();
console.log(ki);
let ui = new Date().getSeconds();
console.log(ui);
let wu = new Date(hj);
console.log(wu);
let io = new Date(2023, 5, 21);
console.log(io);
//year,month,date
const date = new Date(2024, 0, 1); // 1st January 2024
console.log(date);
console.log(date.getMonth()); // Output: 0 (جنوری)
console.log(date.getDate()); // Output: 1 (پہلا دن)
console.log(date.getFullYear()); // Output: 2024 (سال)
