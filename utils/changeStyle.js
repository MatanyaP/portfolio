const changeStyle = (className) => {
    // get random number between 0 and 1
    const random = Math.random();
    className.style.transform = 'scale(1.3)';
    className.style.top = `${Math.random() * 100}%`;
    className.style.transform = `rotate(${Math.random() * 360}deg)`;
    className.style.left = `${Math.random() * 100}%`;
    className.style.transition = `all ${Math.random() * 10}s`;
    setTimeout(() => {
        className.style.transform = 'scale(1)';
    }, 500);
    // if (random < 0.5) {
    //     className.style.transform = `rotate(${Math.random() * 360}deg)`;
    //     setTimeout(() => {
    //         changeStyle(className);
    //     }, 100);
    //     return;
    // }

}

export default changeStyle;