const bTree = require('./AlgoMonster/Search_Algorithms/Depth_First_Search/binaryTree');

const exampleTree = new bTree.BinaryTree(10);
exampleTree.buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10);

function prettyPrint(currentNode, indentCount = 10) {

  //If the currentNode is null or has no data, then return
  if (currentNode === null || currentNode.data === null) {
    return
  }

  console.log(indent(currentNode.data, indentCount));

  if (currentNode.left != null && currentNode.right != null) {
    console.log('/' );
  }




}


/* Borrowed From the blogpost @ https://cwestblog.com/2014/01/02/javascript-indenting-text/ */

/**
 * Indents the given string
 * @param {string} str  The string to be indented.
 * @param {number} numOfIndents  The amount of indentations to place at the
 *     beginning of each line of the string.
 * @param {number=} opt_spacesPerIndent  Optional.  If specified, this should be
 *     the number of spaces to be used for each tab that would ordinarily be
 *     used to indent the text.  These amount of spaces will also be used to
 *     replace any tab characters that already exist within the string.
 * @return {string}  The new string with each line beginning with the desired
 *     amount of indentation.
 */

function indent(str, numOfIndents, opt_spacesPerIndent) {
  str = str.replace(/^(?=.)/gm, new Array(numOfIndents + 1).join('\t'));
  numOfIndents = new Array(opt_spacesPerIndent + 1 || 0).join(' '); // re-use
  return opt_spacesPerIndent
    ? str.replace(/^\t+/g, function (tabs) {
      return tabs.replace(/./g, numOfIndents);
    })
    : str;
}