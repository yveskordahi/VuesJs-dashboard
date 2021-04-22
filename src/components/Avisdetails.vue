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
                
                  <li>
                    <a target="_blank" href="https://documenter.getpostman.com/view/11471142/TzJvewxp#intro">
                         <i class="fa fa-info fa-2x"></i>
                          <span class="nav-text">
                              Documentation
                          </span>
                      </a>
                  </li>
                
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
  
          <div class="area">
            <div class="home">
              <h2 class="home__title">Avis détaillés</h2>
              <div class="home__content__avis-details">
                  <div class="host__user-block">
                      <hr class="host__user-separator--left">
                      <div class="host__information">
                          <img class="host__information__img" src="../assets/img/Chad-Profile-pic-circle.png" alt="">
                          <div class="host__information__details">
                              <h3>Devon Lane</h3>
                              <p>12mlgyu0974gf568</p>
                              <div class="host__users-note">
                                  <p>3.9</p>
                                  <div class="stars__block">
                                      <i class="fa fa-star fa__avis-details"></i>
                                      <i class="fa fa-star fa__avis-details"></i>
                                      <i class="fa fa-star fa__avis-details"></i>
                                      <i class="fa fa-star fa__avis-details"></i>
                                      <i class="fa fa-star fa__avis-details"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <hr class="host__user-separator--rigth">
                  </div>
                  <div class="block--avis--details--chat">
                      <div class="block--chat">
                          <img src="../assets/img/Marrakech.png" alt="">
                          <div>
                              <h3>Hakenaals Marrakech, Maroc</h3>
                              <div class="bubble-chat-first">
                                  <p>Devon Lane est un client poli et souriant, malheureusement il a laissé sa chambre dans un état lamentable pendant son séjour d’une
                                  semaine à Marrakech. </p> 
                                  <p class="bubble-chat-date">24 août 2020, 14h01</p>
                              </div>
                          </div>
                      </div>
                      <div class="block--chat">
                          <div>
                              <h3>Hakenaals Cap d’Agde, France</h3>
                              <div class="bubble-chat-first">
                                  <p>Devon était un client exemplaire durant son séjour au Hakenaals du Cap d’Agde. Courtois et souriant je le recommande à la communauté Hakenaals.</p> 
                                  <p class="bubble-chat-date">24 août 2020, 14h01</p>
                              </div>  
                          </div>
                          <img src="../assets/img/hotel.png" alt="">
                      </div>
                  </div>
              </div>
            </div>
          </div>


    </div>
</template>

<script>
export default {
    name: 'Users',
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
@import '../assets/styles/avis-details.css';

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