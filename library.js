export default function (a, b) {
  return a + b
}

let name = 'mushahid'

function greeting(name) {
  return `Hello Mr ${name}`
}

class Person {
  constructor(name) {
    this.name = name
  }

  display() {
    return `${this.name}`
  }
}

export { name, greeting, Person }
