let  repeticiones= parseInt(prompt("Ingresar cantidad de repeticiones"));
for (let i = 1; i <= 10; i++){
    let repeticion = repeticiones-i 
    if(repeticion >= 1){
        alert("Te faltan " + repeticion + " repeticiones");
    }else if(repeticion <= 0){
        alert("Terminaste");
        break
    }
}
