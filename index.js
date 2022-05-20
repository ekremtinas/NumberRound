const OnlyNumber=(value)=>{
    try {
      return parseFloat(value);
    }catch(e){
      return 0;
    }
   
   }
   
const NumberRound=(value)=>{
   
     value=OnlyNumber(value);
     if(!!value){
     let v=String(value);
     v = v==="0" ? "0.00" : v;
     return Number(v.split(".")[1])===0 ? Math.round(v):Number(v).toFixed(2)
     }else{
       return 0;
     }
   }

module.exports = NumberRound;
