class HashMap {
  capacity = 16;
  load_factor = (this.capacity / 0.75);
  array = [];

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    hashCode = hashCode % this.capacity;
    return hashCode;
  }
}

const hash_map = new HashMap();

console.log(hash_map.hash("penis"));