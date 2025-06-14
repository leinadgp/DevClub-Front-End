const convertButton = document.querySelector("#btn-converter")
const currencySelectDe = document.querySelector("#de-select")
const currencySelectPara = document.querySelector("#para-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector("#input-currency").value
    const currencyValueToConvert = document.querySelector("#preco-de")
    const currencyValueConverted = document.querySelector("#preco-para")
    console.log(currencySelectDe.value);


    const dolarToday = 5.54
    const euroToday = 6.41
    const libraToday = 7.54
    const bitcoinToday = 582993.42
    let   auxiliar = 0

    if (currencySelectDe.value == "real") {  //inicio If real
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue)

        if (currencySelectPara.value == "real") { 
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue)

         }
        if (currencySelectPara.value == "dolar") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"

            }).format(inputCurrencyValue / dolarToday)
        }
        if (currencySelectPara.value == "euro") {
            
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"

            }).format(inputCurrencyValue / euroToday)
        }
        if (currencySelectPara.value == "libra") {
           
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"

            }).format(inputCurrencyValue / libraToday)
        }
        if (currencySelectPara.value == "bitcoin") {
            
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"

            }).format(inputCurrencyValue / bitcoinToday)
        }

    }// fim if real

     if (currencySelectDe.value == "dolar") {  //inicio If dolar
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"

            }).format(inputCurrencyValue)

        if (currencySelectPara.value == "real") { 
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue*dolarToday)

         }
        if (currencySelectPara.value == "dolar") {

            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"

            }).format(inputCurrencyValue)
        }
        if (currencySelectPara.value == "euro") {
            auxiliar = inputCurrencyValue*dolarToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"

            }).format(auxiliar / euroToday)
        }
        if (currencySelectPara.value == "libra") {
            auxiliar = inputCurrencyValue*dolarToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"

            }).format(auxiliar / libraToday)
        }
        if (currencySelectPara.value == "bitcoin") {
             auxiliar = inputCurrencyValue*dolarToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"

            }).format(auxiliar / bitcoinToday)
        }

    }// fim if dolar


 if (currencySelectDe.value == "euro") {  //inicio If euro
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"

            }).format(inputCurrencyValue)

        if (currencySelectPara.value == "real") { 
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue*euroToday)

         }
        if (currencySelectPara.value == "dolar") {
            auxiliar = inputCurrencyValue*euroToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"

            }).format(auxiliar/dolarToday)
        }
        if (currencySelectPara.value == "euro") {
           
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"

            }).format(inputCurrencyValue)
        }
        if (currencySelectPara.value == "libra") {
            auxiliar = inputCurrencyValue*euroToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"

            }).format(auxiliar / libraToday)
        }
        if (currencySelectPara.value == "bitcoin") {
             auxiliar = inputCurrencyValue*euroToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"

            }).format(auxiliar / bitcoinToday)
        }

    }// fim if euro    

 if (currencySelectDe.value == "libra") {  //inicio If Libra
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"

            }).format(inputCurrencyValue)

        if (currencySelectPara.value == "real") { 
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue*libraToday)

         }
        if (currencySelectPara.value == "dolar") {
            auxiliar = inputCurrencyValue*libraToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"

            }).format(auxiliar/dolarToday)
        }
        if (currencySelectPara.value == "euro") {
           auxiliar = inputCurrencyValue*libraToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"

            }).format(auxiliar/euroToday)
        }
        if (currencySelectPara.value == "libra") {
            auxiliar = inputCurrencyValue*euroToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"

            }).format(inputCurrencyValue)
        }
        if (currencySelectPara.value == "bitcoin") {
             auxiliar = inputCurrencyValue*libraToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"

            }).format(auxiliar / bitcoinToday)
        }

    }// fim if libra
    
 if (currencySelectDe.value == "bitcoin") {  //inicio If bitcoin
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"

            }).format(inputCurrencyValue)

        if (currencySelectPara.value == "real") { 
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"

        }).format(inputCurrencyValue*bitcoinToday)

         }
        if (currencySelectPara.value == "dolar") {
            auxiliar = inputCurrencyValue*bitcoinToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"

            }).format(auxiliar/dolarToday)
        }
        if (currencySelectPara.value == "euro") {
            auxiliar = inputCurrencyValue*bitcoinToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"

            }).format(auxiliar/euroToday)
        }
        if (currencySelectPara.value == "libra") {
            auxiliar = inputCurrencyValue*bitcoinToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"

            }).format(auxiliar / libraToday)
        }
        if (currencySelectPara.value == "bitcoin") {
             auxiliar = inputCurrencyValue*euroToday
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"

            }).format(inputCurrencyValue)
        }

    }// fim if bitcoin 

} // fim função




function changeCurrancy() {
    const currencyNameDe = document.querySelector("#des-de")
    const currencyImgDe = document.querySelector("#logo-de")
    const currencyName = document.querySelector("#des-para")
    const currencyImg = document.querySelector("#logo-para")

    if (currencySelectPara.value == "real"){
        currencyName.innerHTML = "Real Brasileiro"
        currencyImg.src = "./img/brasil.png"
    }

    if (currencySelectPara.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
        currencyImg.src = "./img/EUA.png"

    }
    if (currencySelectPara.value == "euro") {
        currencyName.innerHTML = "Euro "
        currencyImg.src = "./img/euro.png"
    }
    if (currencySelectPara.value == "libra") {
        currencyName.innerHTML = "Libra "
        currencyImg.src = "./img/libra.png"
    }
    if (currencySelectPara.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin "
        currencyImg.src = "./img/bitcoin.png"
    }

     if (currencySelectDe.value == "real"){
        currencyNameDe.innerHTML = "Real Brasileiro"
        currencyImgDe.src = "./img/brasil.png"
    }

    if (currencySelectDe.value == "dolar") {
        currencyNameDe.innerHTML = "Dolar Americano"
        currencyImgDe.src = "./img/EUA.png"

    }
    if (currencySelectDe.value == "euro") {
        currencyNameDe.innerHTML = "Euro "
        currencyImgDe.src = "./img/euro.png"
    }
    if (currencySelectDe.value == "libra") {
        currencyNameDe.innerHTML = "Libra "
        currencyImgDe.src = "./img/libra.png"
    }
    if (currencySelectDe.value == "bitcoin"){
        currencyNameDe.innerHTML = "Bitcoin "
        currencyImgDe.src = "./img/bitcoin.png"
    }


    convertValues()
}

convertButton.addEventListener("click", convertValues)
currencySelectPara.addEventListener("change", changeCurrancy)
currencySelectDe.addEventListener("change", changeCurrancy)




