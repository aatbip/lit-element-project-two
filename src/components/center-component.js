/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './header-component';
import './body-component';
import './footer-component';

export class CenterComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      header-component {
        width: 100%;
      }
      body-component {
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <header-component></header-component>
      <body-component></body-component>
      <footer-component></footer-component>
    `;
  }
}

customElements.define('center-component', CenterComponent);
