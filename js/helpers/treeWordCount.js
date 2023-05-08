import wordTree from "../data/wordTree.js"

function countWordsInTree(word) {
    let wordCount = 0

    const countNodes = (node) => {
        if (!node) return 0
        return (node.value.word !== word ? 0 : 1) + countNodes(node.left) + countNodes(node.right)
    }

    wordCount += countNodes(wordTree.root)
    
    return !wordCount ? 0 : wordCount 
}

export default countWordsInTree