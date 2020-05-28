/**
 * left nav toggle feature
 **/
let isLeftNavOpen = true

let leftNavToggleBtn = document.getElementById("left-nav-toggle-btn")

function toggleLeftNavOpenClickEventHandler(event) {

  let curViewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  if (curViewportWidth > 768) {
    // if screen size width is the one more than tablet, do nothing since there is no toggle feature
    return false;
  }

  let targetLeftNav = document.getElementById("aside")

  if (isLeftNavOpen) {
    // currently open so close it
    targetLeftNav.style.width = "200px"
    targetLeftNav.style.padding = "0 20px" // need this

  } else {
    // currently close so open it
    targetLeftNav.style.width = "0"
    targetLeftNav.style.padding = "0" // need this
  }
  isLeftNavOpen = !isLeftNavOpen
}

leftNavToggleBtn.addEventListener("click", toggleLeftNavOpenClickEventHandler)

// also close after a link text is clicked
let linkList = document.getElementsByClassName("aside-link")
for (let i = 0; i < linkList.length; i ++) {
  linkList[i].addEventListener("click", toggleLeftNavOpenClickEventHandler)
}

