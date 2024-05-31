 const host = 'api.frankfurter.app';

 
   const fcc= document.querySelector(".from select");
    const tcc= document.querySelector(".To select");
         
     const msg =   document.querySelector(".msg");

 const dropd = document.querySelectorAll(".flag select");
 const btn = document.querySelector("form button");
 for(let sel of dropd){
        for(cc in countryList){
             let nop =  document.createElement("option");
             nop.innerText = cc;
             nop.value = cc;
              if(sel.name === "from" && nop.value == "USD"){
                    nop.selected= "selected";
              }
               if(sel.name === "to" && nop.value == "INR"){
                nop.selected= "selected";
              }
             sel.append(nop);
        }
     sel.addEventListener("change",(evt)=>{
         updateFlag(evt.target);
     })
 };
    const updexrate = async ()=>{
             let amt = document.querySelector(".amt input");
             let amtval= amt.value;
               if(amtval=== " " || amtval<1){
                     amtval = 1;
                      amt.value= "1";
               }
        const URL =  `https://${host}/latest?amount=${amtval}&from=${fcc.value}&to=${tcc.value}`;
        
      let response= await fetch(URL);
          let data =  await response.json();
          console.log(data);
          
          let rate = `${data.rates[tcc.value]}`;
          console.log(rate);
   msg.innerText = `${amtval} ${fcc.value} = ${rate} ${tcc.value}`;
            
    };
  const updateFlag =(el)=>{
           let curc= el.value;
           let cc= countryList[curc];
           let nl=  `https://flagsapi.com/${cc}/flat/64.png `;
                let img = el.parentElement.querySelector("img");
           img.src= nl;
 };
 btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updexrate();
  });
  window.addEventListener("load",()=>{
     updexrate();
  })
     
