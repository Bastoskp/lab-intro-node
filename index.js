class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    })
    this.length = this.items.length

  get(pos) {
    if (this.length >= pos){
      return this.items[pos]
    } else {
      throw new Error("outOfBounds")
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }else{
      return this.items[0]
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }else{
      return this.items[0]
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
