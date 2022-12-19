import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';

import { INGREDIENTS } from '../../mocks/ingredientsArray';
import './pizza.css';


function Pizza() {
    const [data, setData] = useState(INGREDIENTS);
    const [total, setTotal] = useState(10);
    const [quantity, setQuantity] = useState(0);
    const [showWarning, setShowWarning] = useState(false);

    const onRemove = (ingredient) => {
        const newData = [...data];
        const index = newData.findIndex((element) => element === ingredient);
        newData[index].quantity -= 1;

        setTotal(total - newData[index].price);
        setQuantity(quantity - 1);
        setData(newData);
    }

    const onAdd = (ingredient) => {
        if (quantity + 1 > 15) {
            setShowWarning(true);
        } else {
            const newData = [...data];
            const index = newData.findIndex((element) => element === ingredient);
            newData[index].quantity += 1;
            setTotal(total + newData[index].price);
            setQuantity(quantity + 1);
            setData(newData);
        } 
    }

    return (
        <div className="picker">
            <div className="picker__intro">
                <h2 className="picker__headline">Seleciona ingredientes:</h2>
                <p>O número associado ao ingrediente refere-se a porções, não unidades. Os Molhos (excepto tomate e oregãos) são cobrados como ingrediente extra.</p>
            </div>
            <ul className="picker__ingredients">
                {data.map((ingredient) => (
                    <li key={ingredient.id} className="ingredient" data-amount={ingredient.quantity} data-price={ingredient.price}>
                        <div className="ingredient__column">
                            <img className="ingredient__image" src={ingredient.image} alt={ingredient.name} />
                            <span className="ingredient__counter">x{ingredient.quantity}</span>
                            <span className="ingredient__name">{ingredient.name}</span>
                        </div>
                        <div className="ingredient__column">
                            <button onClick={() => {
                                onRemove(ingredient);
                            }} className="ingredient__control ingredient__control--remove">
                                <FaMinus/>
                            </button>
                            <button onClick={() => {
                                onAdd(ingredient);
                            }} className="ingredient__control ingredient__control--add">
                                <FaPlus/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="picker__total">
                <span className="picker__price">{total.toFixed(2)}€</span>
            </p>
            {showWarning && (<div className="picker__warning">
                <p><b>Atenção.</b></p>
                <p>Superaste o número máximo de ingredientes.</p>
                <button className="picker__close" onClick={() => {
                    setShowWarning(false);
                }}>x</button>
            </div>)}
        </div>
    );
}

export default Pizza;
