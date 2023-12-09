//TreeNode
class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

//Insert into BST
const insert = (root,val) => {
    if(!root){
        return new TreeNode(val)
    }
    else if(root.data > val){
        root.left = insert(root.left,val)
    }
    else{
        root.right = insert(root.right,val)
    }
    return root
}

//find smallest in BST
const findsmallest = (root) => {
    let smallest = Infinity
    while(root){
        smallest = root.data
        root = root.left
    }
    return smallest
}

//find largest in bst
const findlargest = (root) => {
    let largest = -Infinity
    while(root){
        largest = root.data
        root = root.right
    }
    return largest
}