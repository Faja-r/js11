const dropdown =document.querySelector(".dropdown");

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