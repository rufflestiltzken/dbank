import {dbank} from "../../declarations/dbank";

window.addEventListener("load", async function() {
  //console.log("Listening");
  updateBalance();
});

document.querySelector("form").addEventListener("submit", async function(event) {
  
  event.preventDefault();

  const button = event.target.querySelector("#submit-btn");

  button.setAttribute("disabled",true)

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);


  if (document.getElementById("input-amount").value.length !=0) {
    await dbank.topUp(inputAmount);
  };
  
  if (document.getElementById("withdrawal-amount").value.length !=0) {
    await dbank.withdraw(outputAmount);
  };
  
await dbank.compound();
  


  updateBalance();

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";

  button.removeAttribute("disabled");
});

async function updateBalance() {
  const currentAmount = await dbank.checkBalance();
  const currentMoney = currentAmount.toFixed(2);
  console.log(currentMoney);
  document.getElementById("value").innerText = currentMoney;
}
 // event.preventDefault();
  
 // console.log("Submitted");
// });