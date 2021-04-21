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
  
          <div class="area">
            <div class="home">
              <h2 class="home__title">Graphs et statistiques</h2>
              <div class="home__content">
                  <div class="content__graph">
                      <div id="inner">
                          <div class="inner__navbar">
                              <h3 class="inner__navbar-text">Clients enregistrés</h3>
                              <div class="inner__navbar__show-more-div">
                                  <input type="date" name="dateofbirth" id="dateofbirth">
                              </div>  
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    name: 'Graph',
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