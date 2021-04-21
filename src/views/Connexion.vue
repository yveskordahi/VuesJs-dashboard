<template>
    <div>
        <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </label>
            <router-link class="" to="/Home"><a href=""><img src="../assets/img/Logo_2.svg" class="logo"></a></router-link>
            <ul>
                <li><router-link class="" to="/Prix"><a href="">Prix</a></router-link></li>
                <li><router-link class="" to="/Connexion"><a href="">Connexion</a></router-link></li>
                <li><router-link class="" to="/Inscription"><a class="sign__up__btn" href="">Inscription</a></router-link></li>
            </ul>
        </nav>
        <section>
            <div class="container--create__account">
                <div class="home__add-users">
                    <div class="home__content__login">
                        <div class="form__container">
                            <form action="action_page.php">
        
                                <div class="form__title">
                                    <p>Consultez les notations et emmettez des avis</p>
                                    <h2>Connectez-vous</h2>
                                </div>
                            
                            <div class="label__container">
        
                              <div class="label__container">
                                <label for="fname">Adresse mail :</label>
                                <input class="input__add-users" type="text" id="fname" name="firstname" placeholder="Your name..">
                              </div>
        
                              <div class="label__container">
                                <label for="fname">Mot de passe :</label>
                                <input class="input__add-users" type="password" id="fname" name="firstname" placeholder="Your name..">
                              </div>

                              <div class="block__login-btn">
                                <a class="button__forget__login" href="">Mot de passe oublié ?</a>
                                <router-link class="" to="/Dashboard"><a href="dashboard.html"><button class="btn-login">Se connecter</button></a></router-link>
                              </div>
    
                              <hr class="login--separator">
    
                              <p class="not__register--text">Vous n'avez pas de compte ? <router-link class="" to="/Inscription"><a class="button__not-register" href="create-account.html">Créez en un !</a></router-link></p>
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
@import '../assets/styles/login.css';
</style>