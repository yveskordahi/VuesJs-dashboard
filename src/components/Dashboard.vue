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
              <h2 class="home__title">Accueil</h2>
              <div class="home__content">
                  <div class="content__credit-card">
                      <div id="inner">
                          <div class="inner__navbar">
                              <h3 class="inner__navbar-text">Solde sur votre compte</h3>
                              <div class="inner__navbar__show-more-div">
                              <a href="#" class="inner__navbar__show-more">Voir plus</a> <a href="#"><img class="show-more__icon" src="../assets/img/right-chevron.svg" alt="logo du chevron"></a>
                              </div>
                          </div>
                          <hr class="inner__separator">
                          <div class="inner__content__credit-card">
                              <div class="credit-card__block">
                                  <div class="credit-card__block__top">
                                      <h1>0 €</h1>
                                      <div class="block__top-icon-gold"> <img src="../assets/img/lightning.svg" alt="Formule gold logo"> <p>Formule Gold</p> </div> 
                                  </div>
                                  <div class="credit-card__historic">
                                      <div class="credit-card__historic-inner">
                                          <div class="credit-card__historic__note">
                                                  <p class="historic__note__amount">- 199€</p>
                                                  <p class="historic__note__date">05-04-2021</p>
                                          </div>
                                          <hr class="historic__note__separator">
                                          <div class="credit-card__historic__note">
                                              <p class="historic__note__amount">- 199€</p>
                                              <p class="historic__note__date">05-04-2021</p>
                                          </div>
                                          <hr class="historic__note__separator">
                                          <div class="credit-card__historic__note">
                                              <p class="historic__note__amount">- 199€</p>
                                              <p class="historic__note__date">05-04-2021</p>
                                          </div>
                                          <hr class="historic__note__separator">
                                          <div class="credit-card__historic__note">
                                              <p class="historic__note__amount">- 199€</p>
                                              <p class="historic__note__date">05-04-2021</p>
                                          </div>
                                          <hr class="historic__note__separator">
                                          <div class="credit-card__historic__note">
                                              <p class="historic__note__amount">- 199€</p>
                                              <p class="historic__note__date">05-04-2021</p>
                                          </div>
                                          <hr class="historic__note__separator">
                                          <div class="credit-card__historic__note">
                                              <p class="historic__note__amount">- 199€</p>
                                              <p class="historic__note__date">05-04-2021</p>
                                          </div>
                                          <hr class="historic__note__separator">
                                      </div>
                                  </div>
                              </div>
                              <div class="credit-card__icon"><img src="../assets/img/Card.svg" alt="credit card logo"></div>
                          </div>
                          <div class="credit-card__bottom">
                              <a href=""><button>Effectuer un paiement</button></a>
                          </div>
                      </div>
                  </div>
                  <div class="content__notifications">
                      <div id="inner">
                          <div class="inner__navbar">
                              <h3 class="inner__navbar-text">Notifications</h3>
                              <div class="inner__navbar__show-more-div">
                              <a href="#" class="inner__navbar__show-more">Voir plus</a> <a href="#"><img class="show-more__icon" src="../assets/img/right-chevron.svg" alt="logo du chevron"></a>
                              </div>    
                          </div>
                          <hr class="inner__separator">
                          <div class="inner__navbar">
                              <form action="" method="">
                                  <div class="input__Container">
                                      <i class="fa fa-search icon"> </i>
                                      <input class="search searchbox" type="text" name="text" placeholder="Rechercher...">
                                  </div>
                              </form>
                              <div class="inner__navbar__show-more-div">
                                  <div class="inner__navbar__trash">
                                          <label class="container">
                                              <input class="trash__checkbox" type="checkbox">
                                              <span class="checkmark"></span>
                                          </label>
                                     <a class="trash__icon-a" href=""><img class="trash__icon" src="../assets/img/delete.svg" alt="logo du chevron"></a>
                                  </div>
                              </div>    
                          </div>
                          <div class="notification__block">
                              <div class="notification__block-inner">
                                  <a href="#" class="notification__block--selector">
                                      <div class="notification__block__date">
                                          <p class="notification__note__date">05-04-2021</p>
                                      </div>
                                      <div class="notification__block__historic__note">
                                          <img src="../assets/img/img-mail.svg" alt="">
                                          <h2>Customotel</h2>
                                          <p>Mise à jour concernant...</p>
                                          <p>Hello ! Nous venons de mettr...</p>
                                      </div>
                                  </a>
                                  <hr class="notification__note__separator">
                                  <a href="#" class="notification__block--selector">
                                      <div class="notification__block__date">
                                          <p class="notification__note__date">05-04-2021</p>
                                      </div>
                                      <div class="notification__block__historic__note">
                                          <img src="../assets/img/img-mail.svg" alt="">
                                          <h2>Customotel</h2>
                                          <p>Mise à jour concernant...</p>
                                          <p>Hello ! Nous venons de mettr...</p>
                                      </div>
                                  </a>
                                  <hr class="notification__note__separator">
                                  <a href="#" class="notification__block--selector">
                                      <div class="notification__block__date">
                                          <p class="notification__note__date">05-04-2021</p>
                                      </div>
                                      <div class="notification__block__historic__note">
                                          <img src="../assets/img/img-mail.svg" alt="">
                                          <h2>Customotel</h2>
                                          <p>Mise à jour concernant...</p>
                                          <p>Hello ! Nous venons de mettr...</p>
                                      </div>
                                  </a>
                                  <hr class="notification__note__separator">
                                  <a href="#" class="notification__block--selector">
                                      <div class="notification__block__date">
                                          <p class="notification__note__date">05-04-2021</p>
                                      </div>
                                      <div class="notification__block__historic__note">
                                          <img src="../assets/img/img-mail.svg" alt="">
                                          <h2>Customotel</h2>
                                          <p>Mise à jour concernant...</p>
                                          <p>Hello ! Nous venons de mettr...</p>
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
</template>

<script>
export default {
    name: 'Dashboard',
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

.content__credit-card {
    display: flex;
    justify-content: center;
    width: 47%;
    height: 64%;
    background-color: rgb(255, 255, 255);
    border: solid rgb(0, 0, 0, 0.1) 1.5px;
    box-shadow: 0px 4px 3px -2px rgb(5, 5, 5, 0.3);
    overflow: hidden;
}

.content__notifications {
    display: flex;
    justify-content: center;
    width: 47%;
    height: 64%;
    margin-left: 3%;
    background-color: rgb(255, 255, 255);
    border: solid rgb(0, 0, 0, 0.1) 1.5px;
    box-shadow: 0px 4px 3px -2px rgb(5, 5, 5, 0.3);
    overflow: hidden;
}

.icon {
    color: rgb(34, 34, 34);
    padding-top: 6px;
}

.searchbox {
    background-color: rgba(47, 128, 237, 0.1);
    border: none;
    width: 300px;
    padding: 7px;
        padding-left: 7px;
    padding-left: 30px;
    font-size: 13px;
    font-weight: 500;
    border-radius: 5px;
}
</style>