const canvas=document.querySelector('canvas');
const map=document.querySelector('.battleMap');
const c=canvas.getContext('2d');

canvas.width=1080;
canvas.height=720;

c.fillStyle='black';
c.fillRect(0,0,canvas.width, canvas.height);
