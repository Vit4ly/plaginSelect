const getTemplate = () => {
    return `
     <div class="select__input" data-type="input">
            <span>Text</span>
            <i class="fa fa-chevron-down"></i>
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
                <li class="select__item">123</li>
                <li class="select__item">123</li>
                <li class="select__item">123</li>
                <li class="select__item">123</li>
                <li class="select__item">123</li>
                <li class="select__item">123</li>
                <li class="select__item">123</li>
            </ul>
        </div>
    `
}


export class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)

        this.#render()
        this.#setup()
    }

    #render() {
        this.$el.classList.add('select')
        this.$el.innerHTML = getTemplate()
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener('click',  this.clickHandler)
    }

    clickHandler(event) {
        const {type} = event.target.dataset

        if (type === 'input') {
            this.toggle()
        }
    }

    get isOpen() {
        return this.$el.classList.contains('open')
    }

    toggle() {
        this.isOpen ? this.close() : this.open()
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('close')
    }

    destroy() {
        this.$el.removeEventListener('click', this.clickHandler)
    }
}