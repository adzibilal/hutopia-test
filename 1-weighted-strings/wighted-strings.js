function calculateWeightedStrings() {
    const inputString = document.getElementById('inputString').value
    const queriesInput = document.getElementById('queries').value
    const queries = queriesInput.split(',').map(query => parseInt(query.trim()))

    const weights = new Map()

    for (let i = 0; i < inputString.length; i++) {
        let currentWeight = 0
        let j = i

        while (j < inputString.length && inputString[j] === inputString[i]) {
            currentWeight += inputString.charCodeAt(j) - 'a'.charCodeAt(0) + 1
            weights.set(inputString.slice(i, j + 1), currentWeight)
            j++
        }
    }

    const results = []

    for (const query of queries) {
        let found = false

        for (const [substring, weight] of weights) {
            if (weight === query) {
                found = true
                results.push('Yes')
                break
            }
        }

        if (!found) {
            results.push('No')
        }
    }

    document.getElementById('result').textContent = `Result: [${results.join(
        ', '
    )}]`
}
