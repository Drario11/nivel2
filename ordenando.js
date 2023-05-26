var texto = document.getElementById('txtn1')
var areadapergunta = document.getElementById('selpergunta')
var res = document.getElementById('res')
var item = document.createElement('option')
var valores = []

const Testee = () => {
    res.innerHTML = valores
        
}

const Ordernar = () => {
    let testinho = valores
    testinho.sort()
    res.innerHTML = testinho
    
 
}

//Funções tradicionais

const Adcionar = () => {
    if(document.getElementById("txtn1").value != "")
    {
        valores.push(Number(texto.value))           
        item = document.createElement('option') 
        var n = Number(texto.value)                 
        item.text = `${n}`                          
        areadapergunta.appendChild(item)
        }
        texto.value = ''
}

const Misturar =() => {
    
    res.innerHTML = Misturando(valores)
      
}
const teste =(a) =>{
    var micro = (a.value || a.options[a.selectedIndex].value)
    var tipo1 = 0
//bluble Sort
    if(micro =="Blubble Sort"){
        tipo1 = bubble = valores
//aqui e uma função para
function bubbleSort1(arr) {
    return arr.sort((a, b) => {
        return (a < b+1) ? -1 : 1
 });
}
    bubbleSort1(bubble)
  
//Selection Sort              
    }else if(micro == "Selection Sort"){
        let arr = valores
        tipo1 = arr
        for(let i = 0; i < arr.length; i++){
            let min = i
            let aux 
            for(let j = i + 1; j <= arr.length; j++){
                if(arr[j] < arr[min]){
                    min = j
                }
            }
            if (i != min) {
                aux = arr[i]
                arr[i] = arr[min]
                arr[min] = aux
            }
        
        }

    }else if(micro == "Quick Sort"){
        tipo1 = ites = valores
        function QuickSort(Arr){
            if(Arr.length <= 1){
              return Arr;
            }
          
            pivot = Arr[Arr.length - 1];
            leftArr = [];
            rightArr = [];
          
            for(let i=0; i < Arr.length-1;i++){
              Arr[i] < pivot ? leftArr.push(Arr[i]) :  rightArr.push(Arr[i])
            }
          
            return [...QuickSort(leftArr) ,pivot,...QuickSort(rightArr)];
          
          }
                  
          QuickSort(ites)
        




    }else{
        tipo1 = 0
}
    
    res.innerHTML = tipo1
}


function Misturando(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}
var arrA = [1, 2, 3, 4, 5];
//console.log(shuffleArray(arrA)); // [4, 2, 1, 5, 3]
//console.log(shuffleArray(arrA)); // [5, 3, 4, 2, 1]
//console.log(shuffleArray(arrA)); // [5, 1, 3, 4, 2]