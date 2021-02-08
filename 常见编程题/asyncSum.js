// 给定asyncAdd, 用asyncAdd求sum函数
function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 1000);
}

// await sum(...args)

async function sum (...args) {
  const queue = [...args]
  let pendingCount = 0

  return new Promise((resolve) => {
    function loop () {
      if (queue.length === 1 && pendingCount === 0) {
        resolve(queue[0])
      }

      if (queue.length > 1) {
        const val1 = queue.shift()
        const val2 = queue.shift()
        pendingCount++
        asyncAdd(val1, val2, (_, total) => {
          queue.push(total)

          console.log('total', total, queue)
          pendingCount--
          loop()
        })
      }
    }
    if (queue.length % 2 !== 0) {
      queue.unshift(0)
    }

    while (queue.length > 0) {
      loop()
    }
  })
}

