class HashMap {
  capacity = 16;
  loadFactor = this.capacity * 0.75;
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
    if (this.length() >= this.loadFactor) {
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
      for (let obj of this.hashMap[bucket]) {
        if (obj.key === hashCode) {
          obj.value = value;
          return
        }
      }
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

  has(key) {
    key = this.hash(key);

    for (const bucket of this.hashMap) {
      if (bucket == undefined) {
        continue;
      } else if (bucket.length > 1) {
        let head = bucket[0];
        while (head != null) {
          if (head.key === key) {
            return true;
          }
          head = head.nextNode;
        }
      } else if (bucket[0].key === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    key = this.hash(key);

    for (let bucket of this.hashMap) {
      if (bucket == undefined) {
        continue;
      } else if (bucket.length > 1) {
        let head = bucket[0];
        if (bucket[0].key === key) {
          bucket.shift();
          return true;
        }
        while (head.nextNode != null) {
          if (head.nextNode.key === key) {
            head.nextNode = head.nextNode.nextNode;
            bucket.splice(bucket.indexOf(head.nextNode), 1);
            return true;
          }
          head = head.nextNode;
        }
      } else if (bucket[0].key === key) {
        this.hashMap[this.hashMap.indexOf(bucket)] = undefined;
        return true;
      }
    }

    return false;
  }

  length() {
    let count = 0;

    for (const bucket of this.hashMap) {
      if (bucket == undefined) {
        continue;
      } else if (bucket.length > 1) {
        let head = bucket[0];
        while (head != null) {
          count++;
          head = head.nextNode;
        }
      } else if (bucket.length === 1) {
        count++;
      }
    }

    return count;
  }

  clear() {
    for (let i = 0; i < this.capacity; i++) {
      this.hashMap[i] = undefined;
    }
  }

  keys() {
    let keys = [];

    for (const bucket of this.hashMap) {
      if (bucket == undefined) {
        continue;
      } else if (bucket.length > 1) {
        let head = bucket[0];
        while (head != null) {
          keys.push(head.key);
          head = head.nextNode;
        }
      } else if (bucket.length === 1) {
        keys.push(bucket[0].key);
      }
    }

    return keys;
  }

  values() {
    let values = [];

    for (const bucket of this.hashMap) {
      if (bucket == undefined) {
        continue;
      } else if (bucket.length > 1) {
        let head = bucket[0];
        while (head != null) {
          values.push(head.value);
          head = head.nextNode;
        }
      } else if (bucket.length === 1) {
        values.push(bucket[0].value);
      }
    }

    return values;
  }

  entries() {
    let entries = [];

    for (const bucket of this.hashMap) {
      if (bucket == undefined) {
        continue;
      } else if (bucket.length > 1) {
        let head = bucket[0];
        while (head != null) {
          let entry = []
          entry.push(head.key);
          entry.push(head.value);
          entries.push(entry);
          head = head.nextNode;
        }
      } else if (bucket.length === 1) {
        let entry = []
          entry.push(bucket[0].key);
          entry.push(bucket[0].value);
          entries.push(entry);
      }
    }

    return entries;
  }
}

const hashMap = new HashMap();

hashMap.set("apple", "red");
hashMap.set("banana", "yellow");
hashMap.set("carrot", "orange");
hashMap.set("dog", "brown");
hashMap.set("elephant", "gray");
hashMap.set("frog", "green");
hashMap.set("grape", "purple");
hashMap.set("hat", "black");
hashMap.set("ice cream", "white");
hashMap.set("jacket", "blue");
hashMap.set("kite", "pink");
hashMap.set("hat", "cream");


console.log(hashMap.hashMap);
