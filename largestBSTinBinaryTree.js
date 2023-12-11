//Create TreeNode
class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

//Helper class
class helper{
    constructor(isBST,highest,lowest,height){
        this.isBST = isBST
        this.highest = highest
        this.lowest = lowest
        this.height = height
    }
}

//insert into BST
const insert = (root, val) => {
    if(!root){
        return new TreeNode(val)
    }
    else if(root.data > val){
        root.left = insert(root.left,val)
    }
    else{
        root.right = insert(root.right, val)
    }
    return root
}

//largest bst in the binary tree
const largest = (root) => {
    if(!root){
        return new helper(true,-Infinity,Infinity,0)
    }
    else{
        let left = largest(root.left)
        let right = largest(root.right)
        let isBST = left.isBST && right.isBST && (root.data > left.highest && root.data <right.lowest)
        let highest = Math.max(root.data, left.highest,right.highest)
        let lowest = Math.min(root.data, left.lowest,right.lowest)
        let height = isBST ? Math.max(left.height,right.height) + 1 : Math.max(left.height,right.height)
        return new helper(isBST,highest,lowest,height)
    }
}

//create a bst
let root = null
root = insert(root, 15)
insert(root, 5)
insert(root, 10)
insert(root, 2)
insert(root, 1)
insert(root, 20)

//changing the root to make sure that the BST is a binary tree
root.data = 100



let res = largest(root)
console.log(res.height)
