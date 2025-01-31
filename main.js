
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

// histoire de réussite diaporama photo

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

//quizz

const blocQuestionA = document.querySelectorAll('#questionA > p');
const blocQuestionB = document.querySelectorAll('#questionB > p');
const blocQuestionC = document.querySelectorAll('#questionC > p');

blocQuestionA[0].onclick = function (){
    blocQuestionA[0].innerHTML = "Vrai, les associations utilisent plus de 50% des dons pour leurs frais de fonctionnement";
    faux(blocQuestionA[0],blocQuestionA[1])
}

blocQuestionA[1].onclick = function (){
    blocQuestionA[0].innerHTML = "Faux ! Chez Quatre Pattes, 85% des dons sont directement utilisés pour les animaux. Seuls 15% servent aux frais de fonctionnement essentiels.";
    vrai(blocQuestionA[0],blocQuestionA[1])
}

blocQuestionB[0].onclick = function (){
    blocQuestionB[0].innerHTML = "Faux ! Nous acceuillons tous les animaux, quel que soit leur état de santé. Chaque vie compte !";
    faux(blocQuestionB[0],blocQuestionB[1])
}
blocQuestionB[1].onclick = function (){
    blocQuestionB[0].innerHTML = "Vrai, ils refusent les animaux malades car c'est trop coûteux";
    vrai(blocQuestionB[0],blocQuestionB[1])
}
blocQuestionC[0].onclick = function (){
    blocQuestionC[0].innerHTML = "Faux ! Les besoins sont immenses et constants. Chaque don est précieux pour sauver plus d’animaux.";
    faux(blocQuestionC[0],blocQuestionC[1])
}
blocQuestionC[1].onclick = function (){
    blocQuestionC[0].innerHTML = "Vrai, elles reçoivent beaucoup d'argent des donateurs";
    vrai(blocQuestionC[0],blocQuestionC[1])
}
function faux(elementGauche, elementdroite) {

    elementdroite.remove();
    elementGauche.style.width = "60vw";
    elementGauche.style.height = "20vh";
    elementGauche.style.backgroundColor = "#FFE2E4"; 
    elementGauche.innerHTML = "<img src='images/x.png'>" + elementGauche.innerHTML;

}

function vrai(elementGauche, elementdroite) {

    elementdroite.remove();
    elementGauche.style.width = "60vw";
    elementGauche.style.height = "20vh";
    elementGauche.style.backgroundColor = "#DCFCE7"; 
    elementGauche.innerHTML = "<img src='images/check.png'>" + elementGauche.innerHTML;

}

