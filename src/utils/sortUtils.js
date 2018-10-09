export function generatorEls(n) {
  const elements = [];
  while (elements.length < n) {
    let element = Math.floor(Math.random() * 1000);
    elements.push(element);
  }
  return elements;
}

export function clone(origin) {
  return JSON.parse(JSON.stringify(origin));
}

export function bubbleSort(els) {
  for (let i = els.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (els[j] > els[j + 1]) {
        let temp = els[j];
        els[j] = els[j + 1];
        els[j + 1] = temp;
      }
    }
  }
  return els;
}

export function selectSort(els) {
  for (let i = 0; i < els.length; i++) {
    for (let j = i + 1; j < els.length; j++) {
      if (els[i] > els[j]) {
        let temp = els[i];
        els[i] = els[j];
        els[j] = temp;
      }
    }
  }
  return els;
}

// function insertSort(els) {
//   for(let i = 1; i < els.length; i++) {
//     let key = els[i];
//     for(let j = i - 1; j > -1; j--){
//       if(key < els[j]) {
//         els[j + 1] = els[j];
//         if(j === 0){
//           els[j] = key;
//         }
//       } else {
//         els[j + 1] = key;
//         break;
//       }
//     }
//   }
//   return els;
// }

export function insertSort(els) {
  for (let i = 1; i < els.length; i++) {
    for (let j = 0; j < i; j++) {
      if (els[i] < els[j]) {
        els.splice(j, 0, els[i]);
        els.splice(i + 1, 1);
        break;
      }
    }
  }
  return els;
}

// 归并排序，递归实现
export function mergeSort(els) {
  function merge(left, right) {
    let final = [];
    while (left.length > 0 && right.length > 0) {
      final.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return final.concat(left).concat(right);
  }

  if (els.length < 2) {
    return els;
  } else {
    let mid = Math.ceil(els.length / 2);
    let left = els.splice(0, mid);
    let right = els;
    return merge(mergeSort(left), mergeSort(right));
  }
}

export function mergeSort2(els) { }
