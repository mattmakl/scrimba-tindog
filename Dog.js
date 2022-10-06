class Dog{
    constructor(data){
        Object.assign(this, data)
    }
    
    getBadge(){
        return this.hasBeenLiked ? 'src="./images/badge-like.png"' 
            : this.hasBeenSwiped && !this.hasBeenLiked ? 'src="./images/badge-nope.png"' 
            : null
    }
    
    getProfileHtml(){
        const {name, avatar, age, bio} = this
        return `
                <div class="profile--container" style="background-image:url(${avatar}">
                    <img class="badge" ${this.getBadge()}/>
                    <div class="profile--info">
                        <div class="profile--bio">${name}, ${age}</div>
                        <div class="profile--copy">${bio}</div>        
                    </div>    
                </div>`
    }
    
    setSwipe(like) {
        this.hasBeenLiked = like
        this.hasBeenSwiped = true
    }
}

export default Dog