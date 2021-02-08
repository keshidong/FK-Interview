// 给定一个二叉树，判断它是否是高度平衡的二叉树。
// 本题中，一棵高度平衡二叉树定义为：
// 一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。

//     1          5
//    / \        / \
//   2   3      3   4
//  / \            / \
// 4   5          8   9

// https://leetcode-cn.com/problems/balanced-binary-tree/

function isBalanced (tree) {
  function height (tree) {
      if (!tree) return 0
      const leftHeight = height(tree.left)
      const rightHeight = height(tree.right)
      // 用 -1表示不平衡
      if (leftHeight === -1) return -1
      if (rightHeight === -1) return -1
      if (Math.abs(leftHeight - rightHeight) <= 1) {
          return Math.max(leftHeight, rightHeight) + 1
      }
      return -1
  }
  return height(tree) !== -1
}
