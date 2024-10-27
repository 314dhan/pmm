function copyText() {
        const codeElement = document.getElementById("xmlCode");

        const range = document.createRange();
        range.selectNodeContents(codeElement);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);

        try {
            document.execCommand("copy");
            alert("Kode berhasil disalin!");
        } catch (error) {
            alert("Gagal menyalin teks.");
        }

        selection.removeAllRanges();
    }