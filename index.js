let nome= []
let nota=[]
let i
let soma=0

for(i=0 ;i<5; i++){


nome[i]= prompt("Digite seu nome ")
nota[i]= Number (prompt("Digite sua nota"))

soma=soma+nota[i]

}

media=soma/5


for(i=0;i<5;i++){


    if(nota[i]<media){

        console.log(`${nome[i]}: ${nota[i]}`)
    }


}

    