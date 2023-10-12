const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://plus.unsplash.com/premium_photo-1661601756523-470b21a18963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvbXB1dGVyJTIwZGFya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />'
  title.innerHTML = 'Full Stack Developer'
  excerpt.innerHTML =
    'I am a full stack developer with knowledge of C++, java and JavaScript as well as DBMS'
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/46.jpg" alt="" />'
  name.innerHTML = 'Lucifer Martin'
  date.innerHTML = 'Oct 11, 2023'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}