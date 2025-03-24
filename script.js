class HashMap {
  capacity = 16;
  loadFactor = (this.capacity / 0.75);
  hashMap = [];

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    hashCode = hashCode % this.capacity;
    return hashCode;
  }

  set(key, value) {

    if (this.hashMap.length >= this.loadFactor) {
      this.capacity = this.capacity * 2;
    }

    const hashCode = this.hash(key);

    for (let bucket of this.hashMap) {
      if (bucket[0] === hashCode) {
        bucket[1] = value;
        // console.log(this.hashMap);
        return
      }
    }

    const array = [hashCode, value];
    this.hashMap.splice(hashCode, 1, array);

    // console.log(this.hashMap)
  }
}

const hashMap = new HashMap();

hashMap.set('apple', 'red')
hashMap.set('banana', 'yellow')
hashMap.set('carrot', 'orange')
hashMap.set('dog', 'brown')
hashMap.set('elephant', 'gray')
hashMap.set('frog', 'green')
hashMap.set('grape', 'purple')
hashMap.set('hat', 'black')
hashMap.set('ice cream', 'white')
hashMap.set('jacket', 'blue')
hashMap.set('kite', 'pink')
hashMap.set('lion', 'golden')

console.log(hashMap.hashMap)