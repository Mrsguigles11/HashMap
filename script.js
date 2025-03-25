class HashMap {
  capacity = 16;
  loadFactor = this.capacity / 0.75;
  hashMap = [];

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }

  set(key, value) {
    if (this.hashMap.length >= this.loadFactor) {
      this.capacity = this.capacity * 2;
    }

    const hashCode = this.hash(key);
    const bucket = hashCode % this.capacity;
    const keyValuepair = { key: hashCode, value: value };

    if (
      this.hashMap.length === 0 ||
      this.hashMap[hashCode % this.capacity] == undefined
    ) {
      this.hashMap[bucket] = [keyValuepair];
      return;
    } else if (this.hashMap[bucket] != 0) {
      keyValuepair.nextNode = null;
      this.hashMap[bucket][this.hashMap[bucket].length - 1].nextNode =
        keyValuepair;
      this.hashMap[bucket].push(keyValuepair);
      return;
    }
  }

  get(key) {
    key = this.hash(key);

    for (const bucket of this.hashMap) {
      if (bucket == undefined) {
        continue;
      } else if (bucket.length > 1) {
        let head = bucket[0];
        while (head != null) {
          if (head.key === key) {
            return head.value;
          }
          head = head.nextNode;
        }
      } else if (bucket[0].key === key) {
        return bucket[0].value;
      }
    }

    return null;
  }
}

// const hashMap = new HashMap();

// hashMap.set("apple", "red");
// hashMap.set("banana", "yellow");
// hashMap.set("carrot", "orange");
// hashMap.set("dog", "brown");
// hashMap.set("elephant", "gray");
// hashMap.set("frog", "green");
// hashMap.set("grape", "purple");
// hashMap.set("hat", "black");
// hashMap.set("ice cream", "white");
// hashMap.set("jacket", "blue");
// hashMap.set("kite", "pink");
// hashMap.set("lion", "golden");

// console.log(hashMap.get("apple"));
