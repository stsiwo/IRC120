/**
 * menu nav toggle feature
 **/
let isMenuNavOpen = false

// toggle btn
let MenuNavToggleBtn = document.getElementById("menu-nav-toggle-icon")

function toggleMenuNavOpenClickEventHandler(event) {
  console.log("toggle menu nav btn click event handler is called")

  /**
   * need this one to prevent isMenuNavOpen' value to be change.
   *   - detectOutsideClickEventHandler use that variable to check the outside click
   **/
  event.stopPropagation()

  let targetMenuNav = document.getElementById("menu-nav-ul")

  if (!isMenuNavOpen) {
    // currently clsoe so open it
    targetMenuNav.style.width = "200px"
    targetMenuNav.style.padding = "0 20px" // need this

  } else {
    // currently open so close it
    targetMenuNav.style.width = "0"
    targetMenuNav.style.padding = "0" // need this
    
  }
  isMenuNavOpen = !isMenuNavOpen
}

MenuNavToggleBtn.addEventListener("click", toggleMenuNavOpenClickEventHandler)
