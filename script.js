function runCode() {
    let html = document.getElementById("html").value;
    let css = document.getElementById("css").value;
    let js = document.getElementById("js").value;

    let output = document.getElementById("output");

    let code = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                ${css}
            </style>
        </head>
        <body>
            ${html}
            <script>
                ${js}
            <\/script>
        </body>
        </html>
    `;

    output.srcdoc = code;
}
