//create treenode
class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

//Preparing tree
const insert = (root, val) => {
    if(!root){
        return new TreeNode(val)
    }
    else{
        if(root.data > val){
            root.left = insert(root.left,val)
        }
        else{
            root.right = insert(root.right, val)
        }
        return root
    }
}

//search a BST using Recursion
const searchrecur = (root, key) => {
    if(!root){
        return false
    }
    else{
        if(root.data == key){
            return true
        }
        else if(root.data > key){
            return searchrecur(root.left,key)
        }
        else{
            return searchrecur(root.right,key)
        }
    }
}

//search using iterations
const searchitr = (root, key) => {
    while(root){
        if(root.data == key){
            return true
        }
        if(root.data > key){
            root = root.left
        }
        else{
            root = root.right
        }
    }
    return false
}

//inorder 
const inorder = (root, arr) => {
    let res = []
    while(res.length > 0 || root){
        while(root){
            res.push(root)
            root = root.left
        }
        let cur = res.pop()
        arr.push(cur.data)
        root = cur.right
    }
}

let root = null
root = insert(root, 1)
root = insert(root, 3)
root = insert(root, 7)
root = insert(root, 5)
root = insert(root, 10)
root = insert(root, 9)
let tree = []
inorder(root,tree)
console.log('tree : ', tree)

let isPresent = false

isPresent = searchrecur(root,5)
console.log('5 is present ?', isPresent)

isPresent = searchrecur(root,8)
console.log('8 is present ?', isPresent)

isPresent = searchitr(root,5)
console.log('5 is present ?', isPresent)

isPresent = searchitr(root,8)
console.log('8 is present ?', isPresent)

