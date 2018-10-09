import _ from 'lodash';

class Node {
  constructor() {
    super();
    this.id = _.uniqueId();
    this.children = [];
    this.parentId = -1;
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
  let node = new Node();
  while (depth > 0) {
    for (let i = 0; i < width; i++) {
      node.insertChild(new Node());
    }
    depth--;
  }
  return node;
}
