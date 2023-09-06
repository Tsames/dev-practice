const sort = (arry) => {
    let compare = 0;
    let find = 1;

    while (find < arry.length) {
        if (arry[find] < arry[compare]) {
            let temp = arry[compare]
            arry[compare] = arry[find]
            arry[find] = temp
            compare += 1
        }
        find += 1
    }

    console.log(arry)
}


const test =  [10,9,4,1,2,6,12,3]
