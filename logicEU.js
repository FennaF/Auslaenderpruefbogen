
const PrüfEU31 = document.querySelector("#PrüfEU31")
const PrüfEU32 = document.querySelector("#PrüfEU32")
const PrüfEU33 = document.querySelector("#PrüfEU33")

const PrüfEU2Radios = document.querySelectorAll("#PrüfEU2 input[type=radio]")
const PrüfEU31Radios = document.querySelectorAll("#PrüfEU31 input[type=radio]")
const PrüfEU32Radios = document.querySelectorAll("#PrüfEU32 input[type=radio]")
const PrüfEU33Radios = document.querySelectorAll("#PrüfEU33 input[type=radio]")

const PrüfEU2Btn = document.querySelector("#PrüfEU2btn")
const PrüfEU2Rows = document.querySelectorAll("#PrüfEU2 .row")
const PrüfEU2chkb =document.querySelector("#PrüfEU2chkb")

const ErgebnisEU2 = document.querySelector("#ErgebnisEU2")
const ErgebnisEU31 = document.querySelector("#ErgebnisEU31")
const ErgebnisEU32 = document.querySelector("#ErgebnisEU32")
const ErgebnisEU33 = document.querySelector("#ErgebnisEU33")

//Logik für EU Prüfung (2)
function HideOtherRadios(radioSetToJa){
    PrüfEU2Rows.forEach(function(row){
        row.classList.add("d-none")
        row.querySelectorAll("input[type=radio]").forEach(function(radio){
            if(radio.id === radioSetToJa.id){
                row.classList.remove("d-none")
            }
        })
    })
}
function ShowAllRadios(){
    PrüfEU2Rows.forEach(function(row){
        row.classList.remove("d-none")
    })
}
PrüfEU2Radios.forEach(function(radio){
    radio.addEventListener("click", function(){
        if(radio.value === "Ja"){
            HideOtherRadios(this);
            Ueberschrift.classList.remove("d-none")
            ErgebnisEU2.classList.remove("d-none")
            PrüfEU2Btn.classList.remove("d-none")
            PrüfEU2chkb.checked = false

            PrüfEU31.classList.add("d-none")
            PrüfEU32.classList.add("d-none")
            PrüfEU33.classList.add("d-none")

        }else{
            ShowAllRadios();
            Ueberschrift.classList.add("d-none")
            ErgebnisEU2.classList.add("d-none")
            PrüfEU2Btn.classList.add("d-none")
        }
    })
});
PrüfEU2Btn.addEventListener("click",function(){
    ShowAllRadios()
    Ueberschrift.classList.add("d-none")
    ErgebnisEU2.classList.add("d-none")
    PrüfEU2Btn.classList.add("d-none")
})
PrüfEU2chkb.addEventListener("click", function(){
    if(PrüfEU2chkb.checked){
        PrüfEU2Radios.forEach(function(radio){
            if(radio.value === ""){
                radio.checked = true
            }
        })
    window.scrollBy(0, 500)   
    PrüfEU31.classList.remove("d-none")
    }
})

//Logik für EU Prüfung (3.1)
