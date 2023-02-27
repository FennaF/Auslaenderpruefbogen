const currentDate = new Date();
document.querySelector("#Datum").innerHTML = currentDate.toLocaleDateString();

// Toggle Visibily
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

// Toggle Visibily Ausschlussgrunde
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
  
