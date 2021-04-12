//var solde = 500000; 

var tabNumeros = ["770000001","770000002", "770000003", "770000004","770000005"];
var tabSoldes = [5000000, 1000000, 20000,3000000, 5000000];
var tabCodes = ["0001","0002","0003","0004","0005"];
var numCourant;


 function menu() {
   var textMenu = ""+
    "1 : Solde du compte\n"+
    "2 : Transfert d'arent\n"+
    "3 : Paiement facture\n"+
    "4 : Option";
    
    var rep = window.prompt(textMenu);
    return rep;

 }

 function afficheSolde(num) {
     var indice = tabNumeros.indexOf(num);
     if(indice != -1){
         var code = window.prompt("Donnez votre code");
         if(code ==tabCode[indice]){
             alert("Votre solde est de : "+tabSoldes[indice]);
         }
     }
     else{
         alert("Votre numero n'existe pas");
     }
}

 function main(){
     var rep = menu();
     var numCourant = document.getElementById("num").value;
     switch(rep){

         case "1":
             afficheSolde(numCourant);
             break;
     }
 }



 /*function surface(){
    var rayon = window.prompt("Veuillez saisir la valeur du rayon : ");
    var surface = 3.14*rayon*rayon
    alert("La surface du cercle est de : " + surface);
 
  }
 
  function afficheType() {
       var longueur= 16;
       var prenom ;
       alert(typeof(prenom));
  }*/