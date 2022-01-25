/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

import { userImageLinks } from '../constants/constants.js';

export class UserMenuComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .user-menu {
        width: 30%;
        float: right;
      }

      li {
        list-style-type: none;
        display: inline;
        margin-right: -10px;
        border: 2px solid white;
        border-radius: 50%;
      }

      li:last-child {
        margin-left: 30px;
      }

      .users {
        width: 23px;
        height: 23px;
        border-radius: 50%;
      }

      .menu-icon-one {
        width: 25px;
        height: 25px;
        border: 2px solid white;
        background-color: #f3f6fc;
        border-radius: 50%;
        padding: 2px;
        margin-top: 3px;
      }

      #menu-icon-two {
        transform: rotate(90deg);
        background-color: white;
      }
    `;
  }

  static get properties() {
    return {
      users: { type: String },
    };
  }

  constructor() {
    super();
    this.users = [
      `${userImageLinks}10.jpg`,
      `${userImageLinks}11.jpg`,
      `${userImageLinks}12.jpg`,
      `${userImageLinks}12.jpg`,
    ];
  }

  render() {
    return html` <div class="user-menu">
        <ul> 
        ${this.users.map(
          (i) =>
            html`<li>
              <img class="users" src="${i}" alt="user profile image" />
            </li>`
        )}

        <li> 
            <img
        class="menu-icon-one"
        src="../../././images/menu-icon-one.png"
        alt="user profile image"
        />
        </li> 

        <li> 
            <img
        class="menu-icon-one"
        id = "menu-icon-two"
        src="../../././images/menu-icon-one.png"
        alt="user profile image"
        />
        </li> 
            
    </div> `;
  }
}

customElements.define('user-menu-component', UserMenuComponent);
