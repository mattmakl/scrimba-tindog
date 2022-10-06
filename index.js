import data from "./data.js"
import Dog from "./Dog.js"

const profile = document.getElementById("profile")

let messageCount = 0
const msgList = []
let num = 0
let profileDog = new Dog(data[num])

const next = () => {
    setTimeout(() => {
        if(num === data.length - 1){
            showEndMessage()
            setTimeout(showMessageCount,800)
        } else {
            num ++
            profileDog = new Dog(data[num])
            render()
            } 
    },500)
}

const stamp = (id) => { 
    if(id === 'yes-btn'){
        profileDog.setSwipe(true)
         messageCount ++
         msgList.push(profileDog.name)
         } else {
             profileDog.setSwipe(false)
         } 
    render()
}

const render = () => {
    profile.innerHTML = profileDog.getProfileHtml()
    }

const initialise = () => {
    setTimeout(render,1000)
}

const showEndMessage = () => {
    profile.innerHTML = `
        <div class="profile--container">
            <div class="loading"> 
                <h1>Tindog</h1>
                <p class="">No more matches</p>   
            </div>
        </div>
    `
    setTimeout(showMessageCount,1000)
}

const showMessageCount = () => {
    document.querySelector('.bubble').innerText = messageCount
    document.querySelector('.bubble').style.visibility = 'visible'

}

const getMessageHtml = (doggo) => {
        const dog = data.filter(dog => dog.name === doggo)
        return `
        <div class="message">
        <img class="msg--image" src="${dog[0].avatar}"> 
            <div class="msg--text">
                <div class="msg--name">${doggo}</div>
                <div class="msg--body">${dog[0].message}</div>     
            </div>
        </div>`
    }

const showMessageList = () => {
    let list = ''
    msgList.forEach(dog => list += getMessageHtml(dog))
    profile.innerHTML = `
    <h3>You have ${messageCount} new message${messageCount===1?'':'s'}</h3><hr>
    <div class="message--container">
        ${list}
    </div>`  
}

document.querySelector(".button--container").addEventListener('click',(e)=>{
    stamp(e.target.id)
    setTimeout(next,1000)
})
document.querySelector(".message--icon").addEventListener('click', showMessageList)
document.querySelector(".logo--icon").addEventListener('click', initialise)

initialise()

