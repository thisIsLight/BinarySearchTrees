//Creating a treenode
class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

//Insertion into the BST
const insertintoBST = (root, val) => {
    if(!root){
        return new TreeNode(val)
    }
    else{
        if(root.data > val){
            root.left = insertintoBST(root.left,val)
        }
        else{
            root.right = insertintoBST(root.right,val)
        }
        return root
    }
}

//Inorder Travesal
const inorder = (root,arr) => {
    if(!root){
        return
    }
    else{
        inorder(root.left,arr)
        arr.push(root.data)
        inorder(root.right,arr)
    }
}
//Preorder Travesal
const preorder = (root,arr) => {
    if(!root){
        return
    }
    else{
        arr.push(root.data)
        preorder(root.left,arr)
        preorder(root.right,arr)
    }
}
//Postorder Travesal
const postorder = (root,arr) => {
    if(!root){
        return
    }
    else{
        postorder(root.left,arr)
        postorder(root.right,arr)
        arr.push(root.data)
    }
}
//LevelOrder Travesal
const LevelOrder = (root,arr) => {
    let q = []
    q.push(root)
    while(q.length > 0){
        let cur = q.pop()
        arr.push(cur.data)
        if(cur.left){
            q.push(cur.left)
        }
        if(cur.right){
            q.push(cur.right)
        }
    }
}


//creation of BST
let root = null;

root = insertintoBST(root, 10)
insertintoBST(root, 5)
insertintoBST(root, 50)
insertintoBST(root, 25)
insertintoBST(root, 25)
insertintoBST(root, 6)

let res = []
inorder(root,res)
console.log('Inorder travesal: ', res)
res = []
postorder(root,res)
console.log('PostOrder travesal: ', res)
res = []
preorder(root,res)
console.log('PreOrder travesal: ', res)
res = []
LevelOrder(root,res)
console.log('LevelOrder travesal: ', res)