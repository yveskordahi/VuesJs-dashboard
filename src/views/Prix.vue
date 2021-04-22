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
        <div class="section__price">
            <div class="top__button">
                <div class="add__users__button">
                    <a href=""><button>Paiment annuel <br> <span class="span__reduction10">Obtenez 10% au total</span> </button></a>
                    <a class="button__paiment" href=""><button class="button__paiment-btn">Paiement mensuel</button></a>
                </div>
            </div>
            <div class="pricing">
                <div class="card--gold">
                    <div class="icon__choice">
                        <img src="../assets/img/gold.svg" alt="">
                        <div class="icon__choice__text">
                            <h2>Gold</h2>
                            <p>Un tout en un</p>
                        </div>
                    </div>
                    <div class="service__list">
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <hr class="card__separator">
                    <div class="price__choice">
                        <p><span class="price__choice__span">199€</span><span class="price__choice__span--month">/mois</span></p>
                    </div>
                    <div class="price__button">
                            <a href=""><button>Choisir</button></a>
                    </div>
                </div>
                <div class="card--silver">
                    <div class="icon__choice">
                        <img src="../assets/img/silver.svg" alt="">
                        <div class="icon__choice__text">
                            <h2>Silver</h2>
                            <p>Les meilleurs résultats</p>
                        </div>
                    </div>
                    <div class="service__list">
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <hr class="card__separator">
                    <div class="price__choice">
                        <p><span class="price__choice__span">120€</span><span class="price__choice__span--month">/mois</span></p>
                    </div>
                    <div class="price__button">
                            <a href=""><button>Choisir</button></a>
                    </div>
                </div>
                <div class="card--basic">
                    <div class="icon__choice">
                        <img src="../assets/img/basic.svg" alt="">
                        <div class="icon__choice__text">
                            <h2>Basic</h2>
                            <p>Pack starter</p>
                        </div>
                    </div>
                    <div class="service__list">
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                        <div class="service__list-flex">
                            <img class="service__list__img" src="../assets/img/checkbox_check.svg" alt="">
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <hr class="card__separator">
                    <div class="price__choice">
                        <p><span class="price__choice__span">70€</span><span class="price__choice__span--month">/mois</span></p>
                    </div>
                    <div class="price__button">
                            <a href=""><button>Choisir</button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
@import '../assets/styles/navbar.css';
@import '../assets/styles/style.css';
@import '../assets/styles/sidebar.css';
@import '../assets/styles/reset.css';
@import '../assets/styles/pricing.css';

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

.icon__choice {
    margin-top: 30px;
    display: flex;
    width: 197px;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
}

.icon__choice__text {
    display: flex;
    flex-direction: column;
    align-items: left;
}

.add__users__button .button__paiment-btn {
    background-color: #2F80ED;
    border: none;
    color: white;
    padding: 18px 35px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 10px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    cursor: pointer;
}

@media (max-width: 800px) {
    
.add__users__button .button__paiment-btn {
    background-color: #2F80ED;
    border: none;
    color: white;
    padding: 16px 29px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 10px;
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    cursor: pointer;
    }
}

</style>