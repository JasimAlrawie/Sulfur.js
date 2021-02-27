class Sulf{
    /**
     * 
     * @param {String} type if you left it empty the type will be div
     */
    constructor(type="div"){
        this.type = type
        this.element = document.createElement(type)
        /**@private*/
        this._props = {}
        /**@private*/
        this._raw = ""
        /**@private */
        this._anim = []  
        //@deprecated
        // /**@private */
        // this._animdur = 1000
        // /**@private */
        // this._animiter = Infinity  
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
     * @param {String} key
     * @param {String} value 
     * @description define a value or change
     */
    set(key,value){
        this._props[key] = value;
        this._update()
    }
    /**
     * 
     * @param {String} key proterty name
     * @description return value of the property
     */
    prop(key){
        return this._props[key]
    }
    /**@private*/
    _update(){
        let res = this._raw.replace(Sulf._pexp,this._subst.bind(this))
        this.element.innerHTML = res
        return res
    }
    /**@private*/
    _subst(x,t){
        return this._props[t]
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
        this._raw = data
        data = this._update()
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
     * 
     * @param {Object} anim add one animation step
     */
    step(anim){
        this._anim.push(anim)
    }
    /**
     * 
     * @param {Number} duration duration of the animation
     * @param {Number} iteration times to iterate
     * @description to start the animation 
     * @default duration=1000, iteration=Infitity
     */
    animate(duration=1000,iteration=Infinity){
        this.element.animate(this._anim,{duration:duration,iterations:iteration})
    }
    /**
     * 
     * @param {String} selector 
     * @description get clostest element
     */
    closest(selector){
        return Sulf.Sulfy(this.element.closest(selector))
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
     * @param {Boolean} bool make Element draggable or not
     */
    draggble(bool){
        this.element.draggable = bool
    }
    /**
     * 
     * @param {Boolean} bool can user heighlight this content or not
     */
    userSelect(bool){
        this.element.userSelect = bool
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
    store(key,value){
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
    get animState(){
        let state = this.element.getAnimations()
        if(state[0] == null){
            return "done"
        }
        return state
    }
    /**
     * element class management
     */
    get isDraggable(){
        return this.element.draggable
    }
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
     * @param {Boolean} bool 
     * @description Returns a copy of node. If deep is true, the copy also includes the node's descendants.
     */
    clone(bool){
        return this.element.cloneNode(bool)
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
    /**@description some useful Math functions */
    static get utils(){
        return {
            math:{
                /**
                 * 
                 * @param {Number} x1 
                 * @param {Number} y1 
                 * @param {Number} x2 
                 * @param {Number} y2 
                 * @description get distance between two points
                 */
                dist(x1,y1,x2,y2){
                    let a = x2 - x1
                    let b = y2 - y1
                    return Math.sqrt(a**2+b**2)
                },
                /**
                 * 
                 * @param {Number} n 
                 * @param {Number} start1 
                 * @param {Number} end1 
                 * @param {Number} start2 
                 * @param {Number} end2 
                 * @description mapping number to diffrent scale
                 */
                map(n,start1,end1,start2,end2){
                    return (n - start1) / (end1 - start1) * (end2 - start2) + start2;
                },
                random(min,max){
                    if(!max){
                        [max,min] = [min,0];
                    }
                    let rand = Math.random()
                    return rand * (max - min) + min;
                }
            },
            /**@description shuffle string */
            str:{
                shuffle(str){
                    let arr = str.split("")
                    for(let i=arr.length;i>0;i--){
                        let rnd = Math.floor(Math.random()*i);
                        [arr[i],arr[rnd]] = [arr[rnd],[arr[i]]]
                    }
                    return arr.join("")
                },
                toArray(str){
                    return str.spint("")
                }
            },
            /**@description shuffle array items */
            array:{
                shuffle(arr){
                    for(let i=s.length;i>0;i--){
                        let rnd = Math.floor(Math.random()*i);
                        [arr[i],arr[rnd]] = [arr[rnd],[arr[i]]]
                    }
                    return arr.join("")
                },
                toStr(arr){
                    return arr.join("")
                }
            }
        }
    }
    /**
     * return boolean enabled or not
     */
    get enabled(){
        return !this.element.disabled
    }
    static get _pexp(){
        return /\{\{(\w+)\}\}/g
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
        elem._raw = elm.innerHTML
        elm.element = Element
        return elm
    }
    /**
     * 
     * @param {String} Selector query selector
     */
    static query(Selector){
        let elem = document.querySelector(Selector)
        let s = new Sulf
        s.element = elem
        s.type = elem.tagName
        s._raw = elem.innerHTML
        return s
    }
}