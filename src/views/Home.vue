<template>
    <div>
        <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <font-awesome-icon :icon="['fas', 'bars']" />
            </label>
            <a href="#"><img src="../assets/img/Logo_2.svg" class="logo"></a>
            <ul>
                <li><router-link class="" to="/Prix"><a href="">Prix</a></router-link></li>
                <li><router-link class="" to="/Connexion"><a href="">Connexion</a></router-link></li>
                <li><router-link class="" to="/Inscription"><a class="sign__up__btn" href="">Inscription</a></router-link></li>
            </ul>
        </nav>
        <section>
            <div class="container">
                <div class="block__text">
                    <h1>Système de notation entre <br> hôtels et particuliers</h1>
                    <p>Fidélisez votre clientèle grâce à notre service de <br> notation et découvrez les meilleurs clients.</p>
                    <div class="block__text__button">
                        <div class="add__users__button">
                            <a href=""><button>Démarrer maintenant</button></a>
                            <a class="button__contact" href="">Contacter un expert</a>
                        </div>
                    </div>
                </div>
                <div  class="block__img">
                    <img src="../assets/img/homepage-img.svg" alt="Image de la page d'accueil">
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

.container {
    display: flex;
    position: relative;
    padding-left: 15px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
}

.add__users__button button {
    background-color: #2F80ED;
    border: none;
    color: white;
    padding: 9px 35px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 10px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    cursor: pointer;
}
</style>