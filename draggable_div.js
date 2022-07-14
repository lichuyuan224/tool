const div1 = document.createElement('div');
div1.style.width = '170px';
div1.style.height = '170px';
div1.style.background = 'white';
div1.style.border = '1px solid black';
div1.style.height = '100px';
div1.style.position = 'absolute';
div1.style.left = '0';
div1.style.top = '0';
div1.style.opacity = '999';
const body = document.body;
body.insertBefore(div1, body.lastChild);

const status = {
  dragging: false,
  position: {
    x: 0,
    y: 0,
  },
};
div1.addEventListener('mousedown', (e) => {
  status.dragging = true;
  status.position.x = e.clientX;
  status.position.y = e.clientY;
});

div1.addEventListener('mousemove', (e) => {
  if (!status.dragging) return;
  const x = e.clientX;
  const y = e.clientY;
  const delteX = x - status.position.x;
  const delteY = y - status.position.y;
  const left = parseInt(div1.style.left);
  const top = parseInt(div1.style.top);
  div1.style.left = left + delteX + 'px';
  div1.style.top = top + delteY + 'px';
  status.position.x = x;
  status.position.y = y;
});

div1.addEventListener('mouseup', (e) => {
  status.dragging = false;
});
