function postOrder(root){
    let result = [];
    function helper(node){
      if(!node) return;
  
      helper(node.left);
      helper(node.right);
      result.push(node.data);
    }
    helper(root);
  
    return result
  }
  
  console.log(postOrder(root));