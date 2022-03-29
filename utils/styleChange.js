const styleChange = (className) => {
    // get random number between 0 and 1
    const random = Math.random();
    if (random < 0.5) {
        className.style.transform = `rotate(${Math.random() * 360}deg)`;
        setTimeout(() => {
            styleChange(className);
        }, 100);
    } else {
        className.style.transform = 'scale(1.1)';
        setTimeout(() => {
            className.style.transform = 'scale(1)';
        }, 500);
    }
        
}

export default styleChange;