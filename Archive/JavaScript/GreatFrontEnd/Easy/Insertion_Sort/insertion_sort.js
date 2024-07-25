function sort(arry) {

    for (let i=1; i < arry.length; i++) {

        for (let j=i; arry[j] < arry[j-1] && j-1 >= 0; j--) {
            let temp = arry[j-1]
            arry[j-1] = arry[j]
            arry[j] = temp
        }
    }

    return arry;
}


module.exports = sort