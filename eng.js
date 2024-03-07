try {
  // Tab to edit
  
  
  const text = "Olá, mundo!";
        const typingElement = document.getElementById('import');
        let index = 0;

        function type() {
            if (index < text.length) {
                typingElement.innerText+= text.charAt(index);
                index++;
                setTimeout(type, 100); // Velocidade da digitação em milissegundos (100 = 0.1 segundo)
            }
        }

        type();
  
  
} catch (e) {
  throw e
  console.log(e.menssage)
}