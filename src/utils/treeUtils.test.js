import util from 'util';
import { generateTree } from './treeUtils';



it('generateTree...', () => {
  console.log('generateTree:', util.inspect(generateTree(3, 2), false, null, true /* enable colors */));
});
