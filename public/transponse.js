const table = [[1, 2, 3], [4, 5, 6], [7, 8, 9],[10, 11, 12]];
function transparent(table){
    let transTable =[];
    for (let i = 0; i < table[0].length; i++ ){
        transTable[i]=[];
        for (let j = 0; j < table.length; j++ ){
            transTable[i][j]=table[j][i];
        }
    }
    return transTable
}

console.log(transparent(table))