let areaCV=document.getElementById('area-cv')

let resumeButton=document.getElementById('resume-button')

let opt={
    margin: 0,
    filename : 'trishit-pal-cv.pdf',
    image: {type : 'jpeg', quality: 0.98},
    html2canvas : {scale : 1},
    jsPDF: { format: 'letter', orientation :'portrait'} 
}
function generateResume(){
    html2pdf(areaCV,opt)
}

function scaleCv(){
    document.body.classList.add('scale-cv')
}

function removeScale(){
    document.body.classList.remove('scale-cv')
}
resumeButton.addEventListener('click', ()=>{
    scaleCv()
    generateResume()
})
