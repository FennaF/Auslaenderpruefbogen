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
const ErgebnisÜberschirft = document.querySelector("#ErgebnisÜberschrift")
const Ergebnis11 = document.querySelector("#ErgebnisDritt11")
const Ergebnis12 = document.querySelector("#ErgebnisDritt12")
const Ergebnis221 = document.querySelector("#ErgebnisDritt221")
const Ergebnis222 = document.querySelector("#ErgebnisDritt222")
const Ergebnis223 = document.querySelector("#ErgebnisDritt223")
const Ergebnis224 = document.querySelector("#ErgebnisDritt224")
const Ergebnis225 = document.querySelector("#ErgebnisDritt225")
const Ergebnis226 = document.querySelector("#ErgebnisDritt226")
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

            /**Endergebnis einblenden + übrigen Ergebnisse ausblenden */
            ErgebnisÜberschirft.classList.remove("d-none")
            Ergebnis11.classList.remove("d-none")

            Ergebnis12.classList.add("d-none")
            Ergebnis221.classList.add("d-none")
            Ergebnis222.classList.add("d-none")
            Ergebnis223.classList.add("d-none")
            Ergebnis224.classList.add("d-none")
            Ergebnis225.classList.add("d-none")
            Ergebnis226.classList.add("d-none")
        });
      });

      //Button um die versteckten Elemente wieder einzublenden
      btnAusschlussGruendeBlock.addEventListener('click', function(event){
        ausschlussTextBlock.classList.remove("d-none");
        paragListe.classList.remove("d-none");
        showTextblöcke();

        ErgebnisÜberschirft.classList.add("d-none")
        Ergebnis11.classList.add("d-none")

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

          /**Endergebnis einblenden + übrigen Ergebnisse ausblenden*/
          ErgebnisÜberschirft.classList.remove("d-none")
          Ergebnis11.classList.remove("d-none")

          Ergebnis12.classList.add("d-none")
          Ergebnis221.classList.add("d-none")
          Ergebnis222.classList.add("d-none")
          Ergebnis223.classList.add("d-none")
          Ergebnis224.classList.add("d-none")
          Ergebnis225.classList.add("d-none")
          Ergebnis226.classList.add("d-none")
        } else{
          document.querySelector("#PrüfverlaufDritt12").classList.remove("d-none");
          //einzelnen Elemente aus den restlichen Prüfschritten wieder einblenden, sicherhaltshalber, falls die mal ausgeblendet wurden
          showTextblöcke12();

          ErgebnisÜberschirft.classList.add("d-none")
          Ergebnis11.classList.add("d-none")
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
          ErgebnisÜberschirft.classList.remove("d-none")
          Ergebnis12.classList.remove("d-none")

          Ergebnis11.classList.add("d-none")
          Ergebnis221.classList.add("d-none")
          Ergebnis222.classList.add("d-none")
          Ergebnis223.classList.add("d-none")
          Ergebnis224.classList.add("d-none")
          Ergebnis225.classList.add("d-none")
          Ergebnis226.classList.add("d-none")

        } else{
          document.getElementById("PrüfverlaufDritt21").classList.remove("d-none");
          showTextblöcke12();
          showTextBlöcke21();

          ErgebnisÜberschirft.classList.add("d-none")
          Ergebnis12.classList.add("d-none")
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
            ErgebnisÜberschirft.classList.add("d-none")
            Ergebnis12.classList.add("d-none")
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

              ErgebnisÜberschirft.classList.remove("d-none")
              Ergebnis11.classList.remove("d-none")

              Ergebnis12.classList.add("d-none")
              Ergebnis221.classList.add("d-none")
              Ergebnis222.classList.add("d-none")
              Ergebnis223.classList.add("d-none")
              Ergebnis224.classList.add("d-none")
              Ergebnis225.classList.add("d-none")
              Ergebnis226.classList.add("d-none")
            }else{
              showTextBlöcke21();
              ErgebnisÜberschirft.classList.add("d-none")
              Ergebnis11.classList.add("d-none")
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
                    ErgebnisÜberschirft.classList.add("d-none")
                    Ergebnis11.classList.add("d-none")
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
          if(radio.value === "Ja"){
            PrüfverlaufDritt221BlockB.classList.add("d-none");
            btnEinblenden221.classList.remove("d-none");
            checkbox221.checked = false

            //restlichen Prüfverläufe ausblenden
            PrüfverlaufDritt222.classList.remove("d-none")
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
            BlockBRowsHide(this);
            btnEinblenden221.classList.remove("d-none");
            checkbox221.checked = false
            //Endergebnis einblenden + übrigen Ergebnisse ausblenden
            ErgebnisÜberschirft.classList.remove("d-none")
            Ergebnis11.classList.add("d-none")
            Ergebnis12.classList.add("d-none")
            Ergebnis221.classList.remove("d-none")
            Ergebnis222.classList.add("d-none")
            Ergebnis223.classList.add("d-none")
            Ergebnis224.classList.add("d-none")
            Ergebnis225.classList.add("d-none")
            Ergebnis226.classList.add("d-none")

          }else{
            PrüfverlaufDritt221BlockA.classList.remove("d-none")
            BlockBRowsShow();
            ErgebnisÜberschirft.classList.add("d-none")
            Ergebnis221.classList.add("d-none")

            btnEinblenden221.classList.add("d-none");
            PrüfverlaufDritt222.classList.add("d-none");
            PrüfverlaufDritt223.classList.add("d-none")
            PrüfverlaufDritt224.classList.add("d-none")
            PrüfverlaufDritt225.classList.add("d-none")
            PrüfverlaufDritt226.classList.add("d-none")
          }
        })
      })

      function BlockBRowsHide(radioSetToJa){
        console.log(radioSetToJa.id)
        PrüfverlaufDritt221BlockB.querySelectorAll(".row").forEach(function(row){
          row.classList.add("d-none")
          row.querySelectorAll("input[type=radio]").forEach(function(radio){
            if(radio.id === radioSetToJa.id){
              row.classList.remove("d-none")
            }
          })
        })
      }

      function BlockBRowsShow(){
        PrüfverlaufDritt221BlockB.querySelectorAll(".row").forEach(function(row){
          row.classList.remove("d-none");
        })
      }

      const checkbox221 = document.querySelector("#Dritt221chk")
      checkbox221.addEventListener("click", function(){
        if(checkbox221.checked){
          PrüfverlaufDritt221BlockA.classList.remove("d-none")
          BlockBRowsShow()
          document.querySelectorAll("#PrüfverlaufDritt221 input[type=radio]").forEach(function(radio){
            if(radio.value === ""){
              radio.checked = true
            }
          })
          PrüfverlaufDritt222.classList.remove("d-none");
        }
      })
        //Button um die versteckten Elemente wieder einzublenden
        btnEinblenden221.addEventListener("click", function(){
          PrüfverlaufDritt221BlockA.classList.remove("d-none")
          PrüfverlaufDritt221BlockB.classList.remove("d-none")
          BlockBRowsShow()
            //Endergebnis einblenden + übrigen Ergebnisse ausblenden
            ErgebnisÜberschirft.classList.add	("d-none")
            Ergebnis11.classList.add("d-none")
            Ergebnis12.classList.add("d-none")
            Ergebnis221.classList.add("d-none")
            Ergebnis222.classList.add("d-none")
            Ergebnis223.classList.add("d-none")
            Ergebnis224.classList.add("d-none")
            Ergebnis225.classList.add("d-none")
            Ergebnis226.classList.add("d-none")

          this.classList.add("d-none")
        })

        //Prüfung222
        const Dritt222 = document.querySelectorAll("#Dritt222 input[type=radio]")
        Dritt222.forEach(function(radio){
          radio.addEventListener("click", function(){
            if(radio.value === "Ja"){
              //Endgergebnis einblenden
            //Endergebnis einblenden + übrigen Ergebnisse ausblenden
            ErgebnisÜberschirft.classList.remove("d-none")
            Ergebnis11.classList.add("d-none")
            Ergebnis12.classList.add("d-none")
            Ergebnis221.classList.add("d-none")
            Ergebnis222.classList.remove("d-none")
            Ergebnis223.classList.add("d-none")
            Ergebnis224.classList.add("d-none")
            Ergebnis225.classList.add("d-none")
            Ergebnis226.classList.add("d-none")

              PrüfverlaufDritt223.classList.add("d-none")
              PrüfverlaufDritt224.classList.add("d-none")
              PrüfverlaufDritt225.classList.add("d-none")
              PrüfverlaufDritt226.classList.add("d-none")
            }else{
              PrüfverlaufDritt223.classList.remove("d-none")
              ErgebnisÜberschirft.classList.add("d-none")
              Ergebnis222.classList.add("d-none")
            }
          })
        })

        //Prüfung 223
        const Dritt223Rows = document.querySelectorAll("#Dritt223 .row")
        const Dritt223Radios = document.querySelectorAll("#Dritt223 input[type=radio]")
        const Dritt223Btn = document.querySelector("#btnDritt223")
        const Dritt223chkb = document.querySelector("#Dritt223chk")

        Dritt223Radios.forEach(function(radio){
          radio.addEventListener("click", function(){
            if(radio.value === "Ja"){
              Dritt223Hide(this)
              Dritt223Btn.classList.remove("d-none")
              Dritt223chkb.checked = false
              PrüfverlaufDritt224.classList.add("d-none")
              PrüfverlaufDritt225.classList.add("d-none")
              PrüfverlaufDritt226.classList.add("d-none")
            //Endergebnis einblenden + übrigen Ergebnisse ausblenden
            ErgebnisÜberschirft.classList.remove("d-none")
            Ergebnis11.classList.add("d-none")
            Ergebnis12.classList.add("d-none")
            Ergebnis221.classList.add("d-none")
            Ergebnis222.classList.add("d-none")
            Ergebnis223.classList.remove("d-none")
            Ergebnis224.classList.add("d-none")
            Ergebnis225.classList.add("d-none")
            Ergebnis226.classList.add("d-none")

            } else {
              Dritt223Show()
              Dritt223Btn.classList.add("d-none")
              ErgebnisÜberschirft.classList.add("d-none")
              Ergebnis223.classList.add("d-none")
            }
          })
        })

        function Dritt223Hide(clickedRadio){
          Dritt223Rows.forEach(function(row){
            row.classList.add("d-none")
            row.querySelectorAll("input[type=radio]").forEach(function(radio){
              if(radio.id === clickedRadio.id){
                row.classList.remove("d-none")
              }
            })
          })
        }

        function Dritt223Show(){
          Dritt223Rows.forEach(function(row){
            row.classList.remove("d-none")
          })
        }

        Dritt223Btn.addEventListener("click", function(){
          Dritt223Show()
            //Endergebnis einblenden + übrigen Ergebnisse ausblenden
            ErgebnisÜberschirft.classList.add("d-none")
            Ergebnis11.classList.add("d-none")
            Ergebnis12.classList.add("d-none")
            Ergebnis221.classList.add("d-none")
            Ergebnis222.classList.add("d-none")
            Ergebnis223.classList.add("d-none")
            Ergebnis224.classList.add("d-none")
            Ergebnis225.classList.add("d-none")
            Ergebnis226.classList.add("d-none")
          this.classList.add("d-none")
        })

        Dritt223chkb.addEventListener("click", function(){
          if(Dritt223chkb.checked){
            Dritt223Radios.forEach(function(radio){
              if(radio.value === ""){
                radio.checked = true
              }
            })
            PrüfverlaufDritt224.classList.remove("d-none")
          }
        })

        //Prüfung 224
        const Dritt224Rows = document.querySelectorAll("#Dritt224 .row")
        const Dritt224Radios = document.querySelectorAll("#Dritt224 input[type=radio]")
        const Dritt224Btn = document.querySelector("#btnDritt224")
        const Dritt224chkb = document.querySelector("#Dritt224chk")

        Dritt224Radios.forEach(function(radio){
          radio.addEventListener("click", function(){
            if(radio.value === "Ja"){
              Dritt224Hide(this)
              Dritt224Btn.classList.remove("d-none")
              Dritt224chkb.checked = false

              PrüfverlaufDritt225.classList.add("d-none")
              PrüfverlaufDritt226.classList.add("d-none")
              //Endergebnis einblenden + übrigen Ergebnisse ausblenden
            ErgebnisÜberschirft.classList.remove("d-none")
            Ergebnis11.classList.add("d-none")
            Ergebnis12.classList.add("d-none")
            Ergebnis221.classList.add("d-none")
            Ergebnis222.classList.add("d-none")
            Ergebnis223.classList.add("d-none")
            Ergebnis224.classList.remove("d-none")
            Ergebnis225.classList.add("d-none")
            Ergebnis226.classList.add("d-none")

            } else {
              Dritt224Show()
              Dritt224Btn.classList.add("d-none")
              ErgebnisÜberschirft.classList.add("d-none")
              Ergebnis224.classList.add("d-none")
            }
          })
        })

        function Dritt224Hide(clickedRadio){
          Dritt224Rows.forEach(function(row){
            row.classList.add("d-none")
            row.querySelectorAll("input[type=radio]").forEach(function(radio){
              if(radio.id === clickedRadio.id){
                row.classList.remove("d-none")
              }
            })
          })
        }

        function Dritt224Show(){
          Dritt224Rows.forEach(function(row){
            row.classList.remove("d-none")
          })
        }

        Dritt224Btn.addEventListener("click", function(){
          Dritt224Show()
          this.classList.add("d-none")
          ErgebnisÜberschirft.classList.add("d-none")
          Ergebnis224.classList.add("d-none")
        })

        Dritt224chkb.addEventListener("click", function(){
          if(Dritt224chkb.checked){
            Dritt224Radios.forEach(function(radio){
              if(radio.value === ""){
                radio.checked = true
              }
            })
            PrüfverlaufDritt225.classList.remove("d-none")
          }
        })

        //Prüfung 225
        const Dritt225Rows = document.querySelectorAll("#Dritt225 .row")
        const Dritt225Radios = document.querySelectorAll("#Dritt225 input[type=radio]")
        const Dritt225Btn = document.querySelector("#btnDritt225")
        const Dritt225chkb = document.querySelector("#Dritt225chk")

        Dritt225Radios.forEach(function(radio){
          radio.addEventListener("click", function(){
            if(radio.value === "Ja"){
              Dritt225Hide(this)
              Dritt225Btn.classList.remove("d-none")
              Dritt225chkb.checked = false

              PrüfverlaufDritt226.classList.add("d-none")
            //Endergebnis einblenden + übrigen Ergebnisse ausblenden
            ErgebnisÜberschirft.classList.remove("d-none")
            Ergebnis11.classList.add("d-none")
            Ergebnis12.classList.add("d-none")
            Ergebnis221.classList.add("d-none")
            Ergebnis222.classList.add("d-none")
            Ergebnis223.classList.add("d-none")
            Ergebnis224.classList.add("d-none")
            Ergebnis225.classList.remove("d-none")
            Ergebnis226.classList.add("d-none")

            } else {
              Dritt225Show()
              Dritt225Btn.classList.add("d-none")
              Ergebnis225.classList.add("d-none")
              ErgebnisÜberschirft.classList.add("d-none")
            }
          })
        })

        function Dritt225Hide(clickedRadio){
          Dritt225Rows.forEach(function(row){
            row.classList.add("d-none")
            row.querySelectorAll("input[type=radio]").forEach(function(radio){
              if(radio.id === clickedRadio.id){
                row.classList.remove("d-none")
              }
            })
          })
        }

        function Dritt225Show(){
          Dritt225Rows.forEach(function(row){
            row.classList.remove("d-none")
          })
        }

        Dritt225Btn.addEventListener("click", function(){
          Dritt225Show()
          this.classList.add("d-none")
          Ergebnis225.classList.add("d-none")
          ErgebnisÜberschirft.classList.add("d-none")
        })

        Dritt225chkb.addEventListener("click", function(){
          if(Dritt225chkb.checked){
            Dritt225Radios.forEach(function(radio){
              if(radio.value === ""){
                radio.checked = true
              }
            })
            PrüfverlaufDritt226.classList.remove("d-none")
          }
        })

      //Prüfung 226
        const Dritt226Rows = document.querySelectorAll("#Dritt226 .row")
        const Dritt226Radios = document.querySelectorAll("#Dritt226 input[type=radio]")
        const Dritt226Btn = document.querySelector("#btnDritt226")
        const Dritt226chkb = document.querySelector("#Dritt226chk")

        Dritt226Radios.forEach(function(radio){
          radio.addEventListener("click", function(){
            if(radio.value === "Ja"){
              Dritt226Hide(this)
              Dritt226Btn.classList.remove("d-none")
              Dritt226chkb.checked = false
            //Endergebnis einblenden + übrigen Ergebnisse ausblenden
            ErgebnisÜberschirft.classList.remove("d-none")
            Ergebnis11.classList.add("d-none")
            Ergebnis12.classList.add("d-none")
            Ergebnis222.classList.add("d-none")
            Ergebnis221.classList.add("d-none")
            Ergebnis224.classList.add("d-none")
            Ergebnis223.classList.add("d-none")
            Ergebnis226.classList.remove("d-none")
            Ergebnis225.classList.add("d-none")

            } else {
              Dritt226Show()
              Dritt226Btn.classList.add("d-none")
              Ergebnis226.classList.add("d-none")
              ErgebnisÜberschirft.classList.add("d-none")

            }
          })
        })

        function Dritt226Hide(clickedRadio){
          Dritt226Rows.forEach(function(row){
            row.classList.add("d-none")
            row.querySelectorAll("input[type=radio]").forEach(function(radio){
              if(radio.id === clickedRadio.id){
                row.classList.remove("d-none")
              }
            })
          })
        }

        function Dritt226Show(){
          Dritt226Rows.forEach(function(row){
            row.classList.remove("d-none")
          })
        }

        Dritt226Btn.addEventListener("click", function(){
          Dritt226Show()
          this.classList.add("d-none")
          Ergebnis226.classList.add("d-none")
          ErgebnisÜberschirft.add("d-none")
        })

        Dritt226chkb.addEventListener("click", function(){
          if(Dritt226chkb.checked){
            Dritt226Radios.forEach(function(radio){
              if(radio.value === ""){
                radio.checked = true
              }
            })
            //Endergebnis einblenden + übrigen Ergebnisse ausblenden
            ErgebnisÜberschirft.classList.remove("d-none")
            Ergebnis11.classList.add("d-none")
            Ergebnis12.classList.add("d-none")
            Ergebnis222.classList.add("d-none")
            Ergebnis221.classList.add("d-none")
            Ergebnis224.classList.add("d-none")
            Ergebnis223.classList.add("d-none")
            Ergebnis226.classList.add("d-none")
            Ergebnis225.classList.remove("d-none")
          }
        }) 

      
      

