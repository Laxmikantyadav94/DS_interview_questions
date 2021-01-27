function inOrder(root){
    let result = [];
    function helper(node){
      if(!node) return;
  
      helper(node.left);
      result.push(node.data);
      helper(node.right);
      
    }
    helper(root);
  
    return result
  }
  
  console.log(inOrder(root));