const navbar = document.querySelector('.vp-navbar');
const blurValues = [10, 8, 6, 4, 2];
const gradients = [[0, 0, 20],[0, 20, 40],[20, 40, 60],[40, 60, 80],[60, 80, 100]];

blurValues.forEach((_, index) => {
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.inset = '0';
    div.style.zIndex= '-1';
    div.style.backdropFilter = `blur(${blurValues[index]}px)`;
    div.style.maskImage = `linear-gradient(to bottom, 
    rgba(0,0,0,1) ${gradients[index][0]}%, 
    rgba(0,0,0,1) ${gradients[index][1]}%, 
    rgba(0,0,0,0) ${gradients[index][2]}%)`;
    navbar.appendChild(div);
});