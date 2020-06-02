/**
 * left nav toggle feature
 **/
let isLeftNavOpen = false

// toggle btn
let leftNavToggleBtn = document.getElementById("left-nav-toggle-btn")

// close icon
let leftNavCloseIcon = document.getElementById("left-nav-close-icon")

function toggleLeftNavOpenClickEventHandler(event) {
  console.log("toggle left nav btn click event handler is called")

  /**
   * need this one to prevent isLeftNavOpen' value to be change.
   *   - detectOutsideClickEventHandler use that variable to check the outside click
   **/
  event.stopPropagation()

  let curViewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  if (curViewportWidth > 768) {
    // if screen size width is the one more than tablet, do nothing since there is no toggle feature
    return false;
  }

  let targetLeftNav = document.getElementById("aside")

  if (!isLeftNavOpen) {
    // currently clsoe so open it
    targetLeftNav.style.width = "200px"
    targetLeftNav.style.padding = "0 20px" // need this

  } else {
    // currently open so close it
    targetLeftNav.style.width = "0"
    targetLeftNav.style.padding = "0" // need this
    
  }
  isLeftNavOpen = !isLeftNavOpen
}

leftNavToggleBtn.addEventListener("click", toggleLeftNavOpenClickEventHandler)
leftNavCloseIcon.addEventListener("click", toggleLeftNavOpenClickEventHandler)

let linkList = document.getElementsByClassName("aside-link")
for (let i = 0; i < linkList.length; i ++) {
  linkList[i].addEventListener("click", toggleLeftNavOpenClickEventHandler)
}

/**
 * scroll smooth feature (esp for mobile browser)
 *  - polyfil does not work. I don't know why
 **/
function scrollSmoothToDes(event) {
  let destId = event.target.href.substring(event.target.href.indexOf("#")+1) 
  console.log(destId)
  let targetEl = document.getElementById(destId)
  targetEl.scrollIntoView({
    behavior: "smooth", 
  })
}

for (let i = 0; i < linkList.length; i ++) {
  linkList[i].addEventListener("click", scrollSmoothToDes)
}

/**
 * outside click detection features for left nav close
 **/
function detectOutsideClickEventHandler(event) {

  let targetLeftNav = document.getElementById("aside")

  if (!targetLeftNav.contains(event.target) && isLeftNavOpen) {
    // outside click detected
    console.log("outside of left nav is clicked")
    
    // programatically call click event of close icon
    document.getElementById("left-nav-close-icon").dispatchEvent(new Event("click"));
    return 
  }
}

document.addEventListener("click", detectOutsideClickEventHandler)
document.addEventListener("touchstart", detectOutsideClickEventHandler)

