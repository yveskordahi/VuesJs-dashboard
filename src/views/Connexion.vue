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
                    <div class="home__content__login">
                        <div class="form__container">
                            <form action="">
        
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
@import '../assets/styles/connexion/1reset.css';
@import '../assets/styles/connexion/1addUsers.css';
@import '../assets/styles/connexion/1create--account.css';
@import '../assets/styles/connexion/1login.css';

body {
    background-color: #F6FAFF;
}

section {
    height: 100vh;
    background-color: #F6FAFF;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>