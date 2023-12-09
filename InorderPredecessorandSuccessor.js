class TreeNode {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

//insert a node
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
const inorder = (root) => {
    if(!root){
        return
    }
    else{
        inorder(root.left)
        console.log(root.data)
        inorder(root.right)
    }
}

//creating a bst
let root = null
root = insert(root,5)
insert(root,15)
insert(root,4)
insert(root,2)
insert(root,25)
console.log('Tree : ')
inorder(root)
console.log('-------')


//find inorder predecessor
const findPredAndSucc = (root,val) => {
    let pred = -1
    let succ = -1
    let st = []
    let found = false
    while(st.length > 0 || root){
        while(root){
            st.push(root)
            root = root.left
        }
        let cur = st.pop()
        if(found){
            pred = cur.data
            break
        }
        if(cur.data == val){
            found = true
        }else{
            succ = cur.data
        }
        root = cur.right
    }
    return [succ,pred]
}

let ans = findPredAndSucc(root,5)
console.log(ans)


