const currentDate = new Date();
document.querySelector("#Datum").innerHTML = currentDate.toLocaleDateString();

// Toggle Visibily Fiktionsbescheinigung
const chboxTitel = document.querySelector("#bestaetigungTitel");
document.querySelectorAll('input[type=radio][name="Fiktionsbescheinigung"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (this.value === 1) {
        chboxTitel.classList.toggle("d-none");
      } else {
        chboxTitel.classList.toggle("d-none");
    }
    });
  });

//Textblöcke unter Prüfverlauf Dritt (1) werden ausgeblendet, wenn Auswahl in der paragraphen liste
const ausschlussTextBlock = document.querySelector("#ausschlussGruendeBlock");
const btnAusschlussGruendeBlock = document.querySelector("#btnAusschlussGruendeBlock");
document.querySelectorAll('#paragrListe input[type=radio]').forEach(function(radio) {
    radio.addEventListener('click', function() {
        ausschlussTextBlock.classList.add("d-none");
        btnAusschlussGruendeBlock.classList.remove("d-none");
    });
  });

  btnAusschlussGruendeBlock.addEventListener('click', function(event){
    ausschlussTextBlock.classList.remove("d-none");
    this.classList.add("d-none");
  });
  
//Wenn ein Textblock unter Prüfverlauf Dritt (1) ausgewählt wird, werden alle anderen Auswahlmöglichkeiten ausgeblendet, bis auf den ausgewählten text block
function hideTextBlöcke(){
  const Blöcke = document.querySelectorAll("#ausschlussGruendeBlock .row");
  Blöcke.forEach(function(block){
  block.classList.add("d-none");
  if (block.querySelector("input[type=radio]").checked){
    block.classList.remove("d-none");
  };
  });
};
document.querySelectorAll("#ausschlussGruendeBlock input[type=radio]").forEach(function(radio){
  radio.addEventListener('click', function(){
    hideTextBlöcke();
    document.querySelector('#paragrListe').classList.add('d-none');
  });
});
