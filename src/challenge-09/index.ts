function groupBy(collection: any[], it: any): Object {
  let result: Object = {};

  for (let item of collection) {
    let index: any = ((typeof it) === 'function')
      ? it(item)
      : item[it]

    result[index] = result[index]
      ? [ ...result[index], item ]
      : [ item ]
  }

  return result;
}