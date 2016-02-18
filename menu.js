/*
 * This library is Copyright © 2014-2016 Alex Smith-Fanning.
 *
 * Released under the GNU General Public License 3.0.
 *
 * Designed to allow the easy creation of a hover dropdown menu for HTML pages.
 */

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropdown-button')) {

    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
