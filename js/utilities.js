// set text value
function textSetValue(elements, value){
    const element = document.getElementById(elements);
    element.innerText = value;
}
// set inner text
function textInner(elements){
    const element = document.getElementById(elements);
    const text = element.innerText;
    return text;
}
// grand total cost
function grandTotalCost(){
    const grandTotal = document.getElementById("grand-total");
    const convertGrandTotal = parseInt(grandTotal.innerText);
    console.log(convertGrandTotal);
    document.getElementById("grand-total").innerText = convertGrandTotal + parseInt(price);
}
function selectBtn(e){
    if(e === 'bus'){
        parseInt(price) + 100;
    }
    else if(e === 'train'){
        convertGrandTotal - 200;
    }
}