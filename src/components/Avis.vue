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
              <h2 class="home__title">Avis</h2>
              <div class="navbar__avis">
                  <div class="searchbox__avis">
                      <form action="" method="">
                          <div class="input__Container">
                              <i class="fa fa-search icon"> </i>
                              <input class="search searchbox" type="text" name="text" placeholder="Rechercher...">
                          </div>
                      </form>
                      <div class="searchbox__avis__button">
                          <a href=""><button>Envoyer un code promo</button></a>
                      </div>
                  </div>
                  <div class="input__sort-by">
                      <form action="" method="">
                          <div class="input__Container__avis">
                              <i onclick="myFunction()" class="fa fa-chevron-down icon dropIcon"> </i>
                              <input class="search input__avis__searchbox" type="text" name="text" placeholder="Trier par...">
                              <div id="myDropdown" class="dropdown-content">
                                  <a href="#home">Avis croissant</a>
                                  <a href="#about">Avis décroissant</a>
                                  <a href="#contact">Note les plus favorables</a>
                                  <a href="#contact">Note les moins favorables</a>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
  
              <div class="home__content__avis">
                  <div class="content__avis">
                      <div id="inner__avis">
                          <div class="avis__block">
                              <div class="notification__block-inner">
                                  <div href="#" class="notification__block--avis">
                                      <div class="notification__block__historic__note">
                                          <div class="block__name">
                                              <h2 class="avis__name-name">Nom</h2>
                                          </div>
                                          <div class="block__id">
                                              <h2>Identifiant</h2>   
                                          </div>
                                          <div class="block__note">
                                              <h2>Note Globale</h2>   
                                          </div>
                                          <div class="block__nb__avis">
                                              <h2>Nombre d'avis</h2>   
                                          </div>
                                      </div>
                                  </div>
                                  <hr class="notification__note__separator">
                              <div class="block__overflow__avis">
                                  
                                  <a href="avis-details.html" class="notification__block--selector">
                                      <div class="notification__block__historic__note__avis">
                                          <div class="avis__name">
                                              <label class="container">
                                                  <input class="trash__checkbox" type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <img class="avis__name-picture" src="../assets/img/img-mail.svg" alt="">
                                              <p class="avis__name-name">Cameron Williamson</p>
                                          </div>
                                          <h2 class="id_code">97625ertyu87FG99</h2>
                                          <div>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                          </div>
                                          <p class="nb__avis">12</p>
                                      </div>
                                  </a>
                                  <hr class="notification__note__separator">
                                  <a href="#" class="notification__block--selector">
                                      <div class="notification__block__historic__note__avis">
                                          <div class="avis__name">
                                              <label class="container">
                                                  <input class="trash__checkbox" type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <img class="avis__name-picture" src="../assets/img/img-mail.svg" alt="">
                                              <p class="avis__name-name">Cameron Williamson</p>
                                          </div>
                                          <h2 class="id_code">97625ertyu87FG99</h2>
                                          <div>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                          </div>
                                          <p class="nb__avis">12</p>
                                      </div>
                                  </a>
                                  <hr class="notification__note__separator">
                                  <a href="#" class="notification__block--selector">
                                      <div class="notification__block__historic__note__avis">
                                          <div class="avis__name">
                                              <label class="container">
                                                  <input class="trash__checkbox" type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <img class="avis__name-picture" src="../assets/img/img-mail.svg" alt="">
                                              <p class="avis__name-name">Cameron Williamson</p>
                                          </div>
                                          <h2 class="id_code">97625ertyu87FG99</h2>
                                          <div>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                          </div>
                                          <p class="nb__avis">12</p>
                                      </div>
                                  </a>
                                  <hr class="notification__note__separator">
                                  <a href="#" class="notification__block--selector">
                                      <div class="notification__block__historic__note__avis">
                                          <div class="avis__name">
                                              <label class="container">
                                                  <input class="trash__checkbox" type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <img class="avis__name-picture" src="../assets/img/img-mail.svg" alt="">
                                              <p class="avis__name-name">Cameron Williamson</p>
                                          </div>
                                          <h2 class="id_code">97625ertyu87FG99</h2>
                                          <div>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                          </div>
                                          <p class="nb__avis">12</p>
                                      </div>
                                  </a>
                                  <hr class="notification__note__separator">
                                  <a href="#" class="notification__block--selector">
                                      <div class="notification__block__historic__note__avis">
                                          <div class="avis__name">
                                              <label class="container">
                                                  <input class="trash__checkbox" type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <img class="avis__name-picture" src="../assets/img/img-mail.svg" alt="">
                                              <p class="avis__name-name">Cameron Williamson</p>
                                          </div>
                                          <h2 class="id_code">97625ertyu87FG99</h2>
                                          <div>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                          </div>
                                          <p class="nb__avis">12</p>
                                      </div>
                                  </a>
                                  <hr class="notification__note__separator">
                                  <a href="#" class="notification__block--selector">
                                      <div class="notification__block__historic__note__avis">
                                          <div class="avis__name">
                                              <label class="container">
                                                  <input class="trash__checkbox" type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <img class="avis__name-picture" src="../assets/img/img-mail.svg" alt="">
                                              <p class="avis__name-name">Cameron Williamson</p>
                                          </div>
                                          <h2 class="id_code">97625ertyu87FG99</h2>
                                          <div>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                          </div>
                                          <p class="nb__avis">12</p>
                                      </div>
                                  </a>
                                  <hr class="notification__note__separator">
                                  <a href="#" class="notification__block--selector">
                                      <div class="notification__block__historic__note__avis">
                                          <div class="avis__name">
                                              <label class="container">
                                                  <input class="trash__checkbox" type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <img class="avis__name-picture" src="../assets/img/img-mail.svg" alt="">
                                              <p class="avis__name-name">Cameron Williamson</p>
                                          </div>
                                          <h2 class="id_code">97625ertyu87FG99</h2>
                                          <div>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                          </div>
                                          <p class="nb__avis">12</p>
                                      </div>
                                  </a>
                                  <hr class="notification__note__separator">
                                  <a href="#" class="notification__block--selector">
                                      <div class="notification__block__historic__note__avis">
                                          <div class="avis__name">
                                              <label class="container">
                                                  <input class="trash__checkbox" type="checkbox">
                                                  <span class="checkmark"></span>
                                              </label>
                                              <img class="avis__name-picture" src="../assets/img/img-mail.svg" alt="">
                                              <p class="avis__name-name">Cameron Williamson</p>
                                          </div>
                                          <h2 class="id_code">97625ertyu87FG99</h2>
                                          <div>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                              <i class="fa fa-star fa__avis"></i>
                                          </div>
                                          <p class="nb__avis">12</p>
                                      </div>
                                  </a>
                                  <hr class="notification__note__separator">
                                  
                              </div>
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
    name: 'Avis',
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
@import '../assets/styles/avis.css';

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