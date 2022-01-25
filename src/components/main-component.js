/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './sidebar-component';
import './center-component';

export class MainComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .main-component {
        width: 100%;
      }
      sidebar-component {
        min-width: 10%;
        float: left;
      }
      center-component {
        width: 90%;
        float: left;
      }
      .wrapper {
        width: 90%;
        margin: 0 auto;
      }
    `;
  }

  render() {
    return html`
      <div class="main-component">
        <div class="wrapper">
          <sidebar-component></sidebar-component>
          <center-component></center-component>
        </div>
      </div>
    `;
  }
}

customElements.define('main-component', MainComponent);
