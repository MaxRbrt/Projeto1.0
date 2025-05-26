//FUNCIOANLIDADE DO MENU HAMBURGUER
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const nav = document.getElementById('nav');

    menu.addEventListener('click', function () {
        
        nav.classList.toggle('active');

        
        menu.classList.toggle('open');

        
        const bar1 = menu.querySelector('.bar1');
        const bar2 = menu.querySelector('.bar2');
        const bar3 = menu.querySelector('.bar3');

        bar1.classList.toggle('bar1-animate');
        bar2.classList.toggle('bar2-animate');
        bar3.classList.toggle('bar3-animate');
    });
});


//FUNCIONALIDADE DO HEADER
  let lastScrollTop = 0;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      
      header.classList.add('hide');
    } else {
      
      header.classList.remove('hide');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });

  //Simular Json
  document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio real

    const dados ={ 
      nome: document.getElementById("nomeContato").value,
      email: document.getElementById("emailContato").value,
      telefone: document.getElementById("telefoneContato").value,
      assunto: document.getElementById("assuntoContato").value,
      mensagem: document.getElementById("mensagemContato").value
    };
    const jsonSimulado = JSON.stringify(dados, null, 2);

    alert("Dados enviados com sucesso:\n\n" + jsonSimulado);

    this.reset(); // limpa os campos
  });

