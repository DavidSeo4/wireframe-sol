const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
        <style>
          nav {
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:  #b81207;
            margin-top: -10px;
            margin-left: -10px;
            
          }
  
          ul {
            display: flex;
            padding: 0;
          }

          li {
            padding-left: 100px;
            list-style: none;
            font-size: 20px;
            
          }
          
          a {
            font-weight: 700;
            margin: 0 0px;
            color: #fff;
            text-decoration: none;
            background-color: rgb(207, 44, 44);
            padding: 5px;
            border-radius: 10px 10px 10px 10px;
          }
          
          a:hover {
            padding-bottom: 0px;
            box-shadow: inset 0 -2px 0 0 #fff;
          }
          div{
            margin-left: 60px;
          }
          .has-search .form-control {
            padding-left: 0.075rem;
        }
        
        .has-search .form-control-feedback {
            position: absolute;
            z-index: 2;
            display: block;
            width: 2.375rem;
            height: 2.375rem;
            line-height: 2.375rem;
            text-align: center;
            pointer-events: none;
            color: #aaa;
        }
        </style>
        <header>
          <nav>
            <ul>
            <li><a href="../index.html">Inicio</a></li>
            <li><a href="../index.html">Citas +</a></li>
            <li><a href="../acercade.html">Empresas +</a></li>
            <li><a href="../servicios.html">Persoas +</a></li>
            <li><a href="../contacto.html">Usuarios +</a></li>
            <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Buscador">
  </div>
            </ul>
          </nav>
        </header>
      `;
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}
customElements.define('header-component', Header);
