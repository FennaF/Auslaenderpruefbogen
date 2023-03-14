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

const ausschlussTextBlock = document.querySelector("#ausschlussGruendeBlock");
const btnAusschlussGruendeBlock = document.querySelector("#btnAusschlussGruendeBlock");
const paragListe = document.querySelector('#paragrListe');
const ausschlussGruendeBlockRadios = document.querySelectorAll("#ausschlussGruendeBlock input[type=radio]")

//Prüfverlauf Dritt
  //Prüfung 1
    //Ausblenden Textblöcke unter (1), wenn Auswahl in paragraphen Liste
    document.querySelectorAll('#paragrListe input[type=radio]').forEach(function(radio) {
        radio.addEventListener('click', function() {
            ausschlussTextBlock.classList.add("d-none");

            /**restlichen Prüfverläufe ausblenden */
            document.getElementById("PrüfverlaufDritt1.2").classList.add("d-none");

            btnAusschlussGruendeBlock.classList.remove("d-none");

            /**Endergebnis einblenden */


        });
      });

      btnAusschlussGruendeBlock.addEventListener('click', function(event){
        ausschlussTextBlock.classList.remove("d-none");
        paragListe.classList.remove("d-none");
        showTextblöckeUndPraragrListe();
        this.classList.add("d-none");
      });
      
    //Ausblenden paragraphen Liste und Textblöcke, wenn Auswahl eines Textblocks, ausgewählten Texblock einblenden + reset Button + Ende der Prüfung
    //Wenn "Keiner der unter (1) genannten Titel/Status" ausgewählt wird -> alles bleibt eingeblendet -> nächster Prüfblock öffnet sich
    function hideTextBlöcke(){
      const Blöcke = document.querySelectorAll("#ausschlussGruendeBlock .row");
      Blöcke.forEach(function(block){
        block.classList.add("d-none");
        if (block.querySelector("input[type=radio]").checked){
          block.classList.remove("d-none");
          };
          btnAusschlussGruendeBlock.classList.remove("d-none");
        });
    };

    function showTextblöckeUndPraragrListe(){
      const Blöcke = document.querySelectorAll("#ausschlussGruendeBlock .row");
      Blöcke.forEach(function(block){
        block.classList.remove("d-none");
      });
    };

    ausschlussGruendeBlockRadios.forEach(function(radio){
      radio.addEventListener('click', function(){
        if(radio.value !== "PrüfDritt1"){
          hideTextBlöcke();
          paragListe.classList.add('d-none');

          /**Endergebnis einblenden */

        } else{
          console.log("Prüfung dooferweise nicht zu Ende. WEITER GEHTS, YIPII!")
          document.getElementById("PrüfverlaufDritt12").classList.remove("d-none");
        }
        /*
        if(radio.value !== "PrüfDritt1"){
          console.log("funktioniert");
        }else{
          console.log("scheiße")}
        */
      });
    });

    //Prfüng 2
    function hideTextBlöcke2(){
      const Blöcke = document.querySelectorAll("#PrüfverlaufDritt12 .row");
      Blöcke.forEach(function(block){
        block.classList.add("d-none");
        if (block.querySelector("input[type=radio]").checked){
          block.classList.remove("d-none");
          };
        });
    };

    document.querySelectorAll("#PrüfverlaufDritt12 input[type=radio]").forEach(function(radio){
      radio.addEventListener('click', function(){
        if(radio.value !== "weiter"){
          hideTextBlöcke2();
          document.getElementById("PrüfverlaufDritt221").classList.add("d-none");
          /**Endergebnis einblenden */

        } else{
          console.log("Prüfung dooferweise auch hier nicht zu Ende. WEITER GEHTS, VAMOS!")
          document.getElementById("PrüfverlaufDritt221").classList.remove("d-none");
        }
        /*
        if(radio.value !== "PrüfDritt1"){
          console.log("funktioniert");
        }else{
          console.log("scheiße")}
        */
      });
    });

