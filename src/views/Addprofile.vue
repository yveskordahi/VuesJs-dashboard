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
                      <input class="search main-menu__block__searchbox__input" type="text" name="text"  placeholder="">
                  </div>
                  <div class="main-menu__block__searchbox--content-flex">
                      <h2>Recherche :</h2>
                      <input class="search main-menu__block__searchbox__input" type="text" name="text"  placeholder="">
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
                        <router-link class="" to="/Infoprofile"><a href=""><button>Enregistrer</button></a></router-link>
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
              <div class="block__note--add-profile">
                  <h2 class="commentary--add-profile">Attribuer des étoiles au client :</h2>
                  <div class="block__note-container">
                      <div class="block__note-left">
                          <div class="block__note-left__flex-column">
                              <div class="block__note-left__flex-column__text">
                                  <p class="block__note-left__flex-column__text--heigth">Ponctualité arrivée</p>
                                  <p class="block__note-left__flex-column__text--heigth">Propreté de la chambre</p>
                                  <p class="block__note-left__flex-column__text--heigth">Discrétion</p> 
                              </div>
                              <div class="block__note-left__flex-column__stars">
                                  <div class="stars__block--heigth">
                                      <!-- <i class="fa fa-star fa__avis-details"></i>
                                      <i class="fa fa-star fa__avis-details"></i>
                                      <i class="fa fa-star fa__avis-details"></i>
                                      <i class="fa fa-star fa__avis-details"></i>
                                      <i class="fa fa-star fa__avis-details"></i> -->
                                      <div class="rating">
                                          <input class="input1" type="radio" id="star5" name="rating" value="5"/><label for="star5" class="full" title="Awesome"></label>
                                          <input class="input1" type="radio" id="star4.5" name="rating" value="4.5"/><label for="star4.5" class="half"></label>
                                          <input class="input1" type="radio" id="star4" name="rating" value="4"/><label for="star4" class="full"></label>
                                          <input class="input1" type="radio" id="star3.5" name="rating" value="3.5"/><label for="star3.5" class="half"></label>
                                          <input class="input1" type="radio" id="star3" name="rating" value="3"/><label for="star3" class="full"></label>
                                          <input class="input1" type="radio" id="star2.5" name="rating" value="2.5"/><label for="star2.5" class="half"></label>
                                          <input class="input1" type="radio" id="star2" name="rating" value="2"/><label for="star2" class="full"></label>
                                          <input class="input1" type="radio" id="star1.5" name="rating" value="1.5"/><label for="star1.5" class="half"></label>
                                          <input class="input1" type="radio" id="star1" name="rating" value="1"/><label for="star1" class="full"></label>
                                          <input class="input1" type="radio" id="star0.5" name="rating" value="0.5"/><label for="star0.5" class="half"></label>
                                      </div>
                                  </div>
                                  <div class="stars__block--heigth">
                                      <div class="rating2">
                                          <input class="input2" type="radio" id="star5" name="rating2" value="5"/><label for="star5" class="full" title="Awesome"></label>
                                          <input class="input2" type="radio" id="star4.5" name="rating2" value="4.5"/><label for="star4.5" class="half"></label>
                                          <input class="input2" type="radio" id="star4" name="rating2" value="4"/><label for="star4" class="full"></label>
                                          <input class="input2" type="radio" id="star3.5" name="rating2" value="3.5"/><label for="star3.5" class="half"></label>
                                          <input class="input2" type="radio" id="star3" name="rating2" value="3"/><label for="star3" class="full"></label>
                                          <input class="input2" type="radio" id="star2.5" name="rating2" value="2.5"/><label for="star2.5" class="half"></label>
                                          <input class="input2" type="radio" id="star2" name="rating2" value="2"/><label for="star2" class="full"></label>
                                          <input class="input2" type="radio" id="star1.5" name="rating2" value="1.5"/><label for="star1.5" class="half"></label>
                                          <input class="input2" type="radio" id="star1" name="rating2" value="1"/><label for="star1" class="full"></label>
                                          <input class="input2" type="radio" id="star0.5" name="rating2" value="0.5"/><label for="star0.5" class="half"></label>
                                      </div>
                                  </div>
                                  <div class="stars__block--heigth">
                                      <div class="rating2">
                                          <input class="input2" type="radio" id="star5" name="rating2" value="5"/><label for="star5" class="full" title="Awesome"></label>
                                          <input class="input2" type="radio" id="star4.5" name="rating2" value="4.5"/><label for="star4.5" class="half"></label>
                                          <input class="input2" type="radio" id="star4" name="rating2" value="4"/><label for="star4" class="full"></label>
                                          <input class="input2" type="radio" id="star3.5" name="rating2" value="3.5"/><label for="star3.5" class="half"></label>
                                          <input class="input2" type="radio" id="star3" name="rating2" value="3"/><label for="star3" class="full"></label>
                                          <input class="input2" type="radio" id="star2.5" name="rating2" value="2.5"/><label for="star2.5" class="half"></label>
                                          <input class="input2" type="radio" id="star2" name="rating2" value="2"/><label for="star2" class="full"></label>
                                          <input class="input2" type="radio" id="star1.5" name="rating2" value="1.5"/><label for="star1.5" class="half"></label>
                                          <input class="input2" type="radio" id="star1" name="rating2" value="1"/><label for="star1" class="full"></label>
                                          <input class="input2" type="radio" id="star0.5" name="rating2" value="0.5"/><label for="star0.5" class="half"></label>
                                      </div>
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
                                      <div class="rating2">
                                          <input class="input2" type="radio" id="star5" name="rating2" value="5"/><label for="star5" class="full" title="Awesome"></label>
                                          <input class="input2" type="radio" id="star4.5" name="rating2" value="4.5"/><label for="star4.5" class="half"></label>
                                          <input class="input2" type="radio" id="star4" name="rating2" value="4"/><label for="star4" class="full"></label>
                                          <input class="input2" type="radio" id="star3.5" name="rating2" value="3.5"/><label for="star3.5" class="half"></label>
                                          <input class="input2" type="radio" id="star3" name="rating2" value="3"/><label for="star3" class="full"></label>
                                          <input class="input2" type="radio" id="star2.5" name="rating2" value="2.5"/><label for="star2.5" class="half"></label>
                                          <input class="input2" type="radio" id="star2" name="rating2" value="2"/><label for="star2" class="full"></label>
                                          <input class="input2" type="radio" id="star1.5" name="rating2" value="1.5"/><label for="star1.5" class="half"></label>
                                          <input class="input2" type="radio" id="star1" name="rating2" value="1"/><label for="star1" class="full"></label>
                                          <input class="input2" type="radio" id="star0.5" name="rating2" value="0.5"/><label for="star0.5" class="half"></label>
                                      </div>
                                  </div>
                                  <div class="stars__block--heigth">
                                      <div class="rating2">
                                          <input class="input2" type="radio" id="star5" name="rating2" value="5"/><label for="star5" class="full" title="Awesome"></label>
                                          <input class="input2" type="radio" id="star4.5" name="rating2" value="4.5"/><label for="star4.5" class="half"></label>
                                          <input class="input2" type="radio" id="star4" name="rating2" value="4"/><label for="star4" class="full"></label>
                                          <input class="input2" type="radio" id="star3.5" name="rating2" value="3.5"/><label for="star3.5" class="half"></label>
                                          <input class="input2" type="radio" id="star3" name="rating2" value="3"/><label for="star3" class="full"></label>
                                          <input class="input2" type="radio" id="star2.5" name="rating2" value="2.5"/><label for="star2.5" class="half"></label>
                                          <input class="input2" type="radio" id="star2" name="rating2" value="2"/><label for="star2" class="full"></label>
                                          <input class="input2" type="radio" id="star1.5" name="rating2" value="1.5"/><label for="star1.5" class="half"></label>
                                          <input class="input2" type="radio" id="star1" name="rating2" value="1"/><label for="star1" class="full"></label>
                                          <input class="input2" type="radio" id="star0.5" name="rating2" value="0.5"/><label for="star0.5" class="half"></label>
                                      </div>
                                  </div>
                                  <div class="stars__block--heigth">
                                      <div class="rating2">
                                          <input class="input2" type="radio" id="star5" name="rating2" value="5"/><label for="star5" class="full" title="Awesome"></label>
                                          <input class="input2" type="radio" id="star4.5" name="rating2" value="4.5"/><label for="star4.5" class="half"></label>
                                          <input class="input2" type="radio" id="star4" name="rating2" value="4"/><label for="star4" class="full"></label>
                                          <input class="input2" type="radio" id="star3.5" name="rating2" value="3.5"/><label for="star3.5" class="half"></label>
                                          <input class="input2" type="radio" id="star3" name="rating2" value="3"/><label for="star3" class="full"></label>
                                          <input class="input2" type="radio" id="star2.5" name="rating2" value="2.5"/><label for="star2.5" class="half"></label>
                                          <input class="input2" type="radio" id="star2" name="rating2" value="2"/><label for="star2" class="full"></label>
                                          <input class="input2" type="radio" id="star1.5" name="rating2" value="1.5"/><label for="star1.5" class="half"></label>
                                          <input class="input2" type="radio" id="star1" name="rating2" value="1"/><label for="star1" class="full"></label>
                                          <input class="input2" type="radio" id="star0.5" name="rating2" value="0.5"/><label for="star0.5" class="half"></label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
  
              <h2 class="commentary--add-profile">Rédiger un commentaire :</h2>
              <div class="search__block">
                  
                      <div class="input__Container">
                          <textarea class="searchbox-textarea" id="story" name="story" rows="5" cols="33">
                          
                          </textarea>
                      </div>
                  
              </div>
              <h2 class="commentary--add-profile">Nom de l'hôtel :</h2>
              <div class="search__block">
                  <form action="" method="">
                      <div class="input__Container">
                          <input class="search searchbox" type="text" name="text" placeholder="">
                      </div>
                  </form>
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
@import '../assets/styles/add-profile.css';
@import '../assets/styles/add-profile-stars.css';
</style>