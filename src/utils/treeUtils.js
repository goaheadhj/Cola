import _ from 'lodash';

class Node {
  constructor(level) {
    this.id = _.uniqueId();
    this.children = [];
    this.parentId = -1;
    this.level = level;
  }

  setParentId(id) {
    this.parentId = id;
  }

  insertChild(node) {
    node.setParentId(this.id);
    this.children.push(node);
  }
  getChildren() {
    return this.children;
  }
}

export function generateTree(depth, width) {
  let node = new Node(depth);
  while (depth > 0) {
    for (let i = 0; i < width; i++) {
      node.insertChild(generateTree(--depth, width));
    }
  }
  return node;
}
