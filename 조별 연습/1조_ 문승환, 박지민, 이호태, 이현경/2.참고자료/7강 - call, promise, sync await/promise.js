let test1 = function (b) {
    return new promise((resolve, reject) => {
        setTimeout(function(){
            console.log(b);
            resolve()
                },1000)})}
    



let test2 = function (a) {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
        console.log(a+"testing")
        resolve(2); 
        })
    }, 1000)
}





var promise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('ok')
    }, 1000)
});

promise.then(test2)
