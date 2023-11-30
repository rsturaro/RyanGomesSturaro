<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ryan Gomes Sturaro - GitHub Profile</title>
  <style>
    body {
      background-color: #000;
      color: #fff;
      font-family: 'Arial', sans-serif;
      text-align: center;
    }

    header {
      padding: 2rem;
      background-color: #111;
    }

    section {
      padding: 2rem;
      position: relative; /* Adicionado para posicionar as estrelas em relação a esta seção */
    }

    footer {
      padding: 1rem;
      background-color: #111;
    }

    @keyframes twinkling {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }

    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      background-color: #fff;
      border-radius: 50%;
      animation: twinkling 2s infinite;
    }

    /* Adicionando uma classe adicional para uma estrela maior */
    .star.large {
      width: 5px;
      height: 5px;
    }
  </style>
</head>
<body>

  <header>
    <h1>Ryan Gomes Sturaro</h1>
  </header>

  <section>
    <p>Estudo Engenharia de Software</p>
    <!-- Adicionei estrelas para um toque espacial -->
    <div class="star" style="top: 20%; left: 30%;"></div>
    <div class="star large" style="top: 50%; left: 70%;"></div>
    <!-- Adicione mais estrelas conforme necessário -->
  </section>

  <footer>
    <p>&copy; 2023 Ryan Gomes Sturaro</p>
  </footer>

</body>
</html>

    
