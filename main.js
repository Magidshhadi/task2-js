const txt =document.querySelector(".text");
const btn_add=document.querySelector(".add_btn");
const check = document.querySelector(".check");
let add;
let text;
let check_btn


btn_add.onclick = function () {
    text =txt.value;
   
   add=
    `
            <div class="check-box">

            <input type="checkbox" name="${text}" value="${text}" class="${text}" onclick="LineThrough(this)"> 
            <label for="${text}" class="${text}"  > ${text} </label>
            </div>
             `;
             
     check.innerHTML+=add;
  
}
   
function LineThrough(checkbox) {
    if (checkbox.checked) {
      checkbox.parentElement.style.textDecoration = "line-through";
    } else {
      checkbox.parentElement.style.textDecoration = "none";
    }
  }




