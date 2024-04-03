const domain = window.location.hostname;
const domainList = [];


if(domain === "ouo.press"){
    const Button = document.querySelector("#btn-main");
    if(Button){
        Button.click();
    }
}
for(var i = 0; i <domainList.Length; i++){
    if(domain === domainList[i]){
        window.location.href = window.conf_rew.link;
    }
}