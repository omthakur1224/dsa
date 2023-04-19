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
      if(root===null)return "not found"
      if(root.value===value)return "Yes It's there in tree";
      if(root.value>value){
          this.search(root.left,value)?"Yes Element is present": "No element is not in tree"
          
      }else{
          this.search(root.right,value)?"Yes Element is present": "No element is not in tree"
      }
      
  }
}
const tree= new Tree();
tree.createNode(40)
tree.createNode(60)
tree.createNode(20)
tree.createNode(10)
console.log("tree",tree)