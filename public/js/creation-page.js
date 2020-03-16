/**
 * File: creation-page.js
 * File Created: Friday, 6th March 2020 2:36:00 pm
 * Author: Paul Mazeau (paul.mazeau@gridpocket.com)
 * -----
 * Last Modified: Friday, 13th March 2020 3:30:15 pm
 * Modified By: Paul Mazeau (paul.mazeau@gridpocket.com>)
 * -----
 * GridPocket SAS Copyright (C) 2020 All Rights Reserved
 * This source is property of GridPocket SAS.
 * Please email contact@gridpocket.com for more information.
 */


document.addEventListener("DOMContentLoaded", function () {

    const leftMainContainer = document.querySelector('.left-container');
    const btnReturn = document.querySelector('.bubble');
    
    let currentStep = -1;

    const checkPageStep = (step) => {

        switch (step) {
            case 1:
                leftMainContainer.innerHTML = `
                    <div class="title">Parle nous de <span class="highlight-text">toi</span>.</div>
                    <div class="description">2 minutes top chrono pour créer ton profil</div>
                    <div class="description">On a besoin d’avoir un petit peu d’informations sur toi pour pouvoir te trouver
                    LA personne qu’il te faut. </div>
                    
                    <div class="cta cta-landing">Je lance le chrono !</div>
                `
                break;
            case 2:
                leftMainContainer.innerHTML = `
                    
                `
            break;
            case 0:
                leftMainContainer.innerHTML = `
                    <div class="title">Trouve ton <span class="highlight-text">Crush</span>.</div>
                    <div class="description">Quoi de plus facile que d’appuyer sur un bouton pour trouver
                        la personne qui nous correspond le plus ? </div>
                    <div class="description">Crush c’est une application gratuite, et grâce à elle tu vas trouver 
                        la personne parfaite à tes yeux.  </div>
                    <div class="rules-container">
                        <div class="rule">
                            <div class="round"></div>
                            <div class="rule-title">5 minutes pour répondre au questionnaire</div>
                        </div>
                        <div class="rule">
                            <div class="round"></div>
                            <div class="rule-title">Crée ton profil</div>
                        </div>
                        <div class="rule">
                            <div class="round"></div>
                            <div class="rule-title">Trouve ton crush ! </div>
                        </div>
                    </div>
                    <div class="cta cta-landing">C'est parti !</div>
                    `
                break;
        }
        
        let btn = document.querySelector('.cta-landing');
        
        btn.addEventListener('click', () => {
            nextStep();
        })
    }


    const nextStep = () => {
        console.log(currentStep)
        currentStep++;
        checkPageStep(currentStep);
    }
    
    checkPageStep(currentStep);

});