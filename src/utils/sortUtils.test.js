import {
  generatorEls,
  clone,
  bubbleSort,
  selectSort,
  insertSort,
  mergeSort
} from './sortUtils';

const elements = generatorEls(5);
console.log('origin:', elements);

it('bubbleSort...', () => {
  console.log('bubbleSort:', bubbleSort(clone(elements)));
});

it('selectSort...', () => {
  console.log('selectSort:', selectSort(clone(elements)));
});

it('insertSort...', () => {
  console.log('insertSort:', insertSort(clone(elements)));
});

it('mergeSort...', () => {
  console.log('mergeSort:', mergeSort(clone(elements)));
});
