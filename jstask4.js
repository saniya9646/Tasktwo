function displayDate() {
    const currentDate = new Date().toLocaleDateString();
    document.getElementById('date').innerText = `Current Date: ${currentDate}`;
}

function displayTime() {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('time').innerText = `Current Time: ${currentTime}`;
}
