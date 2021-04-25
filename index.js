let projectOne = document.getElementById('projectOne')

projectOne.addEventListener("mouseover", ()=>{
    setTimeout(function() {
        projectOne.innerHTML = `<a href='https://2021-xandicea.dev.io-academy.uk/collectorsApp/'><h2>Project</a> / <a href="https://github.com/xz-dice/collection">Github</a></h2>`
    }, 1000);
})
