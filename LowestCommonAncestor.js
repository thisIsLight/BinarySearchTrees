//Treenode
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
    else{
        if(root.data > val){
            root.left = insert(root.left,val)
        }
        else{
            root.right = insert(root.right,val)
        }
        return root
    }
}

//inorder traversal
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

//LevelOrder Travesal
const LevelOrder = (root,arr) => {
    let q = []
    q.push(root)
    while(q.length > 0){
        let cur = q.shift()
        arr.push(cur.data)
        if(cur.left){
            q.push(cur.left)
        }
        if(cur.right){
            q.push(cur.right)
        }
    }
}

//recursion implementation for Lowestcommonancestor
const lcarecur = (root,high,low) => {
    if(!root){
        return null
    }
    if(root.data < low && root.data < high){
        return lcarecur(root.right,high,low)
    }
    else if(root.data > low && root.data > high){
        return lcarecur(root.left,high,low)
    }
    else{
        return root
    }
}

//Iteration
const lcaitr = (root,high,low) => {
    let res = null
    while(root){
        if(root.data > high && root.data > low){
            root = root.left
        }
        else if(root.data < high && root.data < low){
            root = root.right
        }
        else{
            res = root
            break
        }
    }
    return res
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
let res = []
LevelOrder(root,res)
console.log(res)

//using recursion
console.log(lcarecur(root,20,2).data)

//using iterations
console.log(lcaitr(root,20,2).data)


