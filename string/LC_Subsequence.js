
let str1 = "abcbcGeeaKsjtyuwtewuqewoq";
let str2 = "GeeaKsQuiz";

function LCS(str1,str2){

  let m = str1.length;
  let n = str2.length;
  let map = new Array(m+1);

  function LCSLength (str1,str2){
  for(let i=0;i<map.length;i++)
  {
    map[i] = new Array(n+1);
  }

  for(let i=0;i<map.length;i++){
    for(let j=0;j< map[i].length;j++){
      if(i==0 || j==0){
        map[i][j] =0;
      }
      else if(str1[i-1]==str2[j-1]){ 
         map[i][j] = map[i-1][j-1] +1;
      }else{
         map[i][j] = Math.max(map[i-1][j] ,map[i][j-1]);
      }
    }
  }
}

  
  function LCSStr(str1,str2,m,n){
    if(m ==0 || n==0){
      return "";
    }

    if(str1[m-1] == str2[n-1]){
      return LCSStr(str1,str2,m-1,n-1) + str1[m-1];
    }

    if(map[m-1][n] >map[m][n-1]){
      return LCSStr(str1,str2,m-1,n);
    }else{
      return LCSStr(str1,str2,m,n-1);
    }
  }

  LCSLength (str1,str2);
  return LCSStr(str1,str2,m,n);
}
LCS (str1,str2)
