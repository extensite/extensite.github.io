
function getID(id) {
        return document.getElementById(id)
    }  
    
    function Person(id) {
        this.id = id
        this.animations = []
          
        this.changeImage = function(link) {
            getID(this.id).querySelector("img").src = link
        }
        this.change = function(face) {
            this.changeImage(links[face])
        }    
        this.addAnimation = function(name, time) {
            this.animations.push({name: name, time: time, getString: function() {
                return this.name + " " + this.time + "s infinite step-end"
            }})
            this.refreshAnimations()
        }
        this.removeAnimation = function(name) {
            this.animations = this.animations.filter(function( obj ) {
              return obj.name !== name;
            });
            this.refreshAnimations()
        }
        this.refreshAnimations = function() {
            animString = this.animations.map((anim) => { return anim.getString() }).join(",")
            getID(this.id).querySelector("img").style.animation = animString
        }
        this.addEffect = function(id, effect) {
            getID(id).classList.add(effect)
        }
        this.removeEffect = function(id, effect) {
            getID(id).classList.remove(effect)
        }
        this.hide = function(id) {
            addEffect(id, "hidden")
        }
        this.show = function(id) {
            removeEffect(id, "hidden")
        }
        this.walk = function() {}
        
    }

    function loop() {
        
        requestAnimationFrame(loop)
    }
        
    links = {normal: "https://discordapp.com/channels/@me/621721224627748874/634340832169820160"}
    qt = new Person("qt")
    qt.change("normal")
    qt.addAnimation("bob", 2)
    qt.addAnimation("jump", 2)
