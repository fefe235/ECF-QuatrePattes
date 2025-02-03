//menu burger
function burger(){
    document.getElementById('cacher').style.display = "none"
    document.getElementById('header').style.height="30vh"
    document.getElementById('header').innerHTML = " <img src='images/xW.png' id ='x'>" + document.getElementById('header').innerHTML

    document.getElementById('nav').innerHTML = "<a href='index.html'>Acceuil</a> <a href='contact.html'>Contact</a> <a href='#encre' id='donner'><button><img src='images/heartW 2.png' alt='petit coeur'>Faire un don</button></a>";
    document.getElementById('nav').style.display = "flex";
    document.getElementById('header').style.display = "flex";
    document.getElementById('header').style.flexDirection = "row-reverse";
    document.getElementById('header').style.alignItems = "flex-start";
    document.getElementById('nav').style.flexDirection = "column";
    document.getElementById('nav').style.alignSelf="flex-end"
    document.getElementById('logoTitre').style.position="relative"
    document.getElementById('logoTitre').style.left="-170px"
    document.getElementById('donner').style.display= "flex";
    document.getElementById('x').onclick= function(){
        document.getElementById('x').style.display = "none"
    document.getElementById('logoTitre').style.position="static"
    document.getElementById('nav').style.alignSelf="flex-start"
    document.getElementById('nav').innerHTML = "";
    document.getElementById('cacher').style.display="flex";
    document.getElementById('header').style.height="8vh"
    document.getElementById('header').style.flexDirection = "row";
    document.getElementById('nav').style.flexDirection = "row";
    }

}
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