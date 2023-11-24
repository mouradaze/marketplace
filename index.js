
function progress(){
    
    var p = document.getElementById('pgg');
    p.hidden = false
    $(".pg").animate({
        width:"100%"
    },2500)
    var btn = document.getElementById('btn')
    setTimeout(()=>{
        btn.innerHTML="Request sent successfully"
        btn.style.backgroundColor="lightgreen"
        btn.style.color="white"
        btn.style.borderColor="lightgreen"
    },2600)

}
function login(){
    if(document.getElementById("username").value == "mourad")
        window.location.href = "http://127.0.0.1:5500/seller.html"
    else if(document.getElementById("username").value == "manal")
        window.location.href = "http://127.0.0.1:5500/createur.html"
}