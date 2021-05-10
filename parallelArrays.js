let keys = []
let values = []

function insert(key, value) {
  keys.push(key)
  values.push(value)
}

function access(key) {
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === key) {
      return values[i]
    }
  }
}

