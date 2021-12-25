const inputBill = document.getElementById("input-bill");
const numOfPeople = document.getElementById("number-of-people");
const amountSum = document.querySelector(".amount-sum");
const totalSum = document.querySelector(".total-sum");
const resetBtn = document.querySelector(".reset");
const buttons = document.querySelectorAll(".buttons");

inputBill.addEventListener("change", liveChange = () =>{
    let temp;
    temp = inputBill.value;
    buttons.forEach((e)=>{
        e.addEventListener("click", (item)=>{
            let temptemp;
            let temp2;
            temptemp = item.target.innerHTML;
            item.target.style.background = "hsl(172, 67%, 45%)";
            temp2 = temptemp.substring(0, temptemp.length -1);

            numOfPeople.addEventListener("change", liveChange =() =>{
                let temp3;
                temp3 = numOfPeople.value;
                let percentage = (temp2 * temp / 100);
                let tipAmount =  percentage  / temp3;
                amountSum.innerHTML = "$" + Math.round(tipAmount);
                totalSum.innerHTML =  "$" + Math.round(temp / tipAmount);

                resetBtn.classList.add("reset-active");
                setTimeout(()=>{
                    item.target.style.background = "hsl(183, 100%, 15%)";
                }, 3000)
            });
        })   
    })
});

resetBtn.addEventListener("click", clear = () =>{
    resetBtn.classList.remove("reset-active");
    var temp = "";
    inputBill.value = temp;
    numOfPeople.value = temp;
    amountSum.innerHTML = "$"+0.00;
    totalSum.innerHTML = "$"+0.00;
});





