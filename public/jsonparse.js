let fs=require("fs")
let json=fs.readFileSync("out.json")


let _=JSON.parse(json)
console.log('====================================');
fs.writeFileSync("parsed.json",JSON.stringify(_.map(e=>({msg:e.message,id:e.id}))));

console.log('====================================');