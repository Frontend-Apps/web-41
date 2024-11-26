// let mat = [
//   [18, 24, 1],
//   [45, 67, 88],
//   [90, 98, 87],
//   [12, 16, 19],
// ];
// console.log(nums.length);
// var rows = mat.length;
// console.log(rows); //4
// var cols = mat[1].length;
// console.log(cols); //3

// // mxn -> rowsxcols -> 4x3

// // 98
// console.log(mat[2][1]);

// //1
// //length
// //cols=3
// console.log(mat[0][cols - 1]);

// //87
// console.log(mat[2][2]);

// mat[3][2] = 101;
// console.log(mat);

// var evenMat = [
//   [2, 6],
//   [10, 12],
//   [14, 18],
// ];
// console.log(evenMat[0].length); // [2,6]
// console.log(evenMat[1]); // [10,12]

// for (var i = 0; i < evenMat.length; i++) {
//   for (j = 0; j < evenMat[0].length; j++) {
//     //console.log(evenMat[i][j]);
//   }
// }

// console.log(evenMat[0][0]);
// console.log(evenMat[0][1]);
// console.log(evenMat[1][0]);
// console.log(evenMat[1][1]);
// console.log(evenMat[2][0]);
// console.log(evenMat[2][1]);
// console.log(evenMat[3][0]);
// console.log(evenMat[3][1]);

// let scores = [
//   [100, 200, 300],
//   [50, 60, 70],
// ];

// // sum of all scores in the matrix -> 3mins
// // output - 780
// var sum = 0;
// for (var i = 0; i < scores.length; i++) {
//   for (var j = 0; j < scores[0].length; j++) {
//     sum = sum + scores[i][j];
//   }
// }
// console.log(sum)

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function boundarySum(matrix) {
  let sum = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[0].length; j++) {
      if (
        i === 0 ||
        j === 0 ||
        i === matrix.length - 1 ||
        j === matrix.length - 1
      ) {
        sum += matrix[i][j];
      }
    }
  }
  console.log(sum);
}

boundarySum(matrix);
// 1+2+3+6+9+8+7+4+1
//i,j
//1->  0,0
//2->  0,1
//3->  0,2
//6 -> 1,2
//9 -> 2,2
//8 -> 2,1
//7 -> 2,0
//4 -> 1,0

// 0,2

// function replaceOdd(matrix) {
//   for (var i = 0; i < matrix.length; i++) {
//     for (j = 0; j < matrix[0].length; j++) {
//       if (matrix[i][j] % 2 !== 0) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
//   console.log(matrix);
// }

// replaceOdd(matrix);
// function flatten(matrix) {
//   var res = [];
//   for (var i = 0; i < matrix.length; i++) {
//     for (j = 0; j < matrix[0].length; j++) {
//       res.push(matrix[i][j]);
//     }
//   }
//   console.log(res)
// }

// flatten(matrix); // [1,2,3,4,5,6,7,8,9]

// var sum = 0;

// function sumDiag(matix) {
//   for (var i = 0; i < matrix.length; i++) {
//     sum = sum + matrix[i][i];
//   }
//   console.log(sum);
// }

// sumDiag(matrix); // 1+5+9
// 1 -> matrix[0][0]
// 5 -> matrix[1][1]
// 8 -> matrix[2][2]

// var sum = 0;
// function sumCol(matrix, col) {
//   for (var i = 0; i < matrix.length; i++) {
//     sum = sum + matrix[i][col];
//   }
//   console.log(sum);
// }

// sumCol(matrix, 1);
// 2 -> matrix[0][1]
// 5 -> matrix[1][1]
//8 -> matrix[2][1]

// var sum = 0;
// function sumRow(matrix, row) {
//   for (var i = 0; i < matrix[0].length; i++) {
//     sum = sum + matrix[row][i];
//   }
//   console.log(sum);
// }

// sumRow(matrix, 1);

var mat1 = [
  [1, 2],
  [3, 4],
];
var mat2 = [
  [5, 6],
  [7, 8],
];

for (var i = 0; i < mat1.length; i++) {
  for (j = 0; j < mat2.length; j++) {
    mat1[i][j] = mat1[i][j] + mat2[i][j];
  }
}

console.log(mat1);

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 7],
];
[1,2,3,6,9,7,5,1,7,4,5,8]