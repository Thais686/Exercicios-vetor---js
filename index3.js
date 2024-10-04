let A =[]
let B=[]
let C=[]
let i


for(i=0;i<5;i++){

    A[i]= prompt("Digite um valor" )
    console.log(A[i])

}

for(i=0;i<5;i++){

   B[i]= Math.floor(Math.random() * 100 )
console.log(B[i])
  

}

for(i=0;i<5;i++){


    C[i]=A[i]*B[i]
}

console.log(C)



