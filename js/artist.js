const followBtn = document.querySelectorAll('.follow')
const followingBtn = document.querySelectorAll('.following')

followBtn.forEach(btn => {
   btn.addEventListener('click', e => {
      e.preventDefault()
      if(btn.className == 'follow'){
         btn.classList.add('following')
         btn.innerText = 'Following'
      }else{
         btn.classList.remove('following')
         btn.innerText = 'Follow'
      }
   })
})

followingBtn.forEach(btn => {
   btn.addEventListener('click', e => {
      e.preventDefault()
      if(btn.className == 'following'){
         btn.classList.remove('following')
         btn.classList.add('follow')
         btn.innerText = 'Follow'
      }else{
         btn.classList.remove('follow')
         btn.classList.add('following')
         btn.innerText = 'Following'
      }
   })
})