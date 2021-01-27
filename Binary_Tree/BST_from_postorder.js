//https://www.geeksforgeeks.org/construct-a-bst-from-given-postorder-traversal-using-stack/


class Node {
    constructor(value){
      this.data = value;
      this.left = null;
      this.right =  null;
    }
  }

  let postorder = [1, 7, 5, 50, 40, 10]

  function BSTFromPostOrder(postorder){
    let stack = [];
    let length = postorder.length-1;
    let root = new Node(postorder[length]);
    stack.push(root);
  
    function helper (current){
      let tmp= null;
  
      while(stack.length && current < stack[stack.length-1].data){
        tmp = stack.pop();
      }
  
      if(tmp){
        tmp.left = new Node(current);
        stack.push(tmp.left);
      }else{
        tmp = stack[stack.length-1];
        tmp.right = new Node(current);
        stack.push(tmp.right);
      }
    }
  
    for(let i=length-1;i>=0;i--){
      helper(postorder[i]);
    }
    return root;
  }
  
  console.log(BSTFromPostOrder(postorder));