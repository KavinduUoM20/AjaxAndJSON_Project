var pageCount = 1;
var wrapperBelow =document.getElementById('Wrapper-Below');
var btnClick = document.getElementById('btnClick');

btnClick.addEventListener('click',function () {
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCount+'.json');
    myRequest.onload =function () {
        if (myRequest.status>=200 && myRequest.status<400){
            var reqData = JSON.parse(myRequest.responseText);
            renderHTML(reqData);
            pageCount++;
            if ( pageCount>3){
                btnClick.classList.add("hide-me");
            }
        }else{
            alert("Connected , But an Error Occured !");
        }
    };
    myRequest.onerror=function () {
        alert("Error occured while Connecting !");
    }
    myRequest.send();
});

function renderHTML(data) {
    var respString = '';
    for (i=0;i<data.length;i++){
        respString+="<p>"+data[i].name +" is an "+ data[i].species+" who likes to eat " ;
        for (ii=0; ii<data[i].foods.likes.length;ii++){
            if (ii==0){
                respString+= data[i].foods.likes[ii];
            }else{
                respString+= " and " + data[i].foods.likes[ii];
            }
        }
        respString+=" and dislikes ";
        for(ii=0;ii<data[i].foods.dislikes.length;ii++){
            if (ii==0){
                respString+= data[i].foods.dislikes[ii];
            }else{
                respString+= " and " + data[i].foods.dislikes[ii];
            }
        }
        respString +=".</p>";
    }
    wrapperBelow.insertAdjacentHTML('beforeend',respString);
}
