<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotos" :key="foto.id">
        <div class="painel">
          <h2 class="painel-titulo">{{ foto.titulo }}</h2>
          <div class="painel-conteudo">
            <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" />
            <div class="painel-resumo" :type="tipo">
              {{ resumo }}
              <tr v-for="personagem of personagens" :key="personagem.id"></tr>
              <tr>
                {{
                  personagens.pontosVida
                }}
              </tr>
              <tr>
                {{
                  personagens.forcaPersonagem
                }}
              </tr>
              <tr>
                {{
                  personagens.agilidadePersonagem
                }}
              </tr>
            </div>
          </div>
        </div>
      </li>
      <li>
        <button class="estilo-botao">{{ valorBotao }}</button>
      </li>
      <li>
        <textarea
          class="text-resumo"
          v-model="message"
          placeholder="Log Jogo"
        ></textarea>
      </li>
    </ul>
  </div>
</template>

<script>
import Personagem from "./services/personagens";
import Jogo from "./services/jogo";

export default {
  data() {
    return {
      personagens: [],
      titulo: "JOGO RPG",
      valorBotao: "Batalha",
      fotos: [
        {
          url:
            "https://vignette.wikia.nocookie.net/coroa-das-entidades/images/d/d8/Orc.jpg/revision/latest?cb=20190627215321&path-prefix=pt-br",
          titulo: "orc",
        },
        {
          url:
            "https://i.pinimg.com/originals/18/c6/45/18c645dc779a5faa0ea98a3fcedc78e8.jpg",
          titulo: "humano",
        },
      ],
      resumo: "Resumo Personagem",
    };
  },

  mounted() {
    Personagem.listar().then((resposta) => {
      console.log(resposta);
      this.personagens = resposta;
    });

    Jogo.calcularIniciativa().then((resposta) => {
      console.log(resposta);
    });
       Jogo.realizarAtaque().then((resposta) => {
      console.log(resposta);
    });
       Jogo.calcularDano().then((resposta) => {
      console.log(resposta);
    });
  },
};
</script>

<style >
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
  border: solid 8px gray;
}

.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
  text-align: center;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
  text-align: center;
  width: 15%;
}

.imagem-responsiva {
  width: 95%;
  border: solid 1px gray;
}

.estilo-botao {
  padding: 0 auto;
  border: solid 8px gray;
  display: inline-block;
  margin: 25px;
  box-shadow: 5px 5px 10px gray;
  width: 200px;
  height: 200%;
  vertical-align: top;
  text-align: center;
}
/* estilo do painel */

.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 200%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: rgb(149, 151, 151);
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

.painel .painel-resumo {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 150px;
  height: 150%;
  vertical-align: top;
  text-align: center;
}

.text-resumo {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 600px;
  height: 600%;
  vertical-align: top;
  text-align: center;
}
</style>
