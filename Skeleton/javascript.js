const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')
const aniated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')
setTimeout(getData, 2500)
function getData() {
    header.innerHTML = 
    '<img src="https://source.unsplash.com/1600x900/?nature,water" alt="" />'
    title.innerHTML = 'google codewithrandom'
    excerpt.innerHTML =
    'go to google and search or type codewithradom for project code, also i share 100 + frontend projects'
    profile_img.innerHTML = 
        '<img src="https://source.unsplash.com/1600x900/>nature,water" alt="" />'
    name.innerHTML = 'CODEWITHRANDOM'
    date.innerHTML = '26april 2022'
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}