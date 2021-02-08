// 浮点数相加
// string add
// '13233.122', '212222.933', '0.9'

function add(...args) {
  return args.reduce((acc, cur) => {
    return addTwo(acc, cur)
  }, '')
}

function addTwo (a, b) {
  const [aInt, aDecimal] = a.split('.')
  const [bInt, bDecimal] = b.split('.')
  const [carryDecimal, resultDecimal] = addBase(aDecimal, bDecimal, false)

  const [carryInt, resultInt] = addBase(aInt, bInt)
  const [c, r] = addBase(`${carryInt > 0 ? carryInt : ''}${resultInt}`, carryDecimal.toString())
  return `${c > 0 ? c : ''}${r}${resultDecimal && '.'}${resultDecimal}`
}


function addBase(a, b, alignRight = true) {
  if (!a || !b) {
    return [0, a || b || '']
  }

  let aArr = a.split('')
  let bArr = b.split('')
  const maxLen = Math.max(aArr.length, bArr.length)

  let carry = 0
  let result = ''
  for (let i = maxLen - 1; i >= 0; i--) {
    let aVal
    let bVal
    if (alignRight) {
      aVal = aArr[i - maxLen + aArr.length]
      bVal = bArr[i - maxLen + bArr.length]
    } else {
      aVal = aArr[i]
      bVal = bArr[i]
    }
    aVal = Number(aVal || 0)
    bVal = Number(bVal || 0)
    const total = aVal + bVal + carry
    carry = Math.floor((total) / 10)
    rest = total % 10
    result = `${rest}${result}`
  }
  return [carry, result]
}


console.log(add('13233.122', '212222.933', '0.9'))

