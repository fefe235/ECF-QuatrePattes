//contact-form
function formulaire() {
    const nom = document.getElementById('name');
    const email = document.getElementById('email');
    const sujet = document.getElementById('sujet');
    const msg = document.getElementById('msg');
    const err = document.querySelectorAll('.error');
        let isTrue = true
        for(const i of err){
            i.innerHTML= "";
        }
        if(nom.value === ""){
            isTrue = false
            err[0].innerHTML="entrez votre nom"
        }
        if(!email.value.includes("@")){
            isTrue = false
            err[1].innerHTML="entrez un email valid"
        }
        if(sujet.value === ""){
            isTrue=false
            err[2].innerHTML="choisissez un sujet"
        }
        if(msg.value === ""){
            isTrue = false
            err[3].innerHTML="entrez votre message"
        }
        console.log(isTrue)
        return isTrue;
    }