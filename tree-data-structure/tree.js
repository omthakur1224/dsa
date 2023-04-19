class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
        }
    }

class Tree{
constructor(){
  this.root=null;
}
  createNode(value){
      let newNode=new Node(value);
      if(this.root===null){
          this.root=newNode;
      }else{
          this.insertNode(this.root,newNode)
      }
  }
  insertNode(root,newNode){
      if(root.value>newNode.value){
          if(root.left===null){
              root.left=newNode;
          }else{
              this.insertNode(root.left,newNode)
          }
      }else{
          if(root.right===null){
              root.right=newNode;
          }else{
              this.insertNode(root.right,newNode)
          }
      }
  }
  isEmpty(){
      if(this.root===null)return "Tree is Empty"
  }
  search(root,value){
      if(root===null)return false;
      if(root.value===value)return true;
      if(root.value>value){
        return this.search(root.left,value);
      }else{
       return this.search(root.right,value);
    }
  }
  preOrderTraversal(root){
    if(root){
        console.log(root.value);
        this.preOrderTraversal(root.left);
        this.preOrderTraversal(root.right)
    }
        
  }
 inOrderTraversal(root){
    if(root){
        this.preOrderTraversal(root.left);
        console.log(root.value);
        this.preOrderTraversal(root.right)
    }
        
  }
  postOrderTraversal(root){
    if(root){
        this.preOrderTraversal(root.left);
        this.preOrderTraversal(root.right)
        console.log(root.value);
    }
        
  }
}
const tree= new Tree();
tree.createNode(40)
tree.createNode(60)
tree.createNode(20)
tree.createNode(10)
console.log("tree",tree)
console.log("search:",tree.search(tree.root,10))
console.log("search:",tree.search(tree.root,108))
console.log("preOrderTraversal:")
tree.preOrderTraversal(tree.root)
console.log("inOrderTraversal:")
tree.inOrderTraversal(tree.root)
console.log("postOrderTraversal:")
tree.postOrderTraversal(tree.root)
