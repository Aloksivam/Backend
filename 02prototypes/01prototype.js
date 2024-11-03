const ar = []
// console.log(ar.__proto__) //better, viewed in browser
//Prototype extension 
//writing the code of intersection of two array, because array has no such built-in method
Array.prototype.intersect = function(ar){
    const finalArr = new Set()
    ar.forEach(item=>
       { if(this.includes(item)){
            finalArr.add(item)
        }}
    )
    return [...finalArr]
}
console.log([1,2,34].intersect([2,34]))