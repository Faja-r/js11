const dropdown =document.querySelectorAll(".dropdown");

for (let i=0 ; i<dropdown.clientHeight;i++){
    for (currency_code in country_code){
        let selected;
        if(i==0){
            selected=currency_code=="USD"?"selected":"";
        }else if(i==1){
            selected= currency_code =="NPR"?"selected":";"
        }
    }
   
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`
    dropdown[i].insertAdjacentHTML("beforeend",optionTag);
}
dropdown[i].addEventListener("change", e={
    loadFlag(e.target);
    });

function loadFlag(element){
    for(code in country_code){
        if(code==element.value){
            let imgTag =element.parameter.querySelector("img");
            imgTag.src=`https://flagsapi.com/${country_code[code]}/flat/64.png`;
        }
    }
}
window.addEventListener("load",()=>{
    getExchangeRate();
});
getbutton.addEventListener("click," e=>{
e.preventDefault();
getExchangeRate();
});
 const exchangeIcon = document.querySelector(".drop-down .icon");
 exchangeIcon.addEventListener("click,"()=>{
    let tempcode= fromCurrency.value;
    fromCurrency.value=toCurrency.value;
    toCurrency.value=tempcode;
 })

 
function getExchangeRate(){
    const amount = document.querySelector(".amount input");
    getExchangeRate= document.querySelector(".exchange-rate");
    let amountVal= amount.value;

}
if(amountVal=="" || amountVal=="0"){
    amount.value="1";
    amount.value= 1;
}
let url= `https://v6.exchangerate-api.com/${apiKey}/latest/USD`;
fetch(url).then(Response=> Response.json()).then(result=>{
    let exchangeRate= result.conversion_rates[toCurrency.value]
})