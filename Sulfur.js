
class Sulf{
    /**
     * 
     * @param {String} type if you left it empty the type will be div
     */
    constructor(type="div"){
        this.type = type
        this.element = document.createElement(type)
    }
    /**
     * 
     * @param {HTMLElement} Element html element or string for query
     */
    put(Element){
        if(Element instanceof HTMLElement){
            Element.appendChild(this.element)
        }else if(typeof Element == "string"){
            document.querySelector(Element).appendChild(this.element)
        }else{
            throw new Error(`wrong argument useage`)
        }
    }
    /**
     * 
     * @param {Number} x Position x
     * @param {Number} y Position y
     * @param {String} mode any css position mode. by default its fixed
     */
    moveTo(x,y,mode="fixed"){
        this.css({
            position:mode,
            left:`${x}px`,
            top:`${y}px`
        })
    }
    /**
     * 
     * @param {Number} x Position x
     * @param {Number} y Position y
     * @description move the element relative to its position
     */
    relMove(x,y){
        this.css({
            position:"relative",
            left:`${x}px`,
            top:`${y}px`
        })
    }
    /**
     * 
     * @param {Color} col either hex or rgb or hsl ...
     * @description color of text or content
     */
    color(col){
        this.element.style.color = col
    }
    /**
     * 
     * @param {Color} col either hex or rgb or hsl ...
     * @description color of the background
     */
    bg(col){
        this.element.style.background = col
    }
    /**
     * 
     * @param {String} data keep it empty will return html content 
     */
    html(data){
        if(!data){
            return this.element.innerHTML
        }
        this.element.innerHTML = data
    }
    /**
     * 
     * @param {String} data keep it empty will return text content 
     */
    text(data){
        if(!data){
            return this.element.innerText
        }
        this.element.innerText = data
    }
    /**
     * 
     * @param {String} EventType event type
     * @param {Function} callback function to execute
     */
    on(EventType,callback){
        this.element.addEventListener(EventType,callback)
    }
    /**
     * 
     * @param {Object} data modify css of element ; use either string or object
     */
    css(data){
        if(typeof data == "string"){
            this.element.style = data
        }else if(data instanceof Object && !(data instanceof Array)){
            Object.assign(this.element.style,data)
        }
    }
    /**
     * to hide the element
     */
    hide(){
        this.element.hidden = true
    }
    /**
     * to show hidden element
     */
    unhide(){
        this.element.hidden = false
    }
    /**
     * toggle hide on/off
     */
    toggleHide(){
        this.element.hidden = !this.element.hidden
    }
    /**
     * disable the element
     */
    disable(){
        this.element.disabled = true
    }
    /**
     * enable the element
     */
    enable(){
        this.element.disabled = false
    }
    /**
     * 
     * @param {Object} data object contain all attributes u need to modify at once
     */
    attr(data){
        if(data instanceof Object && !(data instanceof Array)){
            for(let k in data){
                this.element.setAttribute(k,data[k])
            }
        }else{
            throw new Error("use Object only")
        }
    }
    /**
     * 
     * @param {Object} data assign data to the element
     */
    assign(data){
        if(data instanceof Object && !(data instanceof Array)){
            for(let k in data){
                Object.assign(this.element,data)
            }
        }else{
            throw new Error("use Object only")
        }
    }
    /**
    * click the element
    */
    click(){
        this.element.click()
    }
    /**
     * unfocus the element
     */
    blur(){
        this.element.blur()
    }
    /**
     * focus the element
     */
    focus(){
        this.element.focus()
    }
    /**
     * 
     * @param {String} key 
     * @param {String} value 
     * @description store data in dataset of the element
     */
    define(key,value){
        this.element.dataset[key] = value
    }
    /**
     * @param {String} key
     * @description get data from dataset of element
     */
    ref(key){
        return this.element.dataset[key]
    }
    /**
     * 
     * @param {String} Selector to get an elements inside 
     */
    query(Selector){
        if(Sulf.Sulfy(this.element.querySelector(Selector)) == null){
            throw new Error("Element not found")
        }else{
            return Sulf.Sulfy(this.element.querySelector(Selector))
        }
    }
    /**
     * element class management
     */
    get class(){
        let classContext = {
            /**
             * 
             * @param {String} s toggle class on/off
             */
            toggle(s){
                this.element.classList.toggle(s)
            },
            /**
             * 
             * @param {String} s add class
             */
            add(s){
                this.element.classList.add(s)
            },
            /**
             * 
             * @param {String} s remove class
             */
            remove(s){
                this.element.classList.remove(s)
            },
            /**
             * get list of all classes
             */
            getList(){
                return this.element.classList
            }
        }
        for(let m in classContext){
            classContext[m] = classContext[m].bind(this)
        }
        return classContext
    }
    /**
     * 
     * @param {Boolean} b 
     * @description Returns a copy of node. If deep is true, the copy also includes the node's descendants.
     */
    clone(b){
        return this.element.cloneNode()
    }
    /**
     * remove the element
     */
    remove(){
        this.element.remove()
        this.element = null
        delete this
    }
    /**
     * return value of input or any element has value attribute
     */
    get val(){
        if(this.element.value){
            return this.element.value
        }else{
            return ""
        }
    }
    /**
     * get the first child in the element as noot
     */
    get first(){
        return Sulf.Sulfy(this.element.firstElementChild)
    }
    /**
     * get all children elements as Array
     */
    get children(){
        return [...this.element.children].map(Sulf.Sulfy)
    }
    /**
     * get children count in the element
     */
    get childCount(){
        return this.element.childrenCount
    }
    /**
     * get id of the element
     */
    get id(){
        return this.element.id
    }
    /**
     * get outerHTML of the element
     */
    get outer(){
        return this.element.outerHTML
    }
    /**
     * get parentElement of the element
     */
    get parent(){
        return Sulf.Sulfy(this.element.parentElement)
    }
    /**
     * get the BoundingClientRect of the element
     */
    get getRect(){
        return this.element.getBoundingClientRect()
    }

    /**
     * return boolean enabled or not
     */
    get enabled(){
        return !this.element.disabled
    }
    /**
     * 
     * @param {HTMLElement} Element turn any element into Sulfur Element
     */
    static Sulfy(Element){
        if(Element == null){
            throw new Error("null case")
        }
        let elm = new Sulf(Element.tagName)
        elm.element = Element
        return elm
    }

}