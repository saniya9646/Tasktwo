function reverseFunction(num) {
    let digits = Array.from(String(num), Number);
    let reversedArray = digits.reduce((acc, digit) => [digit, ...acc], []);
    return parseInt(reversedArray.join(''));
}

function displayReversedNumber() {
    let num = 687;
    let reversedNum = reverseFunction(num);
    document.getElementById('reversedNumber').innerText = `Reversed Number: ${reversedNum}`;
}
