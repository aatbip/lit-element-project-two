/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

export class ButtonComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .main-button {
        width: 70px;
        height: 60px;
        padding: 2px 2px;
        background-color: #00bb4f;
        border: none;
        color: white;
        border-radius: 5px;
        font-size: 15px;
        text-align: center;
      }
      .number {
        margin-top: 5px;
        font-size: 25px;
        font-weight: bold;
      }
      .answers {
        font-size: 15px;
      }
    `;
  }

  static get properties() {
    return {
      totalAnswer: { type: String },
    };
  }

  constructor() {
    super();
    this.totalAnswer = '8';
  }

  render() {
    return html`
      <div class="main-button">
        <p class="number">${this.totalAnswer}</p>
        <p class="answers">answers</p>
      </div>
    `;
  }
}

customElements.define('button-component', ButtonComponent);
