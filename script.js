// ** While loop **

// for loop -> when you KNOW how many times you want to loop
// while loop -> when you are NOT SURE how many times you want to loop

let finished = true

while (finished == true) {
  console.log('looping')
  finished = false
}



// ** addEventListener **

// DOM -> Document Object Model

let playDiv = document.getElementById('play')

// playDiv.onclick = () => {
//   console.log('yo yo')
// }


// playDiv.addEventListener('click', function() {
//   console.log('Hey yo!')
// })

document.addEventListener('keydown', function(e) {
  if (e.key == 'q') {
    console.log('you pressed Q')
    document.getElementById('punch').play()
  }
  else {
    console.log('Not Q')
    document.getElementById('victory').play()
  }
})


// ** <audio> Tags **

