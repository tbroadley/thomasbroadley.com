var START_STRING = '<meta name="viewport" content="width=device-width, initial-scale=1.0,"/><head><link rel="stylesheet" href="mainq.css" media="screen" /> <link rel="stylesheet" href="noteq.css" media="screen and (max-device-width: 800px)" />\n</head>';

var input = document.getElementById("input");
var output = document.getElementById("output");

function transform(inputValue) {
  return START_STRING + inputValue.replace(/\r?\n/g, "<br>\n")
                                  .replace(/  /g, "&nbsp;&nbsp;")
                                  .replace(/&nbsp; /g, "&nbsp;&nbsp;");
}

function listener(e) {
  output.value = transform(e.target.value);
}

listener({ target: { value: "" } });

input.addEventListener("input", listener);

new ClipboardJS('#copy');
