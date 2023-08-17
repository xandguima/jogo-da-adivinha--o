//variaveis
const screen1=document.querySelector(".screen1")
const screen2=document.querySelector(".screen2")
const screen2h2=document.querySelector(".screen2 h2")


const btnTry=document.querySelector("#btnTry")
const btnReset=document.querySelector("#btnReset")



let  randomNumber=Math.round(Math.random()*10)
let xAttempts=1

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click',handleResetClick)
document.addEventListener('keydown', function(e){
  if(e.key =='Enter' && screen1.classList.contains("hide")){
    handleResetClick()
  }
})


//callback
function handleTryClick(event){
  event.preventDefault()

  const inputNumber=document.querySelector("#inputNumber") 
  
 
  
  if(Number(inputNumber.value)>-1 && Number(inputNumber.value)<11 && inputNumber.value!=""){ 
    if(Number(inputNumber.value)== randomNumber){

    toggleScreen()
    screen2h2.innerText=`Acertou em ${xAttempts} tentativas.`
    
    }else{
      console.log("tente novamente")
    }
      
    inputNumber.value=""
    xAttempts++
    console.log(randomNumber)

    
  }else{
    inputNumber.value=""
    console.log(inputNumber.value)
    alert("Número inválido")
  }
  
  
  
}
//callback
function handleResetClick(event){
  toggleScreen()
  randomNumber=Math.round(Math.random()*10)
  xAttempts=1;
}
function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}




