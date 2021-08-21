// let obj = {
//     suma : function(){
//         return this.num1 + this.num2;
//     }
// }
// let obj2 = Object.create(obj);
// obj2.num1 = 5;
// obj2.num2 = 5;

// console.log(obj2);
// console.log(obj2.suma());

let D = 5;
let matriz = new Array(D).fill(null);

for(var i=0; i<matriz.length; i++) {
    matriz[i] = new Array(D).fill(null);
    for(var j=0; j<matriz[i].length; j++) {
        matriz[i][j] = new Array(D).fill(null);
        for(var r=0; r<matriz[i][j].length; r++) {
            matriz[i][j][r] = new Array(D).fill(null);
            for(var q=0; q<matriz[i][j][r].length; q++) {
                matriz[i][j][r][q] = new Array(D).fill(null);
            }
        }
    }
}
let obj = {datos:matriz};
Object.preventExtensions(obj);
obj.datos[3][2][4][0][0] = "William";
console.log(obj);