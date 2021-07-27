/*
Implement encode and decode functions that follow run length encoding pattern. Run-length encoding is a form of data compression, where consecutive data elements are replaced by just one data value and count of that value. 

encode('wwwiiuuuu') => 3w2i4u
decode('2u3a4o') => uuaaaoooo
*/

const encode = (string)=>{
    return string.replace(/(\w)\1+/g, (m,v) => `${m.length}${v}`)
}

const decode = (string)=>{
    return string.replace(/(\d+)(\w)/g, (x,y,z) => z.repeat(y))
}


console.log(encode('wwwwwwwwiiuuuu')) // 3w2i4u
console.log(decode('111u3a4o')) // uuaaaoooo 