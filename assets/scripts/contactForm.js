(function () {
    const FORM = document.querySelector(".footer__form")
    let success

    FORM.addEventListener("submit", submitHandler)

    function validate(element) {
        // de lodrette streger tilføjer flere betingelser til samme if sætningen. Kun en af betingelserne skal være true for at ifsætningen går i opfyldlelse.
        if (element.type === "submit" || element.type === "button" || element.type === "reset") {
            return
        }

        const FEEDBACK = element.parentElement.nextSibling.nextSibling
        const makeFeedback = message => { 
            FEEDBACK.innerText = message
            success = false
        }

        FEEDBACK.innerText = ""
        //Amber's and er de to && det betyder og. og alle betingelser skal være opfyldt for at ifsætningen går i opfyldelse

        if (element.required && !element.value) {
            return makeFeedback("❌ Udfyld feltet")
        }
        //nu er if sætningen herunder redundant på grund af if sætningen overfor 
        // if(element.type === "text" && element.required){
        //     if(element.value === ""){
        //     FEEDBACK.innerText = "❌ Udfyld feltet med et navn"
        //     }
        // }

        if (element.type === "email") {
            if (!includeSymbol(element.value, "@")
                || tooManyAts(element.value)
                || hasIlligalAts(element.value)) {
                return makeFeedback("❌ Udfyld feltet med en email")
            }
        }

        if (element.type === "tel"){
            if(isTooLong(element.value)
            || isTooShort(element.value)
            || !hasLegalCharacters (element.value)){
                return makeFeedback("❌Skriv et gyldigt telefonnummer")
            }
        }

        

        //     if (includeSymbol(element.value, "@")
        //             && !tooManyAts(element.value)) {
        //             if (hasIlligalAts(element.value)) {
        //                 return makeFeedback("❌ Udfyld feltet med en email")
        //             }
        //         }
        //         else {
        //             return makeFeedback ("❌ Udfyld feltet med en email")
        //         }
        // }

        // den under her er mere besværlig end den ovenfor
        //     if (element.type === "email" && element.value) {
        //         if(element.value.includes("@")){
        //             if(element.value.indexOf("@") === 0
        //             || element.value.indexOf("@") === element.value.length - 1){
        //                 FEEDBACK.innerText = "❌ Udfyld feltet med en email"
        //             }

        //         } else {
        //             FEEDBACK.innerText = "❌ Udfyld feltet med en email"
        //         }

        //     }
        if (success)FORM.submit()
    }

    function submitHandler(event) {
        event.preventDefault();
        success = true

        Array.from(event.target).forEach(element => validate(element))
    }
    const includeSymbol = (string, symbol) => string.includes(symbol)
    const tooManyAts = string => string.split("@").length > 2
    const hasIlligalAts = string => string.indexOf("@") === 0 || string.indexOf("@") === string.length - 1
    

    const isTooLong = (string, maxlength = 20) => string.length > maxlength
    const isTooShort = (string, minlength = 3) => string.length < minlength
    const hasLegalCharacters = (string) => /^[0-9+#\*\s]+$/.test(string)
})()