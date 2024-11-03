const arr = [129,41,501]
console.log(arr.every((i)=>i%2==0))
console.log(arr.some((i)=>i%2==0))

//find and findIndex both work for first occurence only
console.log(arr.find((e)=>e>41))
console.log(arr.findIndex((e)=>e>41))