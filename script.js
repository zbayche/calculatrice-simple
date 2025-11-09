const ecran = document.getElementById("ecran");
const boutons = document.querySelectorAll("button");

let affichage = "";

boutons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const valeur = btn.innerText;

    //Réinitiliser l'affichage
    if(valeur === "C"){
      affichage = "";
      ecran.innerText = "0";
      return;
    }

    //calcul du résultat
    if(valeur === "="){
      try{
        const expression = affichage
        .replace(/÷/g, "/")
        .replace(/x/g, "*");

        //Empéche division par zero
        if(expression.includes("/0")){
          ecran.innerText = "Erreur";
          affichage = "";
          return;
        }

        const resultat = eval(expression);
        ecran.innerText = resultat;
        affichage = resultat.toString();
      }catch{
        ecran.innerText = "Erreur";
        affichage = "";
      }
      return;
    }

    //Mise à jour de l'affichage
    affichage += valeur;
    ecran.innerText = affichage;
  });
});
