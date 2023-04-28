const FORM = document.querySelector(".footer__form");
const FORM_INPUT_NAME = FORM.querySelector("#inputName");
const FORM_INPUT_EMAIL = FORM.querySelector("#inputEmail");
const FORM_INPUT_TLF = FORM.querySelector("#inputNumber");

const FORM_SPAN = FORM.querySelectorAll(".form__message");


//viser et fejl kryds hvis feltet ikke er udfyld når man trykker submit
FORM.addEventListener("submit", function (event) {
    event.preventDefault();

    if (FORM_INPUT_NAME.value == ""){
        FORM_SPAN[0].innerHTML = "❌"
    }
    else if (FORM_INPUT_EMAIL.value == ""){
        FORM_SPAN[1].innerHTML = "❌"
    } 
    else if (FORM_INPUT_TLF.value == ""){
        FORM_SPAN[2].innerHTML = "❌"
    }
    else{
        FORM.submit()
    }
    //timer funktion hvis man har brug for det. Se evt.video m. Niels d.26/4
    // window.setTimeout(function(){
    //     FORM.submit()
    // }, 3000)
})

//FORMEN ER SENDT
const URL_STRING = window.location.href
const URL_OBJECT = new URL (URL_STRING)

//if sætningen herunder viser en thank you message der bruger informationer fra formen. 
//navn og tlf nummer stammer fra name attributten i input feltet html
if(URL_OBJECT.searchParams.get("navn")){
    let userName = URL_OBJECT.searchParams.get("navn")
    let userPhone = URL_OBJECT.searchParams.get("tlf")
    let thankYouMessage = `Hej ${userName}. Vi ringer dig op på ${userPhone} snarest muligt`

    FORM.innerHTML = thankYouMessage
}

