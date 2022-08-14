  // cactusjs
  function debug(str) {
    console.log(str)
 }
  function changeElementTxt(id, str) {
    document.getElementById(id).innerText = str
  }
  function winopen(str) {
    window.open(str)
 }
  function changeElementHtml(id, str) {
    document.getElementById(id).innerHTML = str
  }
  function changeColor(id, str) {
 document.getElementById(id).style.color = str
  }
  function print(str) {
    document.write(str)
  }
  console.log(
    "%cCactus.js is running!",
    "color:#008b8b;"
    )
