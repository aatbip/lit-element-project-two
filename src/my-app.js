/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './components/main-component';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyApp extends LitElement {
  /**
   * Gets style.
   *
   * @returns {Array}
   */
  static get styles() {
    return [
      css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        main {
          margin-top: 50px;
          margin-left: 20px;
          height: 100%;
        }
      `,
    ];
  }
  render() {
    return html`<main><main-component></main-component></main>`;
  }
}

customElements.define('my-app', MyApp);
