
const refs = {
  body: document.querySelector('body'),
  btnSubmit: document.querySelector("button[type='submit']"),
}

refs.body.style.backgroundColor = '#f7eff4';
refs.btnSubmit.disabled = true;









function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
