import scrollama from "scrollama";

var scroller = scrollama();

const dependent=[36, 35, 24, 6, 7, 3, 9, 22, 17, 8, 2, 30, 34, 29, 28, 1, 25, 18, 13, 19, 23, 12];
const finaid=[35, 24, 6, 7, 3, 17, 8, 2, 34, 29, 28, 1, 25, 18, 13, 19, 23, 12];

var responses = document.querySelector("#responses");
var responses2 = document.querySelector("#responses-2");
var rest = document.querySelector("#nonresponses");
var rest2 = document.querySelector("#nonresponses-2");

function init(){
    scroller
        .setup({
            step: "#scrolly .scrolly-overlay .step",
            offset: 0.45,
            debug: false
        })
        .onStepEnter(function({ element, index, direction}) {
            console.log("index:"+index);
            if (index === 1){
                console.log(responses);
                for(var i = 0; i < responses.children.length; i++){
                    responses.children[i].style.fill="#8db8fc";
                    responses.children[i].setAttribute("cx",Number(responses.children[i].cx.baseVal.value)+125);  
                    //console.log("before:"+String(responses.children[i].cx.baseVal.value));
                    //responses.children[i].setAttribute("cx",Number(responses.children[i].cx.baseVal.value)-20);
                    //responses.setAttributeNS(null, "transform","translate(-20)");
                    // console.log("after:"+String(responses.children[i].cx));

                }
                rest.style.opacity="0";
            }
            if(index === 2){
                for(var i=1; i<34; i++){
                    var item = document.querySelector("#circle"+String(i));
                    item.style.fill="green";
                    item.setAttribute("cx",Number(item.cx.baseVal.value)-40);
                }
                for(var i=34; i<37; i++){
                    var item = document.querySelector("#circle"+String(i));
                    item.style.fill="orange";
                    item.setAttribute("cx",Number(item.cx.baseVal.value)+40);
                    item.setAttribute("cy",Number(item.cy.baseVal.value)-20);
                }
                document.querySelector("#circle37").setAttribute("cx",Number(document.querySelector("#circle37").cx.baseVal.value)+40);
                document.querySelector("#circle37").setAttribute("cy",Number(document.querySelector("#circle37").cy.baseVal.value)+20);
            }
            if(index === 3){
                for(var i=1; i<34; i++){
                    var item = document.querySelector("#circle"+String(i));
                    item.style.fill="#7D7D7D";
                    item.setAttribute("cx",Number(item.cx.baseVal.value)+40);
                }
                for(var i=34; i<37; i++){
                    var item = document.querySelector("#circle"+String(i));
                    item.style.fill="#7D7D7D";
                    item.setAttribute("cx",Number(item.cx.baseVal.value)-40);
                    item.setAttribute("cy",Number(item.cy.baseVal.value)+20);
                }
                document.querySelector("#circle37").style.fill="#7D7D7D";
                document.querySelector("#circle37").setAttribute("cx",Number(document.querySelector("#circle37").cx.baseVal.value)-40);
                document.querySelector("#circle37").setAttribute("cy",Number(document.querySelector("#circle37").cy.baseVal.value)-20);
                setTimeout(()=>{
                    dependent.forEach((item) => {
                        document.querySelector("#circle"+item).style.fill="purple";
                      });
                },325);
            }
            if(index === 4){
                dependent.filter(n => !finaid.includes(n)).forEach((item) => {
                    document.querySelector("#circle"+item).style.fill="#7D7D7D";
                });
                finaid.forEach((item) => {
                    document.querySelector("#circle"+item).style.fill="red";
                });
            }
        })
        .onStepExit(function({ element, index, direction}){
            if (index === 1){
                rest.style.opacity="0";
            }
        })
}

init();
