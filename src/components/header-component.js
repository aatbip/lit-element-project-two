/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import './userprofile-component';
import './usermenu-component';

export class HeaderComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .users {
        width: 100%;
      }
      user-profile-component {
        width: 70%;
      }
      user-menu-component {
        width: 30%;
      }

      @media only screen and (max-width: 680px) {
        user-menu-component {
          display: none;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="users">
        <user-profile-component></user-profile-component>
        <user-menu-component></usermenu-component>
      </div>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
