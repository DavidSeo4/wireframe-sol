const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 36px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #b81207;
      margin-left: -10px;
      margin-top: 332px;
    }

    ul {
      padding: 0;
    }
    
    ul li {
      list-style: none;
      display: inline;
    }
    
    a {
      margin: 0 15px;
      color: #fff;
      text-decoration: none;
      font-weight: 700;
    }
    
    a:hover {
      padding-bottom: 5px;
      
    }
    
    .social-row {
      font-size: 20px;
    }
    
    .social-row li a {
      margin: 0 15px;
    }
  </style>
  <footer>
    <ul>
    <li><a href="../index.html">Inicio</a></li>
    <li><a href="../index.html">Citas</a></li>
    <li><a href="../acercade.html">Empresas</a></li>
    <li><a href="../servicios.html">Persoas</a></li>
    <li><a href="../contacto.html">Usuario</a></li>
    </ul>
    <ul class="social-row">
      <li><a href="https://github.com/my-github-profile"><i class="fab fa-github"></i></a></li>
      <li><a href="https://twitter.com/my-twitter-profile"><i class="fab fa-twitter"></i></a></li>
      <li><a href="https://www.linkedin.com/in/my-linkedin-profile"><i class="fab fa-linkedin"></i></a></li>
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);