
let str1 = "GeeksforGeeks";
let str2 = "GeeksQuiz";


function LCSLength (str1,str2){
  let m = str1.length;
  let n = str2.length;
  let map = new Array(m+1);
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
      }else{
         map[i][j] = Math.max(map[i-1][j] ,map[i][j-1]);
      }
    }
  }
  return map[m][n];
}


LCSLength (str1,str2)
