
/**
 * Average 
 **/
class AvgState {

  // properties
  values

  // constructor
  constructor() {
    this.values = [
      0,
      0,
      0,
    ]
    this.render()
  }

  // behaviors
  addNewEntry() {

    this.values.push(0)
    this.render()
    this.calculateAvg()
    this.displayResult()
  }

  render() {

    let wrapper = document.getElementById("avg-inputs")

    // remove all children first
    wrapper.innerHTML = ""

    for (let i = 0; i < this.values.length; i++) {
      let newEntry = this.getAvgInput(i)
      wrapper.appendChild(newEntry)
    }
  }

  getAvgInput(id) {

    /**
     * <div>
     *   <label for="num-id">Number {id}</label>
     *   <input id="num-id" name="num-id" class="avg-num" type="number">
     *   <button onclick="avgState.removeEntry(id)">&#10006;</button>
     * </div>
     **/

    // wrapper 
    let wrapper = document.createElement("div")

    // label
    let label = document.createElement("label")
    label.setAttribute("for", "num-" + id)
    label.innerHTML = "Number " + (id + 1)

    // space
    let space = document.createTextNode("\u00A0")

    // input
    let input = document.createElement("input")
    input.setAttribute("type", "number")
    input.setAttribute("id", id)
    input.setAttribute("name", "num-" + id)
    input.setAttribute("class", "avg-num")
    input.value = this.values[id]
    input.addEventListener("input", this.changeValueHandler.bind(this), false)

    // add autofocus for only first element
    if (id == 0) {
      input.autofocus = true
    }

    // remove button
    let removeBtn = document.createElement("button")
    removeBtn.setAttribute("data-index", id)
    removeBtn.addEventListener("click", this.removeHandler.bind(this), false)
    removeBtn.innerHTML = "&#10006;"

    // dom hiarachy
    wrapper.append(label, space, input, removeBtn)

    return wrapper
  }

  changeValueHandler(event) {
    let id = event.target.getAttribute("id")
    let newValue = event.target.value
    this.updateValue(id, newValue)
  }

  updateValue(id, value) {
    console.log("update value function called")
    this.values[id] = value
    this.calculateAvg()
    this.displayResult()
  }

  removeHandler(event) {
    let id = event.target.getAttribute("data-index")
    console.log(id)
    this.remove(id)
    this.calculateAvg()
    this.displayResult()
  }

  remove(id) {
    console.log("remove method is called")
    this.values.splice(id, 1)
    console.log(this.values)
    this.render()
  }

  displayResult() {
    let target = document.getElementById("avg-result-value")
    let result = this.calculateAvg()
    if (isNaN(result)) {
      target.innerHTML = "please enter numeric value."
    } else {
      target.innerHTML = result
    }
  }

  calculateAvg() {
    console.log("calculate avg func is called")
    let avg = 0;
    for (let i = 0; i < this.values.length; i++) {
      avg += parseInt(this.values[i], 10)
    }
    avg = avg / this.values.length
    console.log(avg)
    return avg
  }

  cancel() {
    this.values = [
      0,
      0,
      0,
    ]
    this.render()
  }
}

/**
 * Fractional 
 **/

class Fractional {

  // properties
  curNum

  // constructor
  constructor() {
    this.curNum = 0;

    // initia
    let fnInput = document.getElementById("fn-input")
    fnInput.addEventListener("input", this.inputEventHandler.bind(this), false)
  }

  // event handler
  inputEventHandler(event) {
    let value = event.target.value
    this.curNum = value
    console.log(this.curNum)
    this.displayResult()

  }

  // behaviors
  displayResult() {
    // access to dom
    let target = document.getElementById("fn-result-value")

    // gigo
    if (this.curNum < 0 || isNaN(this.curNum) || !this.curNum) {
      target.innerHTML = "please enter positive number."
      return
    }

    // dec & initialize variables
    let result = 1
    let resultSentence = this.curNum + "! = "

    // process
    for (let i = this.curNum; i > 0; i--) {
      result = result * i
      resultSentence += i
      if (i !== 1) {
        resultSentence += " * "
      }
    }

    resultSentence += "= " + result

    // output
    target.innerHTML = resultSentence
  }
}

/**
 * Guess Game
 **/

class GuessGame {

  // properties
  answer

  curNum

  constructor() {
    // assign random number as answer
    this.answer = Math.floor(Math.random() * Math.floor(100));
    console.log("answer: " + this.answer)
    this.curNum = null

    // initialize
    let fnInput = document.getElementById("gn-input")
    fnInput.addEventListener("input", this.inputEventHandler.bind(this), false)
  }

  reset() {
    this.answer = Math.floor(Math.random() * Math.floor(100));
    console.log("answer: " + this.answer)
    this.curNum = null

    // clear input also
    let fnInput = document.getElementById("gn-input")
    fnInput.value = "" 
  }

  // event handler
  inputEventHandler(event) {
    let value = event.target.value
    this.curNum = value
    this.displayResult()
  }

  displayResult() {

    // access to dom
    let target = document.getElementById("gn-result-value")

    // gigo
    if (this.curNum < 0 || isNaN(this.curNum) || !this.curNum) {
      target.innerHTML = "please enter a number (0 <= N <= 100)"
      return
    }

    // output
    if (this.curNum == this.answer) {
      target.innerHTML = "you got it!!"
    } else if (this.curNum < this.answer) {
      target.innerHTML = "try bigger number"
    } else {
      target.innerHTML = "try smaller number"
    }
  }
}

// initial load
// instantiate all objects from classes
let avgState = new AvgState()
let fractional = new Fractional()
let guessGame = new GuessGame()
