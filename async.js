const {readFile, writeFile} = require('fs')

readFile('./Subfolder/text.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('first.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './Subfolder/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result)
            })
        
    })
})
