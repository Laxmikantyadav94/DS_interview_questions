/*
To check whether a binary tree is a full binary tree we need to test the following cases:-

1) If a binary tree node is NULL then it is a full binary tree.
2) If a binary tree node does have empty left and right sub-trees, then it is a full binary tree by definition.
3) If a binary tree node has left and right sub-trees, then it is a part of a full binary tree by definition. In this case recursively check if the left and right sub-trees are also binary trees themselves.
4) In all other combinations of right and left sub-trees, the binary tree is not a full binary tree.
*/

function validateFullBinary(root){
    if(root ==null) return true;
  
    if(!root.left && !root.right) return true;
  
    if(root.left && root.right){
      return validateFullBinary(root.left) && validateFullBinary(root.right)
    }
  
    return false
  }
  
  validateFullBinary(root);