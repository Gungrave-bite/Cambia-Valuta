function conversione(){
    let con;
    let yen;
    let dollaro;
    let ster;

    con=document.getElementById("conver").value;
    yen=document.getElementById("yen");
    dollaro=document.getElementById("dollaro");
    ster=document.getElementById("ster");

    dollaro.innerHTML= (parseFloat(con)*1.16).toFixed(2) + " $";
    yen.innerHTML= (parseFloat(con)*178.16).toFixed(2) + " ¥";
    ster.innerHTML= (parseFloat(con)*0.87).toFixed(2) + " £"
}
function darkMode() {
   let element = document.body;
   element.classList.toggle("dark-mode");
}
