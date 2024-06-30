document.addEventListener("DOMContentLoaded", () => {
document.querySelector('form')
document.addEventListener('submit', (e)=>{

  e.preventDefault()
  let task=e.target[0].value
  let li= document.createElement('li')

  let btn=document.createElement('button')
  btn.textContent='x'
  btn.addEventListener('click', (event)=>{
  console.log(event.target.parentNode)
  event.target.parentNode.remove()
  })
  li.textContent=  `${task} `
  li.appendChild(btn)
  console.log(li)
  document.getElementById('tasks').append(li)
})
})


  