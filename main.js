
// faire un don
const euro = document.querySelectorAll(".containerDon div div");
const boutons = document.querySelectorAll('#button > button');
for(const i in euro){
    euro[i].onclick = function (){
        euro[0].setAttribute('id','');
        euro[1].setAttribute('id','');
        euro[2].setAttribute('id','');
        euro[i].setAttribute('id','caseGreen');
        let a = "";
        if(i== 0){
            a=" 10€";
        }else if(i == 1){
            a = " 20€";
        }else{
            a = " 50€";
        }
        document.getElementById('don').innerHTML= " "+a;
    }
}

for(const i in boutons){
    boutons[i].onclick = function () {
        boutons[0].setAttribute('id','')
        boutons[1].setAttribute('id','')
        boutons[2].setAttribute('id','')
        boutons[i].setAttribute('id',"green")
        let a = "";
        if(i== 0){
            a="";
        }else if(i == 1){
            a = "/mois";
        }else{
            a = "/ans";
        }
        document.getElementById('periode').innerHTML= " "+a;
    }
}

// histoire de réussite changer photo

const photo = document.querySelectorAll('.grid > div');
for(let i = 1 ; i<=3 ;i++){
    photo[i].onclick = function (){
        document.querySelector('.animaux').style.backgroundImage = window.getComputedStyle(photo[i]).backgroundImage;
        photo[1].style.border = "none";
        photo[2].style.border = "none";
        photo[3].style.border = "none";
        photo[i].style.border = "solid 7px #3AA331";
        photo[i].style.borderRadius = "25px";
        if(i=== 1){
            document.getElementById('nom').innerHTML="Luna";
        document.getElementById('details').innerHTML="Trouvée dans la rue avec une patte cassée, Luna a été soignée et  a retrouvé sa joie de vivre. elle coule maintenant des jours heureux dans sa nouvelle famille";
        document.getElementById('light').innerHTML="Janvier 2024";
        }else if (i === 2){
            document.getElementById('nom').innerHTML="Oscar";
            document.getElementById('details').innerHTML="Abandonné dans une forêt, Oscar était terrifié par les humains. Après des mois de patience et d’amour, il est devenu un chat confiant et affectueux.";
            document.getElementById('light').innerHTML="Mars 2024";
        }else if (i === 3){
            document.getElementById('nom').innerHTML="Max";
            document.getElementById('details').innerHTML="Sauvé d'un laboratoire, Max n'avait jamais connu l'amour. Aujourd'hui, il profite de sa liberté et fait le bonheur de sa famille d'accueil.";
            document.getElementById('light').innerHTML="Février 2024";
        }

    }
}