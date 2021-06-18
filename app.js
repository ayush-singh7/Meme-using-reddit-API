var after = ''

function fetchMemes() {
    colorChange()



    let parentdiv = document.createElement('div')
    parentdiv.id = 'memes'
    fetch('https://www.reddit.com/r/dankmemes.json')
        .then(response => response.json())
        .then(body => {
            for (let index = 0; index < body.data.children.length; index++) {
                if (body.data.children[index].data.post_hint === 'image') {
                    //console.log(body)
                    let poster = document.createElement('poster')
                    let div = document.createElement('div')
                    let h4 = document.createElement('h4')
                    let image = document.createElement('img')
                    image.src = body.data.children[index].data.url
                    h4.textContent = body.data.children[index].data.title
                    poster.textContent = body.data.children[index].data.author
                    
                    div.appendChild(h4)
                    div.appendChild(image)
                    div.appendChild(poster)
                    parentdiv.appendChild(div)
                }
            }
            document.body.appendChild(parentdiv)
        }
        );
}