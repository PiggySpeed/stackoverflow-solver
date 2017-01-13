// Binary Search Tree
// ------------------------------------------
function BinarySearchTree() {
  this._root = null;
}

BinarySearchTree.prototype = {
  constructor: BinarySearchTree,

  add: function (val){
    var node = {
      data: val,
      left: null,
      right: null
    };
    var current = null;
    var placed = false;

    if (this._root === null){
      console.log('adding root', val);
      this._root = node;
      placed = true;
    } else {
      current = this._root;
      while (!placed){
        if (val === current.data){
          console.log('duplicate', val);
          break;
        } else if (val < current.data) {
          if (current.left !== null) {
            current = current.left;
          } else {
            console.log('adding left', val);
            current.left = node;
            placed = true;
          }
        } else if (val > current.data) {
          if (current.right !== null) {
            current = current.right;
          } else {
            console.log('adding right', val);
            current.right = node;
            placed = true;
          }
        }
      }
    }
    return placed;
  },

  remove: function (value){
    var found = false;
    var parent = null;
    var current = this._root;
    var childCount = null;
    var replacement = null;
    var replacementParent = null;

    while (!found && current){
      if (value < current.left){
        parent = current;
        current = current.left;
      } else if (value > current.right){
        parent = current;
        current = current.right;
      } else {
        found = true;
      }
    }

    if (found){
      childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);

      if (current === this._root){
        switch (childCount){
          case 0:
            this._root = null;
            break;
          case 1:
            this._root = current.right === null ? current.left : current.right;
            break;
          case 2:
            replacement = this._root.left;

            while (replacement.right !== null){
              replacementParent = replacement;
              replacement = replacement.right;
            }

            if (replacementParent !== null){
              replacementParent.right = replacement.left;

              replacement.right = this._root.right;
              replacement.left = this._root.left;
            } else {
              replacement.right = this._root.right;
            }
            this._root = replacement;
        }
      } else {
        switch(childCount){
          case 0:
            if (current.value < parent.value){
              parent.left = null;
            } else {
              parent.right = null;
            }
            break;
          case 1:
            if (current.value < parent.value){
              parent.left = (current.left === null) ? current.right : current.left;
            } else {
              parent.right = (current.left === null) ? current.right : current.left;
            }
            break;
          case 2:
            replacement = current.left;
            replacementParent = current;

            while (replacement.right !== null){
              replacementParent = replacement;
              replacement = replacement.right;
            }

            replacementParent.right = replacement.left;

            replacement.right = current.right;
            replacement.left = current.left;

            if (current.value < parent.value){
              parent.left = replacement;
            } else {
              parent.right = replacement;
            }
        }
      }

    }

  },

  invert: {
    // todo
  },

  contains: function (val){
    if (Object.prototype.toString.call(val) !== '[object Number]'){
      return false;
    }

    var found = false;
    var current = this._root;

    while (!found && current){
      console.log('searching ', current.data);
      if (val === current.data){
        found = true;
      } else if (val < current.data) {
        current = current.left;
      } else if (val > current.data) {
        current = current.right
      } else {
        break;
      }
    }
    return found;
  },

  traverseDFS: function(process){
    const result = [];

    const depthFirst = (node) => {
      if (node){
        result.push(node.data);
        if (node.left !== null) {
          depthFirst(node.left);
        }
        process.call(this, node);
        if (node.right !== null) {
          depthFirst(node.right);
        }
      }
    };
    depthFirst(this._root);

    return result;
  },

  traverseBFS: function(process){
    const result = [];
    const queue = [this._root];
    var current = null;

    while (queue.length > 0){
      current = queue.shift();
      result.push(current.data);
      process.call(this, current);

      if (current.left !== null){
        queue.push(current.left);
      }
      if (current.right !== null){
        queue.push(current.right);
      }
    }

    return result;
  },

  size: function (){
    return this.traverseDFS.length;
  },

  toArray: function (){
    return this.traverseBFS;
  }

};

const values = [6, 4, 8, 2, 5, 7, 9, 3];
const x = new BinarySearchTree();
values.forEach( item => x.add(item));

//var bear = 'tree';

console.log(x.traverseBFS(() => console.log('traversing...')));