 
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        let nome = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let mensagem = document.getElementById('message').value.trim();
        let erro = false;

       
        if (nome === "") {
            alert("Por favor, insira seu nome.");
            erro = true;
        }
        if (email === "") {
            alert("Por favor, insira seu e-mail.");
            erro = true;
        } else if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert("Por favor, insira um e-mail válido.");
            erro = true;
        }
        if (mensagem === "") {
            alert("Por favor, insira sua mensagem.");
            erro = true;
        }

        if (!erro) {
            
            exibirMensagemSucesso();
            document.querySelector('form').reset();
        }
    });

    
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();

            let targetId = this.getAttribute('href').substring(1);
            let targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });

    
    function exibirMensagemSucesso() {
        let sucessoDiv = document.createElement('div');
        sucessoDiv.textContent = "Mensagem enviada com sucesso!";
        sucessoDiv.style.backgroundColor = "#4CAF50";
        sucessoDiv.style.color = "#fff";
        sucessoDiv.style.padding = "10px";
        sucessoDiv.style.marginTop = "20px";
        sucessoDiv.style.textAlign = "center";
        sucessoDiv.style.borderRadius = "5px";

        document.querySelector('.contact').appendChild(sucessoDiv);

        setTimeout(() => {
            sucessoDiv.remove();
        }, 5000);
    }
