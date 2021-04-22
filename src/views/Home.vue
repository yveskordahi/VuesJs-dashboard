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
                  <div class="main-menu__block__searchbox--content-flex">
                      <h2>Recherche :</h2>
                      <input class="search main-menu__block__searchbox__input" type="text" name="text" placeholder="">
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
                  <li>
                      <a href="">
                          <span class="nav-text">
                              Rechercher un client
                          </span>
                      </a>  
                  </li>
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
                      <p class="home__subtitle">Veuillez mettre le nom ou l’identifiant du client</p>
                      <h2 class="home__title">Rechercher un client</h2>
                    </div>
                    <div class="create__profile-block">
                      <a class="create__profile__btn" href="">Créer un nouveau profil</a>
                    </div>
                </div>
                <div class="home__content">
                  <div class="search__block">
                      <form action="" method="">
                          <div class="input__Container">
                              <i class="fa fa-search icon"> </i>
                              <input id="inptxt" class="search searchbox" type="text" name="text" placeholder="Rechercher..." v-model="searchValue" v-on:keyup="divo">
                          </div>
                      </form>
                      <div class="under__searchbox">by <img class="under__searchbox__logo" src="../assets/img/Logo_2.svg" alt="Logo of customotel"> </div>
                      <div id="div-users" class="users__list">
                          
                          
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
                                                  
                                              </div>
                                              </div>
                                          </div>
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
    data () {
        return {
            searchValue: ''
        }
    },
    methods: {
            divo()
        {
        if (this.searchValue.length > 0)
        {
            document.getElementById('div-users').style.display = 'block'; 
        } else {
            document.getElementById('div-users').style.display = 'none'; 
        }
        }
    }
}
</script>

<style scoped>
@import '../assets/styles/reset.css';
@import '../assets/styles/sidebar.css';
@import '../assets/styles/style.css';
@import '../assets/styles/home.css';
@import '../assets/styles/users.css';
@import '../assets/styles/avis.css';
@import '../assets/styles/searcbox.css';

</style>