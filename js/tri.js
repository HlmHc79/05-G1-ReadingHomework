let dragged; 

function onDragOver(event) {
  // Prevent default to allow drop
  event.preventDefault();
}

function onDragLeave(event) {
  event.target.style.background = '';
}

function onDragEnter(event) {
  const target = event.target;
  if (target && dragged) {
      event.preventDefault();
      // Set the dropEffect to move
      event.dataTransfer.dropEffect = 'move'
      target.style.background = '#6EADB4';
  }
}

function onDrop(event) {
  const target = event.target;
  if (target && dragged) {
    target.style.backgroundColor = '';
    event.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    dragged.parentNode.removeChild(dragged);
    dragged.style.opacity = '';
    dragged.style.height = '120px';
    target.appendChild(dragged);
  }
}

function onDragStart(event) {
  let target = event.target;
  if (target && target.nodeName === 'IMG') { // If target is an image
      dragged = target;
      event.dataTransfer.setData('text', target.id);
      event.dataTransfer.dropEffect = 'move';
      // Make it half transparent
      event.target.style.opacity = .3;
  }
}

function onDragEnd(event) {
  if (event.target && event.target.nodeName === 'IMG') {
      // Reset the transparency
      event.target.style.opacity = ''; // reset opacity when drag ends 
      dragged = null; 
  }
}


const words = document.querySelector('.words');
const dropZone = document.querySelector('.grid-item-dropzone');

// Adding event listeners
words.addEventListener('dragstart', onDragStart);
words.addEventListener('dragend', onDragEnd);
dropZone.addEventListener('drop', onDrop);
dropZone.addEventListener('dragenter', onDragEnter);
dropZone.addEventListener('dragleave', onDragLeave);
dropZone.addEventListener('dragover', onDragOver);

