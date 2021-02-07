"use strict";

const checkboxes = document.querySelectorAll('.js-inbox input[type="checkbox"]');
let lastChecked;

function handleCheck(ev) {
  let inBetween = false;
  if (ev.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {

      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Starting to check them in between!');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
