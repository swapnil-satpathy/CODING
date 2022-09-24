class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(val, currentTreeNode) {
        const node = new TreeNode(val);
        node.left = insert(val, currentTreeNode)
    }
    preOrderTraversal(root) {
        if(!root) {
            return;
        }
        console.log(root.val);
        this.preOrderTraversal(root.left);
        this.preOrderTraversal(root.right); 
    }
    inOrderTraversal(root) {
        if(!root) {
            return;
        }
        this.inOrderTraversal(root.left);
        console.log(root.val);
        this.inOrderTraversal(root.right); 
    }

    postOrderTraversal(root) {
        if(!root) {
            return;
        }
        this.postOrderTraversal(root.left);
        this.postOrderTraversal(root.right); 
        console.log(root.val);
    }

    levelOrderTraversal(root) {
        if(!root) return [];
        const result = [];
        // Implement your own queue
        const queue = [root]
        while(queue.length !== 0){
            const size = queue.length;
            const subResult = [];
            for(int i = 0; i< size; i+= 1){
                const node = queue.shift();
                subResult.push(node.val);
                if(node.left){
                    queue.push(node.left);
                }
                if(node.right) {
                    queue.push(node.left);
                }
            }
            result.push(subResult);
        }
        return result;
    }

    maximum(root){
        if(!root){
            return Number. MIN_SAFE_INTEGER;
        }
        return Math.max(root.val, Math.max(this.maximum(root.left), this.maximum(root.right)));
    }

    childrenSum(root){
        if(!root) return true;
        if(!(root.left || root.right)) return true;
        let sum = 0;
        if(root.left) sum += root.left.val;
        if(root.right) sum += root.right.val;
        return (sum === root.val) && childrenSum(root.left) && childrenSum(root.right);
    }
}

let root = null;
const tree = new Tree();
root = tree.insert(5, root);
root = tree.insert(6, root);
root = tree.insert(7, root);
console.log(root);
root = tree.insert(8, root);
root = tree.insert(9, root);
root = tree.insert(10, root);
tree.preOrderTraversal(root);
console.log('\n\n\n\n\n\n\n\n\n\n');
tree.inOrderTraversal(root);
console.log('\n\n\n\n\n\n\n\n\n\n');
tree.postOrderTraversal(root);
