//TreeNode
class TreeNode{
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

//insert into bst
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

//find Kth Smallest element 
const kthSmallest = (root, arr, k) => {
    if(!root){
        return -1
    }
    else{
        let left = kthSmallest(root.left,arr,k)
        if(left != -1){
            return left
        }
        arr[0]++
        if(arr[0] == k){
            return root.data
        }
        return kthSmallest(root.right, arr,k)
    }
}

//inorder
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
inorder(root,res)
console.log(res)

console.log(kthSmallest(root,[0],8))

//Now since we know how to find smallest, we can find greatest as well
//Say we want to find 2nd greatest
//Second greatest is nothing but N-2th smallest
//N = 8
//N-2 = 6 => Since its 1 indexed so it becomes 6+1 => 7

console.log(kthSmallest(root,[0],7))