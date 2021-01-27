//https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/
let INT_MAX = 4294967296
let INT_MIN = -4294967296
function isBST(root){

  function isBSTHelper(node,min,max){
    if(!node) return true;

    if(node.data <min || node.data >max) return false;

    return isBSTHelper(node.left,min,node.data-1) && isBSTHelper(node.right,node.data+1,max);
  }

  return isBSTHelper(root,INT_MIN,INT_MAX);
  }

isBST(root);