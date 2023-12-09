//validating using inorder traversal
const validateWithInorder = (root) => {
    let inorderArr = []
    inorder(root,inorderArr)
    let res = true
    for(let i=1;i<inorderArr.length-1;i++){
        if(inorderArr[i] < inorderArr[i-1]){
            return false
        }
    }
    return true
}

//
const validateWithRange = (root, left, right) => {
    if(!root){
        return true
    }
    else if(root.data > right || root.data < left){
        return false
    }
    else{
        let leftside = validateWithRange(root.left,left,root.data)
        let rightside = validateWithRange(root.right,root.data,right)
        return leftside && rightside
    }
}

//finding inorder traversal
const inorder = (root,arr) => {
    if(!root){
        return null
    }
    else{
        inorder(root.left,arr)
        arr.push(root.data)
        inorder(root.right,arr)
    }
}

//TreeNode creation
class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

//insert into BST
const insert = (root,val) => {
    if(!root){
        return new TreeNode(val)
    }
    else if(root.data > val){
        root.left = insert(root.left, val)
    }
    else{
        root.right = insert(root.right, val)
    }
    return root
}

//create a bst
let root = null
root = insert(root, 15)
insert(root, 5)
insert(root, 10)
insert(root, 2)
insert(root, 20)
insert(root, 15)
insert(root, 11)
insert(root, 25)

//testing the tree without modifcation : Results in True
console.log(validateWithInorder(root), validateWithRange(root,-Infinity,Infinity))

//modifying the value to have : Results in false
root.data = 100
console.log(validateWithInorder(root), validateWithRange(root,-Infinity,Infinity))