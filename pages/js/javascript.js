function computeTotal() {

    const DISCOUNT = 0.15;

    let total = 0;
    let menuItems = document.getElementsByClassName("menuItem");
    
    for(let i = 0; i < menuItems.length; i++) {
        let item = menuItems[i];

        // get the value of the check box
        let isSelected = item.querySelector("input[type=checkbox]");

        // if the checkbox is checked, then we can take into account the pizza
        if(isSelected.checked) {
            let unitPrice, quantity, subTotal;

            // get the unit price from the selected radio button
            unitPrice = item.querySelector("input[name=pizzaUnitPrice]:checked");
            if(!unitPrice) {
                // alert("You need to pick something for the pizza " + isSelected.value);
                break;
            }

            // if the interpreter gets here, then the user has 
            // made a choice now we get the quantity
            quantity = item.querySelector("select");
            
            // lets calculate the total
            subTotal = unitPrice.value * quantity.value;
            item.querySelector("input[name=subTotal]").value = subTotal;

            total += subTotal;
        }
    }

    if(total > 1000) {
        total -= total * DISCOUNT;
    }

    // now let's update the total element
    document.querySelector("#total").innerText = total;
    
    let answer = confirm("Do you confirm the total of $" + total + "?");
    if(answer) alert("Thank you!");

};

// invoke the computeTotal function each time we click on the calculate button
document.querySelector("#calculateButton").onclick = computeTotal;