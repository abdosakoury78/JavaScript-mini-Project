var allProducts = document.querySelectorAll("#button");
var div1 = document.querySelector("#div1");
var div2 = document.querySelector("#div2");
var btn1 = document.querySelector("#button2");
var totalPrice = 0

div1.innerHTML = "Games: ";
allProducts.forEach(function (item) {
    item.onclick = function (){
        totalPrice +=  +(item.getAttribute("price"))
        div1.innerHTML += item.getAttribute("name") + ", "
        div1.style.opacity = "0";
        div2.style.opacity = "0";
        div2.innerHTML = "";

    }
})
btn1.addEventListener("click", function() {
    div1.style.opacity = "1";
    div2.style.opacity = "1";
    div2.innerHTML += "Total Price: " + totalPrice;
})
