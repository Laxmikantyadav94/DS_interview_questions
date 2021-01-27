function validateBalancedBinary(root){
  
    function helper(node){
      if(!node) return 0;
  
      let leftHieght= helper(node.left);
      if (leftHieght === false) {
        return false;
      }
      let rightHieght= helper(node.right);
      if (rightHieght === false) {
        return false;
      }
      if(Math.abs(leftHieght - rightHieght) >1){
        return false;
      }
  
      return 1 + Math.max(leftHieght,rightHieght);
    }
  
    return helper(root);
  }
  
  validateBalancedBinary(root);