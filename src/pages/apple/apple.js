import React from "react";

import './apple.css'

function Apple(props) {
    return (
        <section class="exercise container">
            <div class="exercise__box">
                <span class="material-symbols-outlined">
                    inventory_2
                </span>
                <h5 class="exercise__title">Free delivery</h5>
                <p class="exercise__text">And free returns. See checkout for delivery dates.</p>
                <a class="exercise__link" href="#" >Learn More ></a>
            </div>
            <div class="exercise__box">
                <span class="material-symbols-outlined">
                    paid
                </span>
                <h5 class="exercise__title">Pay monthly at 0% APR</h5>
                <p class="exercise__text">You can pay over time when you choose to check out with Apple Card Monthly Installments.*</p>
                <a class="exercise__link" href="#" >Learn More ></a>
            </div>
            <div class="exercise__box">
                <span class="material-symbols-outlined">
                    maps_ugc
                </span>
                <h5 class="exercise__title">Get help buying</h5>
                <p class="exercise__text">Have a question? Call a Specialist or chat online. Call 1‑800-MY‑APPLE.</p>
                <a class="exercise__link" href="#" >Learn More ></a>
            </div>
        </section>
    )
}

export default Apple;
