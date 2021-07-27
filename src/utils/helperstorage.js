export default class LocalStorageStore {
  constructor(prefix) {
    this.prefix = prefix;
  }

  // eslint-disable-next-line class-methods-use-this
  prepareKey(key, prefix) {
    if (prefix) {
      return `${prefix}_${key}`;
    }
    return key;
  }

  // eslint-disable-next-line class-methods-use-this
  prepareArrayKey(key, prefix, arrKey) {
    if (prefix) {
      return `${prefix}_${arrKey}_${key}`;
    }
    return key;
  }

  create(key, value) {
    const newKey = this.prepareKey(key, this.prefix);
    localStorage.setItem(newKey, value);
  }

  delete(key) {
    const newKey = this.prepareKey(key, this.prefix);
    localStorage.removeItem(newKey);
  }

  getLocalData(key) {
    const newKey = this.prepareKey(key, this.prefix);
    return localStorage.getItem(newKey);
  }

  createFromArray(key, arrKey, value) {
    const newKey = this.prepareArrayKey(key, this.prefix, arrKey);
    localStorage.setItem(newKey, value);
  }

  getLocalDataFromArray(key, arrKey) {
    const newKey = this.prepareArrayKey(key, this.prefix, arrKey);
    return localStorage.getItem(newKey);
  }

  clear() {
    if (this.prefix) {
      const arr = []; // Array to hold the keys
      // Iterate over localStorage and insert the keys that meet the condition into arr
      for (let i = 0; i < localStorage.length; i += 1) {
        if (
          localStorage.key(i).substring(0, this.prefix.length) === this.prefix
        ) {
          arr.push(localStorage.key(i));
        }
      }

      // Iterate over arr and remove the items by key
      for (let i = 0; i < arr.length; i += 1) {
        localStorage.removeItem(arr[i]);
      }
    }
  }
  // / Here write something where, we will find all the keys with some fixed prefix and delete them all. This way your storage will become so optimized that, we can build simple helper in the ags side that clear_ags so we just have to pass the prefix and we are done. If we will not implement this right now then in the next product will have complications.
}
