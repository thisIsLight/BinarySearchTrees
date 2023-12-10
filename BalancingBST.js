//TreeNode
class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

//Insert into BST
const insert = (root, val) => {
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

//Balance a tree
const balance = (arr, left,right) => {
    if(left > right){
        return null
    }
    if(left  == right){
        return new TreeNode(arr[left])
    }
    else{
        let mid = Math.floor((left+right)/2)
        let root = new TreeNode(arr[mid])
        root.left = balance(arr,left,mid-1)
        root.right = balance(arr,mid+1,right)
        return root
    }
}

//inorder travesal
const inorder = (root, arr) => {
    if(!root){
        return null
    }
    else{
        inorder(root.left,arr)
        arr.push(root.data)
        inorder(root.right,arr)
    }
}

//building a skew tree
let skewroot = null
skewroot = insert(skewroot,1)
insert(skewroot,2)
insert(skewroot,4)
insert(skewroot,6)
insert(skewroot,10)
insert(skewroot,15)

let tree = []
inorder(skewroot,tree)


let root = balance(tree,0,tree.length-1)
console.log(root)