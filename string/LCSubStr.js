
let str1 = "adsGeeaKaQuizeeq";
let str2 = "asdGeeaKsQuizeea";

function LCSubStr(str1,str2){
  let m = str1.length;
  let n = str2.length;
  let map = new Array(m+1);
  let result = 0;
  let index_i = 0;

  let str = "";

  function LCSubStrLength (str1,str2){

  for(let i=0;i<map.length;i++)
  {
    map[i] = new Array(n+1);
  }

  for(let i=0;i<map.length;i++){
    for(let j=0;j< map[i].length;j++){
      if(i==0 || j==0){
        map[i][j] =0;
      }
      else if(str1[i-1]==str2[j-1]){ //index starts from 0
        map[i][j] = map[i-1][j-1] +1;
        if(map[i][j]>result){
          result = map[i][j];
          index_i = i;
        }
        
      }else{
         map[i][j] = 0;
      }
    }
  }
}

  LCSubStrLength (str1,str2);

  for(let i=result;i>=1;i--){
    str = str1[index_i-1] +str;
    index_i --;
  }

  return str;
}
LCSubStr (str1,str2)
