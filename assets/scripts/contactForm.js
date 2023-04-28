(function (){
    const FORM = document.querySelector(".footer__form")

    FORM.addEventListener("submit", submitHandler)

    function validate(element){
        // de lodrette streger tilføjer flere betingelser til samme if sætningen. Kun en af betingelserne skal være true for at ifsætningen går i opfyldlelse.
        if (element.type === "submit" ||  element.type === "button" || element.type === "reset"){
            return
        }

        const FEEDBACK =  element.parentElement.nextSibling.nextSibling
        FEEDBACK.innerText = ""
        //Amber's and er de to && det betyder og. og alle betingelser skal være opfyldt for at ifsætningen går i opfyldelse

        if(element.required && !element.value){
            FEEDBACK.innerText = "❌ Udfyld feltet"
            return
        }
            //nu er if sætningen herunder redundant på grund af if sætningen overfor 
        // if(element.type === "text" && element.required){
        //     if(element.value === ""){
        //     FEEDBACK.innerText = "❌ Udfyld feltet med et navn"
        //     }
        // }

            if(element.type === "email"){
                if(element.value.includes("@") 
                    && element.value.split("@").length === 2){
                        if(element.value.indexOf("@")=== 0 || element.value.indexOf("@") === element.value.length - 1){
                        FEEDBACK.innerText = "❌ Udfyld feltet med en email"  
                        return
                    }
                }
                else {
                    FEEDBACK.innerText = "❌ Udfyld feltet med en email"
                    return
                }
            }

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
    }

    function submitHandler(event){
        event.preventDefault();

        Array.from(event.target).forEach(element => validate(element))
    }
})()