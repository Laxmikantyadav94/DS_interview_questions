/**
 1) Pick an element from Preorder. Increment a Preorder Index Variable (preIndex in below code) to pick next element in next recursive call.
2) Create a new tree node tNode with the data as picked element.
3) Find the picked element’s index in Inorder. Let the index be inIndex. (Using map to find index)
4) Call buildTree for elements before inIndex and make the built tree as left subtree of tNode.
5) Call buildTree for elements after inIndex and make the built tree as right subtree of tNode.
6) return tNode.
 */

class Node {
  constructor(value){
    this.data = value;
    this.left = null;
    this.right =  null;
  }
}

let preorder = [3,9,20,15,7]
let inorder = [9,3,15,20,7]

function generateTree(preorder,inorder){
  let map = new Map();

  for(let i=0;i<inorder.length;i++){
    map.set(inorder[i],i);
  }
  let preIndex = 0;

  function helper (preorder,inorder,inStr,inEnd){
    if(inStr > inEnd ) return null;
    
    let preVal = preorder[preIndex++];

    let treeRoot =  new Node(preVal);
    if(inStr == inEnd) return treeRoot;

    let inIndex= map.get(preVal);
    treeRoot.left = helper(preorder,inorder,inStr,inIndex-1);
    treeRoot.right = helper(preorder,inorder,inIndex+1,inEnd);

    return treeRoot;
  }
  return helper(preorder,inorder,0,inorder.length-1);

}

console.log(generateTree(preorder,inorder));

