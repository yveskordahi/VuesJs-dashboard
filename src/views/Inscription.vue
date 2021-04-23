<template>
    <div>
        <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </label>
            <router-link class="" to="/"><a href=""><img src="../assets/img/Logo_2.svg" class="logo"></a></router-link>
            <ul>
                <li><router-link class="" to="/Prix"><a href="">Prix</a></router-link></li>
                <li><router-link class="" to="/Connexion"><a href="">Connexion</a></router-link></li>
                <li><router-link class="" to="/Inscription"><a class="sign__up__btn" href="">Inscription</a></router-link></li>
            </ul>
        </nav>
        <section>
            <div class="container--create__account">
                <div class="home__add-users">
                    <div class="home__content__create__account">
                        <div class="form__container">
                            <form action="action_page.php">
        
                                <div class="form__title">
                                    <p>Commencez gratuitement</p>
                                    <h2>Créer un compte</h2>
                                </div>
                            
                              <div class="label__container">
                                <label for="fname">Prénom :</label>
                                <input class="input__add-users" type="text" id="fname" name="firstname" placeholder="Your name..">
                              </div> 
                          
                              <div class="label__container">
                                <label for="fname">Nom :</label>
                                <input class="input__add-users" type="text" id="fname" name="firstname" placeholder="Your name..">
                              </div>
    
                              <hr class="label__separator">
        
                              <div class="label__container">
                                <label for="fname">Adresse mail :</label>
                                <input class="input__add-users" type="text" id="fname" name="firstname" placeholder="Your name..">
                              </div>
    
                              <div class="label__container">
                                <label for="fname">Confirmez votre adresse mail :</label>
                                <input class="input__add-users" type="text" id="fname" name="firstname" placeholder="Your name..">
                              </div>
        
                              <div class="label__container">
                                <label for="fname">Mot de passe :</label>
                                <input class="input__add-users" type="password" id="fname" name="firstname" placeholder="Your name..">
                              </div> 
        
                              <div class="label__container">
                                <label for="fname">Confirmez le mot de passe :</label>
                                <input class="input__add-users" type="password" id="fname" name="firstname" placeholder="Your name..">
                              </div>
    
                              <div class="conditions">
                                    <div>
                                        <label class="container--input">
                                            <input class="trash__checkbox" type="checkbox">
                                            <span class="checkmark"></span>
                                        </label>
                                        <p class="conditions__accept">J’accepte les Conditions d’Utilisation de Customotel</p>
                                    </div>
                                    <div>
                                        <label class="container--input">
                                            <input class="trash__checkbox" type="checkbox">
                                            <span class="checkmark"></span>
                                        </label>
                                        <p class="remember">Se souvenir de mon identifiant</p>
                                    </div>
                                </div>
                                <div class="create__account-btn">
                                    <a href=""><button>S'inscrire</button></a>
                                </div>
                            </form>
                          </div> 
                    </div>
                  </div>
            </div>
        </section>
    </div>
</template>

<script>

</script>

<style scoped>
@import '../assets/styles/reset.css';
@import '../assets/styles/sidebar.css';
@import '../assets/styles/style.css';
@import '../assets/styles/navbar.css';
@import '../assets/styles/pricing.css';
@import '../assets/styles/addUsers.css';
@import '../assets/styles/create--account.css';
</style>