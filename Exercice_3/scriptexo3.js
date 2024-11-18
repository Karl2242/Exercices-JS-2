let formulaire = document.getElementById("leFormulaire")


formulaire.addEventListener("keyup", laValeurRetourner)

function laValeurRetourner() {

alert("Ton email est bien " + formulaire.value)

}