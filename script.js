function myne(text) {
  let a = text;
  let k = Math.floor(Math.random() * (64 - 32 + 1)) + 32;
  let ciph = "";

  for (let i = 0; i < a.length; i++) {
    let c = a.charCodeAt(i);
    c += k;
    c += 31;
    if (c > 157) {
      c -= 125;
    }
    ciph += String.fromCharCode(c);
  }

  ciph += String.fromCharCode(k);
  return ciph;
}

function myne1(text) {
  let a = text;
  let k = a.charCodeAt(a.length - 1);
  let ciph = "";

  for (let i = 0; i < a.length - 1; i++) {
    let c = a.charCodeAt(i);
    c -= k;
    c -= 31;
    if (c < 0) {
      c += 125;
    }
    ciph += String.fromCharCode(c);
  }

  return ciph;
}
// Encryption function
function encrypt() {
    const text = document.getElementById("textbox").value;
   
    const encryptedText = myne(text);
    document.getElementById("result").value = encryptedText;
}
function copy(){
 var textbox = document.getElementById("result");
            textbox.select(); // Select the text inside the textbox
            document.execCommand("copy")

}
document.getElementById("clearButton").addEventListener("click", function () {
            var textbox1 = document.getElementById("textbox");
	    
            textbox1.value = "";
var textbox2 = document.getElementById("result");
	    textbox2.value = "";
 // Clear the text by setting the value to an empty string
        });


 document.getElementById("pasteButton").addEventListener("click", function () {
            // Check if the Clipboard API is available in the browser
            if (navigator.clipboard) {
                navigator.clipboard.readText()
                    .then(function (text) {
                        var textboxa = document.getElementById("textbox");
                        textboxa.value = text;
                    })
                    .catch(function (error) {
                        console.error("Failed to read clipboard data: ", error);
                    });
            } else {
                console.error("Clipboard API is not supported in this browser.");
            }
        });


function paste(){
if (navigator.clipboard) {
                navigator.clipboard.readText()
                    .then(function (text) {
                        var textbox = document.getElementById("textbox");
                        textbox.value = text;
                    })
                    .catch(function (error) {
                        console.error("Failed to read clipboard data: ", error);
                    });
            } else {
                console.error("Clipboard API is not supported in this browser.");
            }
}
// Decryption function
function decrypt() {
    const text = document.getElementById("textbox").value;
   
    const decryptedText = myne1(text);
    document.getElementById("result").value = decryptedText;
}
