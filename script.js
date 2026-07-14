function run() {
    const code = document.getElementById("code").value;
    const output = document.getElementById("output");

    output.textContent = "⏳ Compiling...";

    fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            language: "c",
            version: "10.2.0",
            files: [
                {
                    content: code
                }
            ]
        })
    })
    .then(response => response.json())
    .then(result => {
        if (result.run && result.run.output) {
            output.textContent = result.run.output;
        } else {
            output.textContent = "No output";
        }
    })
    .catch(error => {
        output.textContent = "Error: " + error;
    });
}
