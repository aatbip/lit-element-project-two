/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

export class UserProfileComponent extends LitElement {
  static get styles() {
    return css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .user-profile {
        width: 50px;
        float: left;
      }
      .user-image {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }

      .user-info {
        width: 60%;
        float: left;
      }

      p {
        font-weight: bold;
      }

      ul {
        margin-top: 8px;
      }

      li {
        list-style-type: none;
        display: inline;
        color: #a8a8a8;
        margin-right: 5px;
        font-size: 12px;
      }

      .arrow-icon {
        width: 10px;
        height: 10px;
      }

      #category {
        color: #0096e3;
        font-weight: bold;
      }

      .progress-button {
        background-color: #e89d00;
        border: none;
        padding: 5px;
        border-radius: 25px;
        margin-left: 5px;
        font-size: 10px;
      }
    `;
  }

  static get properties() {
    return {
      userName: { type: String },
      data: { type: String },
      time: { type: String },
      category: { type: String },
      status: { type: String },
    };
  }

  constructor() {
    super();
    this.userName = 'Mikolaj Gonzalez';
    this.date = 'November 9, 2020';
    this.time = '6:34pm';
    this.category = 'ACS-1';
    this.status = 'In Progress';
  }

  render() {
    return html`
      <div class="user-profile">
        <img
          class="user-image"
          src="https://randomuser.me/api/portraits/men/1.jpg"
          alt="user profile image"
        />
      </div>

      <div class="user-info">
        <p>${this.userName}</p>

        <ul>
          <li>${this.date} at ${this.time}</li>
          <li>|</li>
          <li id="category">
            ${this.category} <img class="arrow-icon"
            src="../../././images/arrow-link.png" alt="arrow icon"" />
          </li>
          <li><button class="progress-button">${this.status}</button></li>
        </ul>
      </div>
    `;
  }
}

customElements.define('user-profile-component', UserProfileComponent);
