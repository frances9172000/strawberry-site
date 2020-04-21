let btns = document.querySelectorAll('.btn-effect');

btns.forEach((btn, index) => {
   btn.addEventListener('mousedown', (e) => {
      let x = e.offsetX;
      let y = e.offsetY;
      crtRipple(btn, index);
      styleRipple(x, y, index);
      removeRipple(btn, index);
   })
})

function crtRipple(btn, index) {
   let t = document.createElement('span')
   t.className = `spn spn-${index}`
   btn.appendChild(t)
}

function styleRipple(x, y, index) {
   let spns = document.querySelectorAll(`.spn-${index}`)
   spns.forEach(spn => {
        if(spn === spns[spns.length-1]) {
         spn.style.top = `${y}px`;
         spn.style.left = `${x}px`;
        }
   });
}

function removeRipple(btn, index) {
   let spn = document.querySelectorAll(`.spn-${index}`)
   if(spn.length >= 10) {
      btn.removeChild(spn[0])
   }
}