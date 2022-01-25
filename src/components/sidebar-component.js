/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './button-component';

export class SideBarComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .side-bar {
        width: 100%;
      }
      .flag-icon {
        width: 30px;
        height: 30px;
        margin-left: 20px;
        margin-top: 30px;
      }

      li {
        list-style-type: none;
      }

      @media only screen and (max-width: 798px) {
        li {
          display: inline-block;
        }
        ul {
          margin-bottom :
            30px; 
          }
        }
      }
    `;
  }

  render() {
    return html`
      <div class="side-bar">
        <ul>
          <li>
            <button-component></button-component>
          </li>
          <li>
            <img class="flag-icon" src="../././images/flag-icon.png" />
          </li>
        </ul>
      </div>
    `;
  }
}

customElements.define('sidebar-component', SideBarComponent);
