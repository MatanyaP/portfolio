const changeStyle = (className) => {
    // get random number between 0 and 1
    const random = Math.random();
    className.style.transform = `translate(${random * 100}%, ${random * 100}%)`;
    if (random < 0.5) {
        className.style.transform = 'scale(1.3)';
        className.style.top = `${random * 100}%`;
        className.style.transform = `rotate(${random * 360}deg)`;
        className.style.left = `${random * 100}%`;
        className.style.transition = `all ${random * 10}s`;
        setTimeout(() => {
            className.style.transform = 'scale(1)';
        }, 500);
        return;
    }

    className.style.transition = `all ${random * 10}s`;
    setTimeout(() => {
        className.style.transform = 'scale(1.3)';
    }, 1000);
    className.style.transition = `all ${random * 10}s`;
    setTimeout(() => {
        className.style.transform = 'scale(1)';
    }, 1500);
}

export default changeStyle;