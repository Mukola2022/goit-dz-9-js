const refs = {
  inputFirstDelay: document.querySelector('input[name="delay"]'),
  inputStepDelay: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button'),
  form: document.querySelector('.form'),
};
refs.form.addEventListener('click', hendlChange);
function hendlChange(e) {
  e.preventDefault();
}
let delay = refs.inputFirstDelay.value;
let position = 0;

refs.btnSubmit.addEventListener('click', createPromise);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })

}

for (let i = 0; i < refs.inputAmount.value; i++) {
const inputStepDelay = i * refs.inputStepDelay.value + refs.inputFirstDelay.value;
setInterval(() => {
createPromise(i + 1, inputStepDelay).then(({ position, delay }) => (`Fulfilled promise ${position} in ${delay}ms`))
.catch(({ position, delay }) => (`Rejected promise ${position} in ${delay}ms`));
}, inputStepDelay)
}

createPromise(2, 1500)
.then(({ position, delay }) => {
console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
console.log(`❌ Rejected promise ${position} in ${delay}ms`);
});












 