function run() {

  const htmlCode = document.getElementById("htmlCode").value;
  const cssCode  = document.getElementById("cssCode").value;
  const jsCode   = document.getElementById("jsCode").value;
  
  const output = document.getElementById("output");
  const outputDoc = output.contentDocument || output.contentWindow.document;
  
  outputDoc.open();
  outputDoc.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Live Preview</title>
      <style>${cssCode}</style>
    </head>
    <body>
      ${htmlCode}
      <script>
        ${jsCode}
      <\/script>
    </body>
    </html>
  `);
  outputDoc.close();
}
