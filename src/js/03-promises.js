const inputFirstDelay = document.querySelector('input[name="delay"]')
      const inputStepDelay = document.querySelector('input[name="step"]')
      const inputAmount = document.querySelector('input[name="amount"]')
      const btnSubmit = document.querySelector('button')


      const form = document.querySelector(".form");
    form.addEventListener("submit", handleFormSubmit)

    function handleFormSubmit (event) {
      event.preventDefault();
      const {amount, delay, step} = event.target.elements;
      let firstDelay = Number(delay.value);


      for (let i = 1; i <= amount.value; i++) {
        createPromise(i, firstDelay)
          .then(({ position, delay }) =>   renderField(` ✅ Fulfilled promise ${position} in ${delay}ms `))

          .catch(({ position, delay }) =>  renderField(`❌ Rejected promise ${position} in ${delay}ms`)

           );
        firstDelay+=Number(step.value)

        }
      
    };

    function createPromise(position, delay) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const shouldResolve = Math.random() > 0.3;
            if (shouldResolve) {
              resolve({position,delay})

            } else {
              reject({position,delay})

            }
          }, delay)})

      };

       function renderField(message) {
         const ul = document.createElement('ul');
         document.body.append(ul);
         ul.style.listStyle = 'none';
         const li = document.createElement('li');
         li.textContent = message;
         ul.append(li);
         setTimeout(() => {
           ul.remove();
         },  Math.floor(Number(inputFirstDelay.value) + Number(inputStepDelay.value)) * Number(inputAmount.value));

      }
