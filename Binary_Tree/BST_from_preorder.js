//https://www.geeksforgeeks.org/construct-bst-from-given-preorder-traversal-set-2/?ref=lbp


let preorder = [10, 5, 1, 7, 40, 50]

class Node {
    constructor(value){
      this.data = value;
      this.left = null;
      this.right =  null;
    }
  }

function BSTFromPreOrder(preorder){
  let stack = [];

  let root = new Node(preorder[0]);
  stack.push(root);

  function helper(current){
      let tmp =null; 
      while(stack.length && stack[stack.length-1].data < current){
        tmp = stack.pop();
      }

      if(tmp){
        tmp.right = new Node(current);
        stack.push(tmp.right);
      }else{
        tmp = stack[stack.length-1];
        tmp.left = new Node(current);
        stack.push(tmp.left);
      }
  }

  for(i=1;i<preorder.length;i++){
    helper(preorder[i])
  }

return root;
}

console.log(BSTFromPreOrder(preorder));