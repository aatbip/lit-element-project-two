/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';

export class FooterComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      ul {
        margin-top: 10px;
      }

      li {
        list-style-type: none;
        display: inline;
      }

      button {
        border: 2px solid #ededed;
        background-color: #f5f5f5;
        padding: 0px 10px 0px 10px;
        height: 25px;
        border-radius: 25px;
        color: blue;
      }
    `;
  }

  static get properties() {
    return {
      buttonContent: { type: String },
    };
  }

  constructor() {
    super();
    this.buttonContent = ['ACS', 'Assays'];
    this.buttonTextStyle = { color: 'black', marginLeft: '5px' };
  }

  render() {
    return html`
      <ul>
        ${this.buttonContent.map(
          (i) =>
            html`<li>
              <button>
                #<span style=${styleMap(this.buttonTextStyle)}> ${i} </span>
              </button>
            </li>`
        )}
      </ul>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
