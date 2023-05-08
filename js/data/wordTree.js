class Node {
    constructor(value, id) {
        this.value = { word: value, id }
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.root = null
        this.size = 0
    }

    findNode(id) {
        if (this.size === 0) return null

        const checkNode = (node) => {
            if (!node) return null
            return node.value.id === id ? node : checkNode(node.left) || checkNode(node.right)
        }

        return checkNode(this.root)
    }

    addNode(value, parentID = null) {
        if (!parentID) {
            if (this.root) return null
            this.root = new Node(value, ++this.size)
            return this.root.value.id
        }
        let parent = this.findNode(parentID)

        if (!parent || (parent.left !== null && parent.right !== null)) return null

        let newNode = new Node(value, ++this.size)

        if (parent.left === null) {
            parent.left = newNode
            return this.size
        } else if (parent.right === null) {
            parent.right = newNode
            return this.size
        }
    }
}

const wordTree = new Tree()
wordTree.addNode("start")
wordTree.addNode("child",1)
wordTree.addNode("steak",1)
wordTree.addNode("movie",2)
wordTree.addNode("menu",2)
wordTree.addNode("map",3)
wordTree.addNode("pizza",3)
wordTree.addNode("steak",4)
wordTree.addNode("child",4)
wordTree.addNode("pizza",5)
wordTree.addNode("steak",5)
wordTree.addNode("start",6)
wordTree.addNode("pizza",6)
wordTree.addNode("menu",7)
wordTree.addNode("steak",7)
wordTree.addNode("map",9)
wordTree.addNode("menu",9)
wordTree.addNode("child",12)
wordTree.addNode("steak",12)
wordTree.addNode("map",15)

export default wordTree