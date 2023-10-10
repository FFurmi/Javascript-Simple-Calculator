let screen = document.querySelector('.screen')
let buttons = document.querySelectorAll('.data-btn')
let equal = document.querySelector('.btn-equal')
let clear = document.querySelector('.btn-clear')
let back = document.querySelector('.btn-back')
let square = document.querySelector('.btn-square')
let root = document.querySelector('.btn-root')
let cube = document.querySelector('.btn-cube')
let sinBtn = document.querySelector('.btn-sin')
let cosBtn = document.querySelector('.btn-cos')
let tanBtn = document.querySelector('.btn-tan')

buttons.forEach(function(button){
    button.addEventListener('click', function(e)
    {
        let value = e.target.dataset.num
        screen.value += value
    })
})

clear.addEventListener('click', function(){
    screen.value = ''
})

back.addEventListener('click', function(){
    screen.value = screen.value.slice(0, -1)
})

root.addEventListener('click', function(){
  if(screen.value == ''){
    messageReturn("Root")  
  }
  else{
   screen.value = Math.sqrt(screen.value)
  }
   
})

square.addEventListener('click', function(){
  if(screen.value == ''){
    messageReturn("Square")  
  }
  else{
    screen.value = Math.pow(screen.value, 2)
  }
})

cube.addEventListener('click', function(){
  if(screen.value == ''){
    messageReturn("cube")  
  }
  else{
    screen.value = Math.pow(screen.value, 3)
  }
})

sinBtn.addEventListener('click', function(){
  if(screen.value == ''){
    messageReturn("sin")  
  }
  else{
    degree = screen.value*Math.PI/180
    screen.value = Math.sin(degree)
  }
})

cosBtn.addEventListener('click', function(){
  if(screen.value == ''){
    messageReturn("sin")  
  }
  else{
    degree = screen.value*Math.PI/180
    screen.value = Math.cos(degree)
  }
})

tanBtn.addEventListener('click', function(){
  if(screen.value == ''){
    messageReturn("sin")  
  }
  else{
    degree = screen.value*Math.PI/180
    screen.value = Math.tan(degree)
  }
})

cube.addEventListener('click', function(){
  if(screen.value == ''){
    messageReturn("cube")  
  }
  else{
    screen.value = Math.pow(screen.value, 3)
  }
})

equal.addEventListener('click', function(e){

  if(screen.value == ''){
    messageReturn("equal")  
  }
  else{
    screen.value = eval(screen.value)
  }

})


function messageReturn(msg)
{
  screen.value = "Enter value and then click on "+msg
    setTimeout(function(){
      screen.value = ''
    }, 2000)
}
