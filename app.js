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
            document.getElementById("PrüfverlaufDritt12").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt21").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt221").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt222").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt223").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt224").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt225").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt226").classList.add("d-none");

            btnAusschlussGruendeBlock.classList.remove("d-none");

            /**Endergebnis einblenden */

        });
      });

      //Button um die versteckten Elemente wieder einzublenden
      btnAusschlussGruendeBlock.addEventListener('click', function(event){
        ausschlussTextBlock.classList.remove("d-none");
        paragListe.classList.remove("d-none");
        showTextblöcke();
        this.classList.add("d-none");
      });
      
    //Ausblenden paragraphen Liste und Textblöcke, wenn Auswahl eines Textblocks, ausgewählten Texblock einblenden + reset Button + Ende der Prüfung
    //Wenn "Keiner der unter (1) genannten Titel/Status" ausgewählt wird -> alles bleibt eingeblendet -> nächster Prüfblock öffnet sich
    ausschlussGruendeBlockRadios.forEach(function(radio){
      radio.addEventListener('click', function(){
        if(radio.value !== "PrüfDritt1"){
          hideTextBlöcke();
          paragListe.classList.add('d-none');

            //restlichen Prüfverläufe ausblenden 
            document.getElementById("PrüfverlaufDritt12").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt21").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt221").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt222").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt223").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt224").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt225").classList.add("d-none");
            document.getElementById("PrüfverlaufDritt226").classList.add("d-none");

          /**Endergebnis einblenden */

        } else{
          document.querySelector("#PrüfverlaufDritt12").classList.remove("d-none");
          //einzelnen Elemente aus den restlichen Prüfschritten wieder einblenden, sicherhaltshalber, falls die mal ausgeblendet wurden
          showTextblöcke12();
        }
      });
    });

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

    function showTextblöcke(){
      const Blöcke = document.querySelectorAll("#ausschlussGruendeBlock .row");
      Blöcke.forEach(function(block){
        block.classList.remove("d-none");
      });
    };


    //Prfüng 12
    document.querySelectorAll("#PrüfverlaufDritt12 input[type=radio]").forEach(function(radio){
      radio.addEventListener('click', function(){
        if(radio.value !== "weiter"){
          hideTextBlöcke12();
          //cheat, sonst wird die erste row immer ausgeblendet, nerviger driss hier
          if(radio.parentElement.parentElement.classList.contains("col")){
            document.querySelector("#PrüfverlaufDritt12 .row").classList.remove("d-none");
          };
          document.querySelector("#btnPrüfverlaufDritt12").classList.remove("d-none");
          //restlichen Prüfverläufe ausblenden 
          document.getElementById("PrüfverlaufDritt21").classList.add("d-none");
          document.getElementById("PrüfverlaufDritt221").classList.add("d-none");
          document.getElementById("PrüfverlaufDritt222").classList.add("d-none");
          document.getElementById("PrüfverlaufDritt223").classList.add("d-none");
          document.getElementById("PrüfverlaufDritt224").classList.add("d-none");
          document.getElementById("PrüfverlaufDritt225").classList.add("d-none");
          document.getElementById("PrüfverlaufDritt226").classList.add("d-none");
          /**Endergebnis einblenden */

        } else{
          document.getElementById("PrüfverlaufDritt21").classList.remove("d-none");
          showTextblöcke12();
          showTextBlöcke21();
        }
      });
    });

    function hideTextBlöcke12(){
      const Blöcke = document.querySelectorAll("#PrüfverlaufDritt12 .row");
      Blöcke.forEach(function(block){
          if(!block.querySelector("input[type]").checked){
            block.classList.add("d-none");
           };
    });
  };

    function showTextblöcke12(){
      const Blöcke = document.querySelectorAll("#PrüfverlaufDritt12 .row");
      Blöcke.forEach(function(block){
        block.classList.remove("d-none");
      });
    };

          //Button um die versteckten Elemente wieder einzublenden
          document.querySelector("#btnPrüfverlaufDritt12").addEventListener('click', function(event){
            showTextblöcke12();
            this.classList.add("d-none");
          });



    //Prüfung 21
        //bei klick ->funktion die alle nicht ja geklickten rows ausblende
        document.querySelectorAll("#PrüfverlaufDritt21Block input[type=radio]").forEach(function(radio){
          radio.addEventListener('click', function(){
            if(radio.value === "Ja"){
              hideTextBlöcke21();
            };
          });
        });

        function hideTextBlöcke21(){
          const blöcke = document.querySelectorAll("#PrüfverlaufDritt21Block .row");
            blöcke.forEach(function(block){
              let Status = true;
              block.querySelectorAll("input[type=radio]").forEach(function(radio){
                if(radio.checked && radio.value === "Ja"){
                  Status = false;
                };
                if(Status){
                  block.classList.add("d-none");
                };
              });
            });
            document.querySelector("#btnPrüfverlaufDritt21").classList.remove("d-none")
        };

        function showTextBlöcke21(){
          const blöcke = document.querySelectorAll("#PrüfverlaufDritt21Block .row");
          blöcke.forEach(function(block){

            block.classList.remove("d-none");
          });
        }

                  //Button um die versteckten Elemente wieder einzublenden
                  document.querySelector("#btnPrüfverlaufDritt21").addEventListener('click', function(event){
                    showTextBlöcke21();
                    this.classList.add("d-none");
                  });
