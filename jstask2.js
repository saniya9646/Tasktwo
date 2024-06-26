function alphabet_order(str) {
    const lettersOnly = str.replace(/[^a-zA-Z]/g, '');
    const sorted = lettersOnly.split('').sort().join('');
    return sorted;
}

function displaySortedString() {
    const inputStr = 'Ethnus';
    const result = alphabet_order(inputStr);
    document.getElementById('input').innerText = `Input String: ${inputStr}`;
    document.getElementById('output').innerText = `Sorted String: ${result}`;
}
