
/**
 * toggle theme icon feature 
 **/
let themeToggleBtn = document.getElementById("theme-toggle-btn")

function themeToggleEventHandler(e) {
  let isOpen = themeToggleBtn.getAttribute("data-open")
  let themeBtns = document.getElementsByClassName("theme-item-btn")
  let eachHeight = 70

  console.log(e.target)
  console.log(themeBtns)

  if (isOpen == "0") {
    // currently close so open
    console.log("currently close so open")
    for (let i = 0; i < themeBtns.length; i++) {
      themeBtns[i].style.bottom = (eachHeight * (i + 1)) + "px"
    }
    themeToggleBtn.setAttribute("data-open", "1")
  } else if (isOpen == "1"){
    // currently open so close
    console.log("currently open so close")
    for (let i = 0; i < themeBtns.length; i++) {
      themeBtns[i].style.bottom = "5px";  // must match with css 'style.css' at 58 
    }
    themeToggleBtn.setAttribute("data-open", "0")
  }
}

themeToggleBtn.addEventListener("click", themeToggleEventHandler)

/**
 * theme change click feature
 **/
let themeHrefList = [
  "../css/theme1.css",
  "../css/theme2.css",
  "../css/theme3.css",
]

let themeItemBtns = document.getElementsByName("theme-item-btn")

function themeItemBtnClickEventHandler(e) {

  let themeId = parseInt(e.target.getAttribute("data-theme"))

  console.log(e.target.getAttribute("data-theme"))
  console.log(themeHrefList[themeId])

  document.getElementById("theme-link").href = themeHrefList[themeId]
  
}

for (let i = 0; i < themeItemBtns.length; i ++ ) {
  themeItemBtns[i].addEventListener("click", themeItemBtnClickEventHandler)
}

/**
 * fullpage.js initialization
 **/
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [
        ],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});
