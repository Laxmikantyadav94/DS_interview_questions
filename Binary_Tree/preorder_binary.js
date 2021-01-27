function preOrder(root){
    let result = [];
    function helper(node){
      if(!node) return;
  
      result.push(node.data);
  
      helper(node.left);
      helper(node.right);
    }
    helper(root);
  
    return result
  }
  
  console.log(preOrder(root));