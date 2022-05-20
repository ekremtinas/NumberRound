const OnlyNumber=(value)=>{
    try {
      return parseFloat(value);
    }catch(e){
      return 0;
    }
   
   }
function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
const NumberRound=(value)=>{
   
    // value=OnlyNumber(value);
     if(!!value){
     if(typeof value=="string"){
     let v = String(value);
     v = v === "0" ? "0.00" : v;
     return Number(Number(v.split(".")[1])===0 ? Math.round(v):Number(v).toFixed(2))
     }else if(typeof value == "number"){
      value=OnlyNumber(value);
      let v = String(value);
      v = v === "0" ? "0.00" : v;
      return Number(Number(v.split(".")[1])===0 ? Math.round(v):isFloat(value) ? Number(v).toFixed(2):Number(v))
     }
     }else{
       return 0;
     }
   }
module.exports = NumberRound;
