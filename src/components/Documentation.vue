<template>
    <div>
        <div class="top__menu">
            <div class="top__menu__nav">
                <img class="logo" src="../assets/img/Logo_2.svg" alt="Logo of customotel">
                <div class="nav__list">
                    <li class="nav__list__li"><a href="#">Support</a></li>
                    <li class="nav__list__li"><a href="#">Communauté</a></li>
                    <li class="nav__list__li"><a href="#">Téléchargements</a></li>
                    <li class="nav__list__li"><a href="#">Username</a></li>
                </div>
            </div>
        </div>
  
          <nav class="main-menu">
              <ul>
                <router-link class="" to="/Dashboard">
                  <li>
                      <a href="">
                          <i class="fa fa-home fa-2x"></i>
                          <span class="nav-text">
                              Accueil
                          </span>
                      </a>  
                  </li>
                </router-link>
                <router-link class="" to="/Graph">
                  <li>
                      <a href="">
                          <i class="fa fa-bar-chart-o fa-2x"></i>
                          <span class="nav-text">
                              Graphs et Statistiques
                          </span>
                      </a>
                  </li>
                </router-link>
                <router-link class="" to="/Avis">
                  <li class="has-subnav">
                      <a href="l">
                         <i class="fa fa-thumbs-up fa-2x"></i>
                          <span class="nav-text">
                              Avis
                          </span>
                      </a>     
                  </li>
                </router-link>
                <router-link class="" to="/UserID">
                  <li class="has-subnav">
                      <a href="">
                         <i class="fa fa-lock fa-2x"></i>
                          <span class="nav-text">
                              Identification Client
                          </span>
                      </a>
                  </li>
                </router-link>
                <router-link class="" to="/Users">
                  <li class="has-subnav">
                      <a href="">
                          <i class="fa fa-users fa-2x"></i>
                          <span class="nav-text">
                              Utilisateurs
                          </span>
                      </a> 
                  </li>
                </router-link>
                <router-link class="" to="/Documentation">
                  <li>
                      <a href="">
                         <i class="fa fa-info fa-2x"></i>
                          <span class="nav-text">
                              Documentation
                          </span>
                      </a>
                  </li>
                </router-link>
              </ul>
  
              <ul class="logout">
                <router-link class="" to="/Connexion">
                  <li>
                     <a href="">
                           <i class="fa fa-power-off fa-2x"></i>
                          <span class="nav-text">
                              Se déconnecter
                          </span>
                      </a>
                  </li>
                </router-link>
              </ul>
          </nav>
  
          <!-- <div class="area">
            <div class="home">
              <h2 class="home__title">Customotel API - Documentation</h2>
              <div class="home__content">
                  <div class="content__documentation">
                      <div id="inner__documentation">
                          <div class="documentation__text">
                              <h1 class="documentation__title">Introduction</h1>
                              <p>
                                  L’API Customotel est un service web hébergé par Xelya, à destination des structures hotellières et de leurs clients, et qui veulent interfacer directement avec leurs sites web ou extranets.
                                  <br><br>
                                  L’API utilise un protocole REST JSON via HTTPS. <br><br>
                                  Le contenu de toutes les requêtes et réponses est au format JSON, et encodé en UTF-8.
                                  <br><br>
                                  L’API est structurée par fonctionnalités. Certaines sont accessibles uniquement sur option.
                                  <br><br>
                                  Les méthodes de l’API permettent d’accèder à une liste d’objets et/ou au détail d’un objet (GET), de créer de nouveaux objets (POST) ou d’en mettre à jour (PUT)
                                  <br><br>
                                  Un exemple d’utilisation de l’API est disponible sous la forme d’un fichier Postman.
                              </p>
                              <h1 class="documentation__title">Initialisation</h1>
                              <p>
                                  L'utilisation de l'API est autorisée par l'activation d'un accès avec identifiant unique. <br>
                                  L'identification et l'authentification sont assurées au moyen d'un token JWT. <br>
                                  Le token JWT, qui devra être passé dans chaque requête de l'API, contient notamment l'identifiant unique qui vous sera attribué par Xelya. Cet identifiant vous donne accès, via l'API, aux données d'une application au sein de Ximi.
                                  <br>
                                  Le token est signé via une clé RSA 2048. <br>
                                  En tant que consommateur de l'API, vous devez préalablement générer une clé RSA de taille 2048 bit. <br>
                                  La génération de cette clé peut se faire via des outils comme OpenSSH. <br>
                                  Vous conservez la partie privée de la clé. La partie publique doit nous être envoyée au format PEM, elle nous servira à vérifier la signature des tokens JWT.
                                  <br>
                              </p>
                              <h1 class="documentation__title">Authentification</h1>
                              <p>
                                  Un token JWT doit être généré au début d'une séquence d'utilisation de l'API, <br>
                                  et doit être transmis dans tous les appels aux méthodes de l'API, dans un Header nommé API-Key <br><br>
  
                                  La valeur de ce header doit être un token JWT avec le contenu suivant : <br>
                                                      Header : { "alg": "RS512", "typ" : "JWT"} <br>
                                                      Payload: { “sub": "<identifiant unique>", "exp" : "<timestamp>" } <br>
                                                      Signature : <base 64 encoding of the signature> <br>
                                                  
                                  <br>                        
                                  Le contenu de Header est fixe; l'algorithme de signature est RS512. <br>
                                  Le Payload doit contenir : <br>
                                  - dans "sub" la valeur de l'identifiant unique qui vous a été fourni par Xelya, et qui identifie un tenant/application Ximi.<br>
                                  Le format de l'identifiant ressemble à ceci : a067d785-7947-4092-1f39-f0576ad4b1c9<br>
                                  - dans "exp" une date d'expiration, exprimée sous la forme d'un timestamp, ou nombre de secondes depuis le 1er janvier 1970.<br>
                                  Le contenu de Signature est généré en signant avec la clé privée les contenus encodés en Base 64 des Header et Payload.<br>
                                  <br>
                                  Le contenu final passé dans le header API-Key ressemble à l'exemple suivant :<br><br>
  
                                  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  
                                  <h1 class="documentation__title">Requêtes</h1>
  
                                  <p>
                                      Chaque requête doit contenir au minimum les headers suivants : </br>
                                      Content-Type : application/json </br>
                                      API-Key : <valeur du token JWT> </br> </br>
  
                                      NOTE : les formats acceptés pour les champs de type DATE dans le corps de méthodes sont les suivants : YYYY-MM-DD, ISO 8601 (YYYY-MM-DDThh:mm:ssZ)
  
                                  </p>
  
                                  <h1 class="documentation__title">Réponses</h1>
                                  <h1 class="documentation__title">Méthodes GET de listes</h1>
  
                                  <p>
                                  Les méthodes qui retournent des listes d'objets ont une réponse JSON structurée ainsi : <br>
                                                      { <br>
                                                          Results : [] // liste des objets résultats de la requête <br>
                                                          HasMoreRows : boolean // Vaut true s'il y a des données supplémentaires (voir paramètres gérant la pagination) <br>
                                                          Hitcount : integer // Nombre d'éléments total, renseigné si dans la requête les paramètres ComputeHasMoreRows et ComputeHitCount sont à true <br>
                                                      } <br> <br>
                                                  
                                  Chaque objet retourné contient généralement une propriété Id : integer, qui est l'identifiant unique de l'objet dans la base de données. <br>
                                  Cet Id correspond à la clé étrangère qu'on retrouve dans d'autres propriétés de certaines données résultats. <br>
                                  </p>
                              </p>
                              <h1 class="documentation__title">Méthodes POST de création</h1>
                              <p>
                                  Les méthodes qui permettent de créer des objets ont une réponse JSON, en cas de succès, qui contient au moins une propriété Id : integer, qui est l'identifiant unique de l'objet qui vient d'être créé.
                              </p>
                              <h1 class="documentation__title">API</h1>
                              <p>Liste exhaustive des méthodes disponibles :</p>
  
                              <h1 class="documentation__title">Gestion des tâches :</h1>
  
                              <hr>
                              <div class="documentation__bottom-block--flex">
                                  <div><h1 class="documentation__title">API</h1></div>
                                  <div><h1 class="documentation__title">Description</h1></div>
                              </div>
                              
                              <hr>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      Fermentum quam eget neque eu. Quis diam hendrerit semper non blandit nunc. <br>
                                      Viverra sem ac sit nisi, porta blandit ultrices. <br>
                                      Integer massa, feugiat libero eget condimentum enim amet convallis.
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      Fermentum quam eget neque eu. Quis diam hendrerit semper non blandit nunc. <br>
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      Fermentum quam eget neque eu. Quis diam hendrerit semper non blandit nunc. <br>
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
                              <hr>
  
  
  
                              <h1 class="documentation__title">Gestion des utilisateurs :</h1>
  
                              <hr>
                              <div class="documentation__bottom-block--flex">
                                  <div><h1 class="documentation__title">API</h1></div>
                                  <div><h1 class="documentation__title">Description</h1></div>
                              </div>
                              
                              <hr>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      Fermentum quam eget neque eu. Quis diam hendrerit semper non blandit nunc. <br>
                                      Viverra sem ac sit nisi, porta blandit ultrices. <br>
                                      Integer massa, feugiat libero eget condimentum enim amet convallis.
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      Fermentum quam eget neque eu. Quis diam hendrerit semper non blandit nunc. <br>
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      Fermentum quam eget neque eu. Quis diam hendrerit semper non blandit nunc. <br>
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
                              <hr>
  
  
  
                              <h1 class="documentation__title">Gestion des fichiers :</h1>
  
                              <hr>
                              <div class="documentation__bottom-block--flex">
                                  <div><h1 class="documentation__title">API</h1></div>
                                  <div><h1 class="documentation__title">Description</h1></div>
                              </div>
                              
                              <hr>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      Fermentum quam eget neque eu. Quis diam hendrerit semper non blandit nunc. <br>
                                      Viverra sem ac sit nisi, porta blandit ultrices. <br>
                                      Integer massa, feugiat libero eget condimentum enim amet convallis.
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      Fermentum quam eget neque eu. Quis diam hendrerit semper non blandit nunc. <br>
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      Fermentum quam eget neque eu. Quis diam hendrerit semper non blandit nunc. <br>
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
  
                              <div class="documentation__bottom-block--flex--text">
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br>
                                      </p>
                                  </div>
                                  <div>
                                      <p class="documentation__bottom-block--flex__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></p>
                                  </div>
                              </div>
  
  
  
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div> -->
    </div>
</template>

<script>
export default {
    name: 'Documentation',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
@import '../assets/styles/reset.css';
@import '../assets/styles/sidebar.css';
@import '../assets/styles/style.css';
@import '../assets/styles/home.css';
@import '../assets/styles/graph.css';
@import '../assets/styles/documentation.css';

nav ul li {
  line-height: 50px;
  margin: 0;
}

nav ul {
  float: inherit;
}

.logo {
  width: 120px;
  top: 0;
  margin-left: 0;
}
</style>