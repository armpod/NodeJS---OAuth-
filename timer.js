const rocks = time => {
    console.log(`Hello after ${time} seconds`)
}

setTimeout(rocks, 4 * 1000 , 4)
setTimeout(rocks, 8 * 1000 , 8)

