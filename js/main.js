const btns = document.getElementsByClassName("btns");
let count = 0;
for (const btn of btns) {
    btn.addEventListener("click", function (event) {
        count++;

        //  console.log(event.target.parentNode.parentNode.childNodes[1].innerText)

        //  access price and place
        const place = event.target.parentNode.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        //  console.log(place, price)
        //  create li and set innerText p, p2
        const ul = document.getElementById("ul-container");
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerText = place;
        const p2 = document.createElement("p");
        p2.innerText = price;
        li.appendChild(p);
        li.appendChild(p2);
        ul.appendChild(li);

        // total cost access 
        const totalCost = textInner("total-cost");
        const convertTotalCost = parseInt(totalCost);
        document.getElementById("total-cost").innerText = convertTotalCost + parseInt(price);
          
        // grand total access
        const grandTotal = document.getElementById("grand-total");
        const convertGrandTotal = parseInt(grandTotal.innerText);
        console.log(convertGrandTotal);
        document.getElementById("grand-total").innerText = convertGrandTotal + parseInt(price);
          
        

        

        textSetValue("add-cart", count)
    })

}