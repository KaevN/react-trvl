import React from 'react';
import CardItem from './CardItem';
import amazonImg from '../../img/img-9.jpg';
import football from '../../img/img-4.jpg';
import bali from '../../img/img-2.jpg';
import ocean from '../../img/img-3.jpg';
import camel from '../../img/img-8.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Посмотрите эти ЭПИЧЕСКИЕ направления!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={amazonImg}
                            text='Исследуй скрытый водопад глубоко в джунглях Амазонки'
                            label='Приключение'
                            path='/services'
                        />
                        <CardItem
                            src={bali}
                            text='Путешествуй по островам Бали в частном круизе'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={ocean}
                            text='Отправьтесь в плавание в Атлантическом океане, посетив неизведанные воды'
                            label='Тайна'
                            path='/services'
                        />
                        <CardItem
                            src={football}
                            text='Сыграй в футбол на вершине Гималайских гор'
                            label='Приключение'
                            path='/products'
                        />
                        <CardItem
                            src={camel}
                            text='Прокатитесь по пустыне Сахара в рамках экскурсии на верблюдах'
                            label='Адреналин'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
