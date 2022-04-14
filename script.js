/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

function changeToChecked(event){
console.log('cliccato');
const divv =event.currentTarget;

const box=divv.querySelector(".checkbox");
const unchecked =document.querySelectorAll(".choice-grid div");

for(const boxes of unchecked ){
/*considero tutti i div di una stessa domanda confrontando il questionId,se uguale,tolgo e aggiungo le classi necessarie ai div 
non cliccati.Dopo l'if posso aggiungere le classi al div cliccato.(stesso ragionamento con la casella)*/
if(boxes.dataset.questionId==divv.dataset.questionId){
const box=boxes.querySelector(".checkbox");
box.src="images/unchecked.png";
boxes.classList.remove("check");
boxes.classList.add("uncheck");
divv.classList.remove("uncheck");
box.classList.remove("check2");
}}


box.src="images/checked.png";
divv.classList.add("check");
box.classList.add("check2");
 
//ricavo solo i div con la casella spuntata
const div_c=document.querySelectorAll(".check");
console.log(div_c);
 console.log("La lunghezza di div_c è:"+div_c.length);


//controllo che gli elementi arrivino a 3,a questo punto tolgo l'evento con removeEventListener
  
      if(div_c.length==3){
    console.log("LUNGHEZZA MASSIMA RAGGIUNTA");
    TextComplete();
    Result();
    ActiveButton();
    const result=document.querySelector(".div");
    result.classList.remove("result_none");
  
  }
}

const div_unchecked =document.querySelectorAll(".choice-grid div");
for(const divv of div_unchecked){
divv.addEventListener('click',changeToChecked);

}


function TextComplete(event){

const all_div =document.querySelectorAll(".choice-grid div");
for(const a_div of all_div)
a_div.removeEventListener('click',changeToChecked);

}

function Result(){
  const vett0=["blep","burger","cart","dopey","happy","nerd","shy","sleeping","sleepy"];
  const vett1=[RESULTS_MAP["blep"].title,RESULTS_MAP["burger"].title,RESULTS_MAP["cart"].title,RESULTS_MAP["dopey"].title,RESULTS_MAP["happy"].title,RESULTS_MAP["nerd"].title,RESULTS_MAP["shy"].title,RESULTS_MAP["sleeping"].title,RESULTS_MAP["sleepy"].title];
  const vett2=[RESULTS_MAP["blep"].contents,RESULTS_MAP["burger"].contents,RESULTS_MAP["cart"].contents,RESULTS_MAP["dopey"].contents,RESULTS_MAP["happy"].contents,RESULTS_MAP["nerd"].contents,RESULTS_MAP["shy"].contents,RESULTS_MAP["sleeping"].contents,RESULTS_MAP["sleepy"].contents];
  const d =document.querySelectorAll(".choice-grid div");
  const x =document.querySelectorAll(".check");
   
    const title=document.querySelector(".div h1");
    const text=document.querySelector(".div p");
    
    if(x.length==3){

 console.log(x[0].dataset.choiceId);
  for(let i=0;i<=8;i++){
    //se sono tutti diversi carico la prima risposta
   if(x[0].dataset.choiceId!=x[1].dataset.choiceId && x[0].dataset.choiceId!=x[2].dataset.choiceId  && x[1].dataset.choiceId!=x[2].dataset.choiceId ){
    console.log("tutti diversi");
    
    if(x[0].dataset.choiceId==vett0[i]){
    title.textContent=vett1[i];
    text.textContent=vett2[i];}

    } else if(x[0].dataset.choiceId==x[1].dataset.choiceId && x[0].dataset.choiceId==x[2].dataset.choiceId  && x[1].dataset.choiceId==x[2].dataset.choiceId ){
      //se sono tutti uguali carico la prima risposta
      if(x[0].dataset.choiceId==vett0[i]){
      title.textContent=vett1[i];
      text.textContent=vett2[i];
      }
    }
    // se i primi due sono uguali carico la prima risposta
  if(x[0].dataset.choiceId==x[1].dataset.choiceId && x[0].dataset.choiceId!=x[2].dataset.choiceId ){
   console.log("primi due uguali");
   if(x[0].dataset.choiceId==vett0[i]){
    title.textContent=vett1[i];
    text.textContent=vett2[i];}
   }

   // se gli ultimi due sono uguali carico la seconda risposta
   if(x[0].dataset.choiceId!=x[1].dataset.choiceId && x[1].dataset.choiceId==x[2].dataset.choiceId ){
    console.log("ultimi due uguali");
    if(x[1].dataset.choiceId==vett0[i]){
      title.textContent=vett1[i];
      text.textContent=vett2[i];}
     }
   
 // se il primo e il terzo due sono uguali carico la prima risposta
    if(x[0].dataset.choiceId==x[2].dataset.choiceId && x[0].dataset.choiceId!=x[1].dataset.choiceId ){
      console.log("primo e terzo uguali");
      if(x[0].dataset.choiceId==vett0[i]){
        title.textContent=vett1[i];
        text.textContent=vett2[i];}
      }    
  }
  } }

function ActiveButton(event){
  const button=document.querySelector("button");
  button.textContent="Ricomincia il quiz";
  button.classList.remove("button");
  button.classList.add("button_none");

}

const button=document.querySelector("button");
 button.addEventListener("mouseenter",()=> button.style.backgroundColor='#e0e0e0');
 button.addEventListener("mouseleave",()=> button.style.backgroundColor='#cecece');
button.addEventListener("click",clickbutton);


function clickbutton(event){

 const  button=event.currentTarget;
const all_box=document.querySelectorAll("section div");
const div_c=document.querySelectorAll(".check");


for(box of all_box){
  const k=document.querySelectorAll(".check");
  box.classList.remove("check");
  box.classList.remove("uncheck");
  const img=box.querySelector(".checkbox");
  console.log(img);
  img.src=("images/unchecked.png");
  img.classList.remove("check2");
  const result=document.querySelector(".div");
  result.classList.add("result_none");
 box.addEventListener('click',changeToChecked);
  window.scrollTo(0,0);
  

}

 }




































