const arr = [5, 5, 9, 36, 56, 78, 58, 125, 39, [2, 5, 36, 159], [5697, 125, 6, 7, 96, 25, 14, ['a', 'b', [25, 14], 'c']], true, false, [52, 25, 14, 36, 85], [56, 75, 85, 96]]

const fun = function (arr) {
    const resArr = []
    for (const item of arr) {
        if (Array.isArray(item)) {
            for (const itemElement of item) {
                if (Array.isArray(itemElement)) {
                    for (const itemElementElement of itemElement) {
                        if (Array.isArray(itemElementElement)) {
                            for (const itemElementElementElement of itemElementElement) {
                                resArr.push(itemElementElementElement)
                            }
                        } else resArr.push(itemElementElement)
                    }
                } else resArr.push(itemElement)
            }
        } else resArr.push(item)

    }
    return resArr

}

resArr = fun(arr)
console.log(arr);
console.log(resArr);
//************************************************************************************************************

// Рекурсия

let floatArray=[]
function floatter(array){
    for (const item of array) {
        if(Array.isArray(item)){
            floatter(item)
        }else{
            floatArray.push(item)
        }
    }
}
floatter(arr)
console.log(floatArray);

//***********************************************************************************************************
//???????????????????????????????????????????????
const tree ={
    value:1,
    children:[
        {
            value: 2,
            children: [
                {value:3},
            ]
        },
        {
            value: 4,
            children: [
                {value: 5},
                {value: 6},
            ]
        }
    ]
}


// const stack=[tree];
// console.log(stack);


function getTreeValues(tree){
const stack=[tree];
const result=[];
while(stack.length>0){
    const node=stack.pop()
    if(node.value!==undefined){
        result.push(node.value)
    }
    if(node.children?.length){
        stack.push(...node.children)
    }
}
return result;
}

console.log(getTreeValues(tree)); //=>[1,2,3,4,5,6]