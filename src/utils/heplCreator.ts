const helpCreator = (ui: string) => {
    ui = ui.trim()
    if (ui.length !== 19 && ui.length !== 24) return null
    if (ui.match(/\D/)) return null
    let sum = getSum(ui, 1)
    let lastNum = getLastNum(sum)
    if(lastNum !== 10) return ui + lastNum
    sum = getSum(ui, 3)
    lastNum = getLastNum(sum)
    if(lastNum !== 10) return ui + lastNum
    return ui + 0
}

function getSum (ui: string, startWeight: number) {
    return ui.split('').reduce((acc, num, ind) => {
        let weight = ind + startWeight
        while(weight > 10) {
            weight -= 10
        }
        acc += parseInt(num) * weight
        return acc
    }, 0 )
}

function getLastNum (sum: number) {
    let lastNum = sum
    while(lastNum > 11) {
        lastNum %= 11
    }
    return lastNum
}

export default helpCreator