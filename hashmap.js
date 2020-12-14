/**
 * 123 => [['key1', 'value1'], ['key2', 'value2']]
 * 234 => ['key1', 'value1'], ['key2', 'value2']]
 */

class HashMap {
  constructor() {
    this._storage = [];
  }

  hashStr(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i);
    }
    return result;
  }

  set(key, value) {
    const idx = this.hashStr(key);

    if (!this._storage[idx]) {
      this._storage[idx] = [];
    }

    this._storage[idx].push([key, value]);
  }

  get(key) {
    const idx = this.hashStr(key);

    if (!this._storage[idx]) {
      return undefined;
    }

    for (let keyValuePair of this._storage[idx]) {
      if (keyValuePair[0] === key) {
        return keyValuePair[1];
      }
    }
  }
}

const m = new HashMap();
m.set("name", "Jake");
m.set("lastName", "Asrorov");
m.set("lastName", "Asrorov");
console.log(m.get("name"));
console.log(m.get("lastName"));
console.log(m._storage);
