export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('code is not a string');
    }

    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('name is not a string');
    }
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw TypeError('code is not a string');
    }
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('name is not a string');
    }
  }

  displayFullCurrency() {
    return (`${this.name} (${this.code}) `);
  }
}
