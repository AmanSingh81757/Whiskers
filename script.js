let adoptbtn=document.getElementsByClassName("adopt-btn")
for(let i=0;i<adoptbtn.length;i++){
    adoptbtn[i].addEventListener("click", function(){
        window.location.href = "form.html";
    });
}

let canc=document.getElementsByClassName("cancel")[0];
canc.addEventListener("click", function(){
    window.location.href = "adopt.html";
});

let donatebtn=document.getElementsByClassName("donate")[0];
donatebtn.addEventListener("click",function(){
    alert("Thank you for donating!!");
})

let adpt=document.getElementsByClassName("submit")[0];
adpt.addEventListener("click",function(){
    alert("Thank you for choosing to adopt a pet. Our team will contact you for further procedure.")
})