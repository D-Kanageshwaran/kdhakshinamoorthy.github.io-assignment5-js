// Display a test alert to ensure JS is connected
// alert("Hello, world!");

// Increase font size of textarea
function biggerText() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

// Change text style to Fancy or Boring based on selected radio button
function changeTextStyle() {
    let textArea = document.getElementById("textArea");
    
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Convert text to uppercase and add "-Moo" to last word of each sentence
function mooifyText() {
    let textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].trim().split(" ");
        if (words.length > 0 && words[0] !== "") {
            words[words.length - 1] += "-Moo";
        }
        sentences[i] = words.join(" ");
    }

    textArea.value = sentences.join(". ");
}

// Attach event listeners when page loads
window.onload = function() {
    document.getElementById("biggerButton").onclick = biggerText;
    document.getElementById("fancyShmancy").onchange = changeTextStyle;
    document.getElementById("boringBetty").onchange = changeTextStyle;
    document.getElementById("mooButton").onclick = mooifyText;
};
