
const NumberRound=(value,fixed=2)=>{//This is main function
  let fixedValue=!!fixed ? Math.pow(10,fixed) :Math.pow(10,2);
  if(!!value){
  value=Number(value);
  return  Number(Math.round(value*fixedValue)/fixedValue);
  }else{
    return 0;
  }
}
module.exports = NumberRound;
