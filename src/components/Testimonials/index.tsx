import React, { FC } from 'react';

import customer from '@assets/customer.jpg';
import Container from '@components/Container';
import Rating from "@components/Rating";

import './Testimonials.scss';

const items = [
    {
        id: '501',
        image: customer,
        rating: 5,
        comment: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
        author: 'Sara Taylor',
        role: 'Consumer',
    },
];

const testimonials = [
    {
        id: '601',
        number: '100%',
        description: 'Organic',
    },
    {
        id: '602',
        number: '285',
        description: 'Active Product',
    },
    {
        id: '603',
        number: '350+',
        description: 'Organic Orchads',
    },
    {
        id: '604',
        number: '25+',
        description: 'Years of Farming',
    },
];

const Testimonials: FC = () => {
    return (
        <section className="testimonials">
         <Container>
             <div className="testimonials__container">
                 <div className="testimonials__upper-content">
                     <p className="testimonials__pre-heading">Testimonial</p>
                     <h2 className="testimonials__heading">What Our Customer Saying?</h2>
                     <div className="testimonials__carousel">
                         <ul className="testimonials__list">
                             {items.map(({id, image, rating, comment, author, role}) =>
                                 <li key={id} className="testimonials__item">
                                     <img src={image} alt={author} className="testimonials__pic"/>
                                     <Rating rating={rating} />
                                     <p className="testimonials__comment">{comment}</p>
                                     <p className="testimonials__author">{author}</p>
                                     <p className="testimonials__role">{role}</p>
                                 </li>)}
                         </ul>
                         <ul className="testimonials__control">
                             <li><button type="button" className="testimonials__button"></button></li>
                             <li><button type="button" className="testimonials__button testimonials__button_active"></button></li>
                             <li><button type="button" className="testimonials__button"></button></li>
                         </ul>
                     </div>
                 </div>
                 <div className="testimonials__bottom-content">
                     <ul className="testimonials__content-list">
                         {testimonials.map(({id, number, description}) =>
                             <li key={id} className="testimonials__content-item">
                                 <div>
                                     <span className="testimonials__content-item_large">{number}</span>
                                     <span>{description}</span>
                                 </div>
                             </li>)}
                     </ul>
                 </div>
             </div>
         </Container>
        </section>
    );
};

export default Testimonials;
