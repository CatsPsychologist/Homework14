let bodyEl = document.body

let bodyChilds = bodyEl.childNodes

console.log(bodyChilds)

for(let node of bodyChilds){
    console.log(node)
    console.log(node.childNodes)

}
let ul = bodyChilds[1]
console.log(ul)
