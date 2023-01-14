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