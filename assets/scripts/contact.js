const FORM = document.querySelector(".footer__form");
const FORM_INPUT_NAME = FORM.querySelector("#inputName");
const FORM_INPUT_EMAIL = FORM.querySelector("#inputEmail");
const FORM_INPUT_TLF = FORM.querySelector("#inputNumber");

FORM.addEventListener("submit", function (event) {
    event.preventDefault();

    if (FORM_INPUT_NAME.value == ""){
        alert("navn er ikke udfyldt")
    }
    else if (FORM_INPUT_TLF.value == ""){
        alert("tlf er ikke udfyldt")
    }
    else if (FORM_INPUT_EMAIL.value == ""){
        alert("email ikke udfyldt")
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

if(URL_OBJECT.searchParams.get("navn")){
    let userName = URL_OBJECT.searchParams.get("navn")
    let userPhone = URL_OBJECT.searchParams.get("tlf")
    let thankYouMessage = `Hej ${userName}. Vi ringer dig op på ${userPhone} snarest muligt`

    FORM.innerHTML = thankYouMessage
}

