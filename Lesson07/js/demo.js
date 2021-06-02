const LAZY_LOAD_DONE = 'js-lazy-load--handled';
const images = document.querySelectorAll('.js-lazy-load');
const config = {
  rootMargin: '50px 0px',
  threshold: 0.01,
};

let imageCount = images.length;

const observer = new IntersectionObserver(entries => {
  if (imageCount === 0) {
    observer.disconnect();
  }
  
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      console.log(entry);
      imageCount--;
      observer.unobserve(entry.target);
      preloadImage(entry.target);
    }
  });
}, config);

images.forEach(image => {
  if (image.classList.contains(LAZY_LOAD_DONE)) {
    return;
  }
  
  observer.observe(image);
});

function disconnect() {
  if (!observer) {
    return;
  }

  observer.disconnect();
}

function preloadImage(image) {
  const src = image.dataset.src;
  if (!src) {
    return;
  }
  
  return fetchImage(src).then(() => { 
    applyImage(image, src); 
  }); 
}

function fetchImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.onload = resolve;
    image.onerror = reject;
  });
}

function applyImage(img, src) {
  img.classList.add(LAZY_LOAD_DONE);
  img.src = src;
  img.classList.add('fade-in');
}
