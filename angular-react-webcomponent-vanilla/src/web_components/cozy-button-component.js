import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from 'cozy-ui/transpiled/react/Button'

class CozyButton extends HTMLElement {
  /********/
  /* Init */
  /********/

  // container pour le shadow DOM et le style
  mountPoint = undefined;

  // sous container pour le composant React
  reactContainer = undefined;

  connectedCallback() {
    console.log('CozyButton connectedCallback')

    this.mountPoint = document.createElement('span');
    this.reactContainer = document.createElement('span');

    // injection du CSS dans le composant sinon il est isolé par le shadow DOM
    this.mountPoint.innerHTML = `
      <style>
      @import "cozy-ui.css";
      </style>`;

    this.mountPoint.appendChild(this.reactContainer);

    this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint); // ajout du custom element au shadow DOM

    this.renderReact()
  }

  /************/
  /* Bindings */
  /************/

  // on doit déclarer toutes les propriétés observées pour répondre aux bindings angular
  static get observedAttributes() {
    return ['disabled'];
  }

  // on doit rerendre le composant à chaque changement sur une des propriétés
  attributeChangedCallback(name, oldValue, newValue) {
    console.log('CozyButton attributeChangedCallback', name, oldValue, newValue)

    this.renderReact()
  }

  /******************/
  /* Props Bindings */
  /******************/

  getProps() {
    // récupération des attributs de l'élément
    const label = this.getAttribute('label');
    const disabled = this.getAttribute('disabled') === "true"

    // déclaration des events de l'élément
    const onClick = () => {
      console.log('click from webcomponent')
      this.dispatchEvent(new CustomEvent('cozy-click'))
    }

    return {
      label,
      disabled,
      onClick
    }
  }

  /**********/
  /* Render */
  /**********/

  renderReact() {
    console.log('CozyButton renderReact')

    // rendu réact (voir si on peut le faire à la sauce JSX)
    ReactDOM.render(
      React.createElement(Button, this.getProps()),
      this.reactContainer
    )
  }
}

// déclaration du web component au niveau du document HTML
customElements.define('cozy-button', CozyButton);
