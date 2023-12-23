const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert("Sabia que ibas a contestar con un si, pero aun no estamos listos, pero dime, ¿Quieres que seamos los mismos de antes?, Contestame por mensaje")
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})