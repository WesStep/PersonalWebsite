export default class GoToTopButton extends HTMLElement {
    #btn;
    #template = `
        <style>
            #scrollToTopBtn {
              display: none;
              position: fixed;
              bottom: 1rem;
              right: 1.5rem;
              z-index: 99;
              border: none;
              outline: none;
              background-color: navy;
              color: white;
              cursor: pointer;
              padding: 0.75rem;
              border-radius: 0.25rem;
              font-size: 1rem;
              transition: 0.2s;
            }
            
            #scrollToTopBtn:hover {
              background-color: #555;
              transition: 0.2s;
            }
            
            #top {
                position: absolute;
                top: 0;
                left: 0;
            }
        </style>
        <button id="scrollToTopBtn" title="Go to top">Top</button>
        <div id='top'></div>
    `;

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = this.#template;
        window.addEventListener('scroll', this.#onScroll.bind(this));
        this.#btn = this.shadowRoot.getElementById('scrollToTopBtn');
        this.#btn.addEventListener('click', this.#topFunction.bind(this));
    }

    #onScroll() {
        this.#btn.style.display = (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
            ? 'block' : 'none';
    }

    #topFunction() {
        this.shadowRoot.getElementById('top').scrollIntoView({
            behavior: 'smooth'
        });
    }
}