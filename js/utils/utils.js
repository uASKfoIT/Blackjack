
export function areInputsEmpty(values) {
    if (!Array.isArray(values)){
        values = [values];
    } 
    return values.some(v => v.trim() === "");
}

export function stringsEqual(a, b, caseInsensitive = false) {
    if (caseInsensitive) {
        return a?.toLowerCase() === b?.toLowerCase();
    }
    return a === b;
}

export function getListSum(list){
    let sum = 0;
    for (const num of list) {
        sum += num;
    }
    return sum;
}