  // cactusjs
console.log(
  "%cCactus.js is running!",
  "color:#008b8b;"
  )
function debug(str) {
    console.log(str)
 }
  function changeElementTxt(id, str) {
    document.getElementById(id).te = str
  }
  function WinOpen(str) {
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
    const jsml = {
      create(element, txt, id) {
          const para = document.createElement(element);
      para.innerHTML = txt;
      document.getElementById(id).appendChild(para);
      },
      sc(elementb, attr, val, id) {
          const para = document.createElement(elementb);
          const att = document.createAttribute(attr);
          att.value = val;
           ;
          para.setAttributeNode(att);
          document.getElementById(id).appendChild(para);
      },
      cattr(elementb, txtb, attr, val, id) {
          const para = document.createElement(elementb);
          para.innerHTML = txtb;
          const att = document.createAttribute(attr);
          att.value = val;
           ;
          para.setAttributeNode(att);
          document.getElementById(id).appendChild(para);
      }
      
  };
