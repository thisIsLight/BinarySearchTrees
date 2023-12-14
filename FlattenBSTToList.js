//TreeNode
class TreeNode {
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
    else if(root.data > val){
        root.left = insert(root.left,val)
    }
    else{
        root.right = insert(root.right,val)
    }
    return root
}

//inorder
const inorder = (root,arr) => {
    if(!root){
        return null
    }
    else{
        inorder(root.left)
        arr.push(root.data)
        inorder(root.right)
    }
}


//BST to LL using extra space O(N)
const tolistone = () => {
    if(!root){
        return null
    }

    let arr = []
    inorder(root,arr)
    let root = new TreeNode(arr[0])
    let head = root
    for(let i=1;i<arr.length;i++){
        root.right = new TreeNode(arr[i])
        root = root.right
    }
    return head;
}

//BST to LL using extra space O(h) inplace - inorder
const tolisttwo = (root,head) => {
    if(!root){
        return null
    }
    else{
        tolisttwo(root.right,head)
        root.right = head
        if(head){
            head.left = root
        }
        head = root
        tolisttwo(root.left,head)
    }
}

//BST to LL without using space - morris - preorder
const tolistthree = (root) => {
    let cur = root
    while(cur){
        if(!cur.left){
            cur = cur.right
        }
        else{
            let pred = cur.left
            while(pred.right){
                pred = pred.right
            }
            pred.right = cur.right
            pred = cur
            cur = cur.left
            pred.left = null
        }
    }
}
