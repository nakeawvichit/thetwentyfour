
let numbers = []
for (let i = 0; i < 4; i++) {
    numbers.push(Math.floor((Math.random() * 9) + 1))
}
let operations = ['+', '-', '*', '/'];
function permutatorNumberAndOperate(numbers, operations) {
    let result = [];
    const permut = (arr, operations, m = []) => {
        if (arr.length === 0) {
            result.push(m)
            let spliced = m.slice();
            for (let j = 0; j < 4; j++) {
                for (let k = 0; k < 4; k++) {
                    for (let n = 0; n < 4; n++) {
                        spliced.splice(0, 0, "(");
                        spliced.splice(2, 0, operations[n]);
                        spliced.splice(4, 0, ")");
                        spliced.splice(5, 0, operations[k]);
                        spliced.splice(7, 0, operations[j]);
                        result.push(spliced)
                        spliced = m.slice();
                    }
                }
            }
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permut(curr.slice(), operations, m.concat(next))
            }
        }
    }
    permut(numbers, operations)
    return result;
}

let isTwentyfour = []
let numbersPermitAndOperate = permutatorNumberAndOperate(numbers, operations)
for (let k = 0; k < numbersPermitAndOperate.length; k++) {
    if (eval(numbersPermitAndOperate[k].join("")) === 24) {
        isTwentyfour.push(numbersPermitAndOperate[k].join(""));
    }
}

console.log(numbers, 'is 24', isTwentyfour.length > 0 ? true : false);
