const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessenge = document.querySelector('.final')
const replayBtn = document.querySelector('#replay')
 
runAnimation()

function resetDom ()  {
  counter.classList.remove('hide')
  finalMessenge.classList.remove('.show')

  nums.forEach((num) => {
    num.classList.value = ''
  })

  nums[0].classList.add('in')
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = num.length - 1

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) {
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMessenge.classList.add('show')
      }
    })
  })
}

replayBtn.addEventListener('click', () => {
  resetDom()
  runAnimation()
})