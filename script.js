  //  ======== TASK 1 ========== 

  const wrapper = document.querySelector('.wrapper');
  wrapper.addEventListener('click', handler);

  function handler(event) {
    const targetSquare = event.target;
    if (!targetSquare.classList.contains('square')) return;
    event.target.remove();
    this.append(targetSquare);
    highlight(targetSquare);
  }

  function highlight(elem) {
    const isBlue = elem.classList.contains('blue');
    const isGreen = elem.classList.contains('green');
    const isYellow = elem.classList.contains('yellow');

    if (!isYellow && !isGreen && !isYellow) {
      elem.classList.add('blue');
    }

    if (isBlue) {
      elem.classList.remove('blue');
      elem.classList.add('green')
    }
    else if (isGreen) {
      elem.classList.remove('green');
      elem.classList.add('yellow');
    }
    else if (isYellow) {
      elem.classList.remove('yellow');
      elem.classList.add('blue');
    }
  }

  //  ======== TASK 2 ========== 
  const table = document.querySelector('.table');
  const td = document.querySelectorAll('.table-data');
  td.forEach(elem => elem.textContent = randomNum(1, 100));

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  table.addEventListener('click', tableHandler);

  function tableHandler(event) {
    const targetTd = event.target;

    if (!targetTd.classList.contains('table-data')) return;

    const tdText = document.querySelector('.table-data-text');
    tdText.textContent = `Selected number: ${targetTd.textContent}`;
  }
