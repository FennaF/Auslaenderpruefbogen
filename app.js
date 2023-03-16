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
        //bei klick auf radio buttons ->funktion die alle rows ausblendet in denen der radio button nicht auf Ja steht
        document.querySelectorAll("#PrüfverlaufDritt21Block input[type=radio]").forEach(function(radio){
          radio.addEventListener('click', function(){
            if(radio.value === "Ja"){
              hideTextBlöcke21();
              checkbox21.checked = false;
              document.getElementById("PrüfverlaufDritt21chkb").classList.add("d-none");

              document.getElementById("PrüfverlaufDritt221").classList.add("d-none");
              document.getElementById("PrüfverlaufDritt222").classList.add("d-none");
              document.getElementById("PrüfverlaufDritt223").classList.add("d-none");
              document.getElementById("PrüfverlaufDritt224").classList.add("d-none");
              document.getElementById("PrüfverlaufDritt225").classList.add("d-none");
              document.getElementById("PrüfverlaufDritt226").classList.add("d-none");
            }else{
              showTextBlöcke21();
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
            document.querySelector("#btnPrüfverlaufDritt21").classList.remove("d-none");
        };

        function showTextBlöcke21(){
          const blöcke = document.querySelectorAll("#PrüfverlaufDritt21Block .row");
          blöcke.forEach(function(block){
            block.classList.remove("d-none");
            document.querySelector("#btnPrüfverlaufDritt21").classList.add("d-none");
          });
        }

                  //Button um die versteckten Elemente wieder einzublenden
                  document.querySelector("#btnPrüfverlaufDritt21").addEventListener('click', function(event){
                    showTextBlöcke21();
                    document.querySelector("#PrüfverlaufDritt21chkb").classList.remove("d-none");
                    this.classList.add("d-none");
                  });
          //bei Auswahl des letzten Elements in dem Prüfblock, welches als einziges eine checkbox ist 
          //-> alle rows des Prüfblocks 2.1 einblenden und alle radio buttons in auf Nein setzten und nächsten Prüfschritt einblenden
          const checkbox21 = document.querySelector("#PrüfverlaufDritt21Block9")
          checkbox21.addEventListener("click", function(){
            if(checkbox21.checked){
              showTextBlöcke21();
              setRadios21ToNein();
              document.querySelector("#PrüfverlaufDritt221").classList.remove("d-none");
            };
            console.log(checkbox21.checked);
          });

          function setRadios21ToNein(){
            const blöcke = document.querySelectorAll("#PrüfverlaufDritt21Block .row");
            blöcke.forEach(function(block){
              block.querySelectorAll("input[type=radio]").forEach(function(radio){
                if(radio.value === ""){
                  radio.checked = true;
                };
              });
            });
          };

      //Prüfung221
      const PrüfverlaufDritt221BlockARadios = document.querySelectorAll("#PrüfverlaufDritt221BlockA input[type=radio]")
      const PrüfverlaufDritt221BlockBRadios = document.querySelectorAll("#PrüfverlaufDritt221BlockB input[type=radio]")
      const PrüfverlaufDritt221BlockA = document.querySelector("#PrüfverlaufDritt221BlockA")
      const PrüfverlaufDritt221BlockB = document.querySelector("#PrüfverlaufDritt221BlockB")
      const btnEinblenden221 = document.querySelector("#btnPrüfverlaufDritt221")

      const PrüfverlaufDritt222 = document.getElementById("PrüfverlaufDritt222")
      const PrüfverlaufDritt223 = document.getElementById("PrüfverlaufDritt223")
      const PrüfverlaufDritt224 = document.getElementById("PrüfverlaufDritt224")
      const PrüfverlaufDritt225 = document.getElementById("PrüfverlaufDritt225")
      const PrüfverlaufDritt226 = document.getElementById("PrüfverlaufDritt226")

      PrüfverlaufDritt221BlockARadios.forEach(function(radio){
        radio.addEventListener("click", function(){
          console.log("klappt");
          if(radio.value === "Ja"){
            PrüfverlaufDritt221BlockB.classList.add("d-none");
            btnEinblenden221.classList.remove("d-none");
            PrüfverlaufDritt222.classList.remove("d-none");

            PrüfverlaufDritt223.classList.add("d-none")
            PrüfverlaufDritt224.classList.add("d-none")
            PrüfverlaufDritt225.classList.add("d-none")
            PrüfverlaufDritt226.classList.add("d-none")

          } else{
            PrüfverlaufDritt221BlockB.classList.remove("d-none");
            btnEinblenden221.classList.add("d-none");

            PrüfverlaufDritt222.classList.add("d-none")
            PrüfverlaufDritt223.classList.add("d-none")
            PrüfverlaufDritt224.classList.add("d-none")
            PrüfverlaufDritt225.classList.add("d-none")
            PrüfverlaufDritt226.classList.add("d-none")
          }
        });
      });

      PrüfverlaufDritt221BlockBRadios.forEach(function(radio){
        radio.addEventListener("click", function(){
          if(radio.value === "Ja"){
            PrüfverlaufDritt221BlockA.classList.add("d-none")
            BlockBRowsHide();
          }
        })
      })

      function BlockBRowsHide(radioSetToJa){
        console.log(radioSetToJa)
      }

        //Button um die versteckten Elemente wieder einzublenden
        btnEinblenden221.addEventListener("click", function(){
          PrüfverlaufDritt221BlockA.classList.remove("d-none")
          PrüfverlaufDritt221BlockB.classList.remove("d-none")

          PrüfverlaufDritt222.classList.add("d-none")
          PrüfverlaufDritt223.classList.add("d-none")
          PrüfverlaufDritt224.classList.add("d-none")
          PrüfverlaufDritt225.classList.add("d-none")
          PrüfverlaufDritt226.classList.add("d-none")

          this.classList.add("d-none")
        })


      
      
      

