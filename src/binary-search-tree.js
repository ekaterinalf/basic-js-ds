const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(value) {
    this.node = addData(this.node, value);
    function addData(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (value < node.data) {
        node.left = addData(node.left, value)
      } else {
        node.right = addData(node.right, value)
      }
      return node;
    }
  }

  has(value) {
    return isHas(this.node, value);

    function isHas(node, value) {
      if (!node) {
        return false;
      }
      if (value === node.data) {
        return true;
      }
      if (value < node.data) {
        return isHas(node.left, value)
      }
      else {
        return isHas(node.right, value)
      }
    }
  }

  find(value) {
    return searchValue(this.node, value);

    function searchValue(node, value) {
      if (!node) {
        return null;
      }
      if (value === node.data) {
        return node;
      }
      if (value < node.data) {
        return searchValue(node.left, value);
      }
      else {
        return searchValue(node.right, value);
      }
    }
  }

  remove(value) {
    this.node = removeNode(this.node, value);

    function removeNode(node, value) {
      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {

          if (!node.left && !node.right) {
            return null;
          }

          if (!node.left) {
            node = node.right;
            return node;
          }

          if (!node.right) {
            node = node.left;
            return node;
          }

          let minRight = node.right;
          while (minRight.left) {
            minRight = minRight.left;
          }
          node.data = minRight.data;
          node.right = removeNode (node.right, minRight.data);
          return node;
      }
    }
  }

  min() {
    let minNode = this.node;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;
  }

  max() {
    let maxNode = this.node;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};