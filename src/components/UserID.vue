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
                      <a href="">
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
              <h2 class="home__title">Identification client</h2>
              <div class="block__before__content">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique vivamus at velit proin.</p>
              </div>
              <div class="home__content">
                  <div class="content__graph__id-users">
                      <div class="content__id-users">
                          <div class="id-users__block">
                              <div class="id-users__block__app">
                                  <h2 class="id-users__block__title">APP ID</h2>
                                  <p>384620038y9727ce9827223eejatbbaz678l</p>
                              </div>
                              <hr class="notification__note__separator__id-users">
                              <div class="id-users__block__app">
                                  <h2 class="id-users__block__title">App secret</h2>
                                  <form action="" method="">
                                      <div class="input__Container__id-users">
                                          <i class="fa fa-eye-slash icon"> </i>
                                          <input class="search password__id-users" type="password" name="text" placeholder="password">
                                      </div>
                                  </form>
                              </div>
                              <hr class="notification__note__separator__id-users">
                              <div class="id-users__block__app">
                                  <h2 class="id-users__block__title">Nom du channel</h2>
                                  <form action="" method="">
                                          <input class="search chanel-name__id-users" type="text" name="text" placeholder="Veuillez rentrer le nom du channel">
                                  </form>
                              </div>
                              <hr class="notification__note__separator__id-users">
                              <div class="id-users__block__app">
                                  <h2 class="id-users__block__title">Temp token</h2>
                                      <div class="token__block">
                                          <div class="add__users__button">
                                              <a href=""><button>Générer le Temp Token</button></a>
                                          </div>
                                          <div class="back__button">
                                              <a href=""><button>Retour</button></a>
                                          </div>
                                      </div>
                              </div>
                              <a class="token__link" href="#">Pour savoir comment déployer un accès de sécurite veuillez <span>cliquer ici</span>.</a>
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
    name: 'UserID',
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
@import '../assets/styles/id_users.css';

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

.icon {
    color: rgb(34, 34, 34);
    padding-top: 10px;
}
</style>