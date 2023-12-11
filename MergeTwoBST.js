//TreeNode
class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

//insert into the bst
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

//inorder of bst
const inorder = (root,arr)=>{
    if(!root){
        return null
    }
    else{
        inorder(root.left,arr)
        arr.push(root.data)
        inorder(root.right,arr)
    }
}

//merging two sorted array
const merge = (a,b,res) => {
    let i=0,j=0
    while(i<a.length && j<b.length){
        if(a[i] > b[j]){
            res.push(b[j])
            j++
        }
        else{
            res.push(a[i])
            i++
        }
    }

    while(i<a.length){
        res.push(a[i])
        i++
    }
    while(j<b.length){
        res.push(b[j])
        j++
    }
}

//inorder to BST
const inorderToBST = (arr, left, right)=> {
    if(left > right){
        return null
    }
    if(left == right){
        return new TreeNode(arr[left])
    }
    else{
        let mid = Math.floor((left+right)/2)
        let root = new TreeNode(arr[mid])
        root.left = inorderToBST(arr,left, mid-1)
        root.right = inorderToBST(arr,mid+1, right)
        return root
    }
}

//create the first tree
let root1 = null
root1 = insert(root1, 2)
insert(root1, 4)
insert(root1, 6)
insert(root1, 8)
insert(root1, 10)
insert(root1, 12)

let root2 = null
root2 = insert(root2,1)
insert(root2,3)
insert(root2,5)
insert(root2,7)
insert(root2,9)

//creating the two inorder arrays
let inorder1 = []
let inorder2 = []
inorder(root1,inorder1)
inorder(root2,inorder2)

let merged = []
merge(inorder1,inorder2,merged)
console.log(merged)

let mergedroot = null
mergedroot = inorderToBST(merged,0,merged.length-1)
let inordermerged = []
inorder(mergedroot,inordermerged)
console.log(inordermerged)
