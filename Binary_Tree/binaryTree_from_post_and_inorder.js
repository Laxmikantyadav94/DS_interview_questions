
class Node {
  constructor(value){
    this.data = value;
    this.left = null;
    this.right =  null;
  }
}

let postorder = [9,15,7,20,3]
let inorder = [9,3,15,20,7]

function generateTree(postorder,inorder){
  let map = new Map();

  for(let i=0;i<inorder.length;i++){
    map.set(inorder[i],i);
  }

  let postIndex = postorder.length-1;

  function helper (postorder,inorder,inStr,inEnd){
    if(inStr > inEnd ) return null;
    
    let postVal = postorder[postIndex--];
    let treeRoot =  new Node(postVal);
    if(inStr == inEnd) return treeRoot;

    let inIndex= map.get(postVal);
    treeRoot.right = helper(postorder,inorder,inIndex+1,inEnd);
    treeRoot.left = helper(postorder,inorder,inStr,inIndex-1);

    return treeRoot;
  }
  return helper(postorder,inorder,0,inorder.length-1);

}

console.log(generateTree(postorder,inorder));