//TreeNode Creation
class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

//Insert BST
const create = (root,val) => {
    if(!root){
        return new TreeNode(val)
    }
    if(root.data > val){
        root.left = create(root.left,val)
    }
    else{
        root.right = create(root.right,val)
    }
    return root
}

//Inorder traversal
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

//create BST
let root = null
root = create(root,5)
root = create(root,2)
root = create(root,10)
root = create(root,7)
root = create(root,11)
let tree = []
inorder(root,tree)

console.log('The tree is :',tree)


//Delete a node
const deletebst = (root, key) => {
    if(!root){
        return null
    }
    else{
        if(root.data == key){
            console.log('found the key', root)
            if(!root.left && !root.right){
                root = null
            }
            else if(!root.left){
                let smallest = findsmallest(root.right)
                root.data = smallest
                root.right = deletebst(root.right,smallest)
            }
            else if(!root.right){
                let largest = findlargest(root.left)
                root.data = largest
                root.left = deletebst(root.left,largest)
            }
            else{
                let largest = findlargest(root.left)
                root.data = largest
                root.left = deletebst(root.left,largest)
            }
            return root
        }
        else if(root.data > key){
            root.left = deletebst(root.left,key)
        }
        else{
            root.right = deletebst(root.right,key)
        }
        return root
    }
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


//deleting from bst
deletebst(root,5)
tree = []
inorder(root,tree)
console.log(tree)

