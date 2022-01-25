/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

export class BodyComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .body-content {
        margin-top: 5em;
        width: 85%;
      }
      h1 {
        font-size: 25px;
      }

      p {
        margin-top: 20px;
        color: #9f9f9f;
      }

      hr {
        margin-top: 10px;
      }
    `;
  }

  render() {
    return html`
      <div class="body-content">
        <h1>How do we add new containers to project?</h1>
        <p>
          Sunt tempor laborum nulla minim irure incididunt reprehenderit velit
          nulla elit eu pariatur fugiat. Eu elit occaecat qui do. Qui non in id
          ex laborum laborum sunt id do nulla in. Non enim tempor commodo ad
          aute nulla laborum.
        </p>
        <hr />
      </div>
    `;
  }
}

customElements.define('body-component', BodyComponent);
