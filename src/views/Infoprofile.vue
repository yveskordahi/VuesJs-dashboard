<template>
    <div>
        <div class="top__menu">
            <div class="top__menu__nav">
                <div class="nav__list">
                    <router-link class="" to="/"><li class="nav__list__li"><a href="">Accueil</a></li></router-link>
                    <li class="nav__list__li"><a href="#">Service emploi</a></li>
                    <li class="nav__list__li"><a href="#">Département</a></li>
                    <li class="nav__list__li"><a href="#">CRM</a></li>
                    <li class="nav__list__li"><a href="#">Service client</a></li>
                    <li class="nav__list__li"><a href="#">Avis customotel</a></li>
                </div>
                <div class="nav__list">
                  <li class="nav__list__li"><a href="#">Rechercher</a></li>
                  <li class="nav__list__li"><a href="#">Aide et documentation</a></li>
                  <li class="nav__list__li"><a href="#">JODGE</a></li>
                </div>
            </div>
          </div>
          <div class="main-menu__block__searchbox">
              <div class="main-menu__block__searchbox__container">
                  <h2>Hakennals</h2>
                  <div class="main-menu__block__searchbox--content-flex">
                      <h2>Entité :</h2>
                      <input class="search main-menu__block__searchbox__input" type="text" name="text" placeholder="">
                  </div>
                  <div class="search main-menu__block__searchbox--content-flex">
                      <h2>Recherche :</h2>
                      <input class="main-menu__block__searchbox__input" type="text" name="text" placeholder="">
                  </div>
                  <div class="main-menu__block__searchbox--content-flex--3">
                      <h2>Références :</h2>
                      <div>
                          <input class="search main-menu__block__searchbox__input--3" type="text" name="text"  placeholder="">
                          <input class="search main-menu__block__searchbox__input--3" type="text" name="text"  placeholder="">
                      </div>
                  </div>
                  <a href="" class="back--to-home">Retourner à l'accueil</a>
              </div>
          </div>
          <nav class="main-menu">
              <ul>
                <router-link class="" to="/">
                  <li>
                      <a href="">
                          <span class="nav-text">
                              Rechercher un client
                          </span>
                      </a>  
                  </li>
                  </router-link>
                  <hr class="separator__menu">
                  <router-link class="" to="/Infoprofile">
                  <li>
                      <a href="">
                          <span class="nav-text">
                              Informations profil
                          </span>
                      </a>
                  </li>
                </router-link>
                  <hr class="separator__menu">
                  <li>
                      <a href="">
                          <span class="nav-text">
                              Avis
                          </span>
                      </a>
                  </li>
              </ul>
          </nav>
  
          <div class="area">
            <div class="home">
                <div class="block__title">
                    <div>
                      <h2 class="home__title">Information profil</h2>
                    </div>
                    <div class="create__profile-block">
                      <div class="add__users__button--info-profile">
                        <router-link class="" to="/Addprofile"><a href=""><button>Ajouter un avis</button></a></router-link>
                      </div>
                    </div>
                </div>
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
                                  <div class="stars__block--margin">
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
                </div>
              <div class="block__note">
                  <div class="block__note-left">
                      <div class="block__note-left__flex-column">
                          <div class="block__note-left__flex-column__text">
                              <p class="block__note-left__flex-column__text--heigth">Ponctualité arrivée</p>
                              <p class="block__note-left__flex-column__text--heigth">Propreté de la chambre</p>
                              <p class="block__note-left__flex-column__text--heigth">Discrétion</p> 
                          </div>
                          <div class="block__note-left__flex-column__stars">
                              <div class="stars__block--heigth">
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                              </div>
                              <div class="stars__block--heigth">
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                              </div>
                              <div class="stars__block--heigth">
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                              </div>
                          </div>
                      </div>
                  </div>
  
                  <div class="block__note-rigth">
                      <div class="block__note-left__flex-column">
                          <div class="block__note-left__flex-column__text">
                              <p class="block__note-left__flex-column__text--heigth">Ponctualité arrivée</p>
                              <p class="block__note-left__flex-column__text--heigth">Propreté de la chambre</p>
                              <p class="block__note-left__flex-column__text--heigth">Discrétion</p> 
                          </div>
                          <div class="block__note-left__flex-column__stars">
                              <div class="stars__block--heigth">
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                              </div>
                              <div class="stars__block--heigth">
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                              </div>
                              <div class="stars__block--heigth">
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                                  <i class="fa fa-star fa__avis-details"></i>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  
              <h2 class="commentary">Commentaires (4)</h2>
              <div class="content__documentation">
                  <div id="inner__documentation">
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
                          <div class="block--chat--rigth">
                              <div>
                                  <h3>Hakenaals Cap d’Agde, France</h3>
                                  <div class="bubble-chat-first">
                                      <p>Devon était un client exemplaire durant son séjour au Hakenaals du Cap d’Agde. Courtois et souriant je le recommande à la communauté Hakenaals.</p> 
                                      <p class="bubble-chat-date">24 août 2020, 14h01</p>
                                  </div>  
                              </div>
                              <img src="../assets/img/hotel.png" alt="">
                          </div>
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
                          <div class="block--chat--rigth">
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
    </div>
</template>

<script>

</script>

<style scoped>
@import '../assets/styles/reset.css';
@import '../assets/styles/sidebar.css';
@import '../assets/styles/style.css';
@import '../assets/styles/home.css';
@import '../assets/styles/avis-details.css';
@import '../assets/styles/infoprofile.css';
</style>