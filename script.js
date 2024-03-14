const images = Array.from(document.getElementsByClassName('imgBoxTag'));
const mainImage = document.getElementById('mainTargetImage')
images.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        const clickedImageIndex = images.indexOf(e.target);
        mainImage.setAttribute('src', e.target.getAttribute('src'));
        alert(`This is image ${clickedImageIndex+1}`)

    })
})