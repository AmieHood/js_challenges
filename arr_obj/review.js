let result3 = [1, 2, 3]
    .map((x) => x *x)
    .reduce((totVal, curVal) => totalVal += curVal, 0)

    console.log(result3)

    let sqr = (x) => {
        return x*x
    }

    //callback
    let callbackUser=(cb) => {
        cb()
    //calling the function
    }

    callbackUser(console.log)

    let x = []
    console.log(x);

    function myMap (cb, iter) {
        for (let item of iter)
        cb(item)
    }
    myMap(console.log, [1,2,3])

    //Filter
    function myFilter(cb, iter){
        let retArr = []
        for (let item of iter){
            if(cb(item)){
                retArr.push(item)
            }
        }
        return retArr
    }


    let filteredArr = myFilter((x) => {
        return x % 2 === 0
    }, [1,2,3])
   console.log(filteredArr);

   // reduce [1, 2, 3]. reduce() => 6 if the cb totaled two numbers
   console.log(testArr.reduce((acc, x) => acc + x, 0))

   function myReduce(cb, iter){
        total = 0
        for (let item of iter){
            cb(total, item)
        }
        return total
   }
   console.log(testArr.reduce((acc, x) => acc + x, 0))