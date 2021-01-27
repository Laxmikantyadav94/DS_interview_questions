class Node {
    constructor(value){
      this.data = value;
      this.left = null;
      this.right =  null;
    }
}

function invertBinary(root){

  function helper(node){
    if(!node) return;

    let newRoot = new Node(node.data);

    newRoot.left = helper(node.right);
    newRoot.right = helper(node.left);

    return newRoot;
  }
  
  return helper(root);
}

console.log(invertBinary(root));