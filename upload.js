document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('xmlFile');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const xmlString = e.target.result;
            sessionStorage.setItem('xmlData', xmlString);
            window.location.href = 'character-sheets.html';
        };

        reader.readAsText(file);
    } else {
        alert('Por favor, selecione um arquivo XML.');
    }
});
