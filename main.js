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