/*
check if binary tree has Cycle.
*/

function hasCycle(root){
    let map = new Map();
  
    function helper(node,map){
      if(map && map.has(node)) return true;
  
      map.set(node,true);
  
      if(node.left && helper(node.left,map)) return true;;
      if(node.right && helper(node.right,map)) return true;
  
      return false;
  
    }
    return helper(root,map);
  }
  
  console.log(hasCycle(root));