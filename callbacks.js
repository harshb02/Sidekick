function delay (seconds,callback){
    setTimeout(callback, seconds*1000)
};

console.log('Timeout starting')

delay(2, () => {
    console.log('2 seconds delay')
    delay(2, () => {
        console.log('4 seconds delay')
        delay(2, () => {
            console.log('6 seconds delay')
        })
    })
   
})
