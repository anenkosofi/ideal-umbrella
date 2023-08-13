import React, {FC} from 'react';
import {FaArrowRight} from "react-icons/fa";

import ProductItem from "@components/ProductItem";

const items = [
    {
        id: '701',
        name: 'Calabrese Broccoli',
        image: 'https://s3-alpha-sig.figma.com/img/f33f/1019/a5d402a28ba1071c21b355c7cf5ae3fd?Expires=1692576000&Signature=oXxQ2osyoO2ErHilVyo753HqhZwJEMknMR--lMC-boBWk4g3z6AB2tRxafzqEpUSIpY71glq2cd0xHvKuhLstiuv3oUyBwDclPJVcXrm7AlL6Et40GA124p9eZFYdLpxfQw1n8I2vQWmptlyUEZfBYrSoS9o8Krc57Np0i0kMnaXOtwh2HJstidlYdIjLlQ7Hs~yKiLtmPKl0~unSu1RrQE-XCRo6vq1a~RD2J6IrNB7JYax8hze7gBfgtBa00bKwh1T6DiMa6JLLKHaw1CeWPL3sL~Q98MCapnEUfkUhuMOePR-~aSsgZ7ob-GtlJ897u02ToeSBHxxLX2KxwyzuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        category: 'Vegetable',
        description: {
            s: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
            l: 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
        },
        rating: 5,
        price: 20.00,
        discount: 45,
        additional: 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',
    },
    {
        id: '702',
        name: 'Calabrese Broccoli',
        image: 'https://s3-alpha-sig.figma.com/img/f33f/1019/a5d402a28ba1071c21b355c7cf5ae3fd?Expires=1692576000&Signature=oXxQ2osyoO2ErHilVyo753HqhZwJEMknMR--lMC-boBWk4g3z6AB2tRxafzqEpUSIpY71glq2cd0xHvKuhLstiuv3oUyBwDclPJVcXrm7AlL6Et40GA124p9eZFYdLpxfQw1n8I2vQWmptlyUEZfBYrSoS9o8Krc57Np0i0kMnaXOtwh2HJstidlYdIjLlQ7Hs~yKiLtmPKl0~unSu1RrQE-XCRo6vq1a~RD2J6IrNB7JYax8hze7gBfgtBa00bKwh1T6DiMa6JLLKHaw1CeWPL3sL~Q98MCapnEUfkUhuMOePR-~aSsgZ7ob-GtlJ897u02ToeSBHxxLX2KxwyzuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        category: 'Vegetable',
        description: {
            s: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
            l: 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
        },
        rating: 5,
        price: 20.00,
        discount: 45,
        additional: 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',
    },
    {
        id: '703',
        name: 'Calabrese Broccoli',
        image: 'https://s3-alpha-sig.figma.com/img/f33f/1019/a5d402a28ba1071c21b355c7cf5ae3fd?Expires=1692576000&Signature=oXxQ2osyoO2ErHilVyo753HqhZwJEMknMR--lMC-boBWk4g3z6AB2tRxafzqEpUSIpY71glq2cd0xHvKuhLstiuv3oUyBwDclPJVcXrm7AlL6Et40GA124p9eZFYdLpxfQw1n8I2vQWmptlyUEZfBYrSoS9o8Krc57Np0i0kMnaXOtwh2HJstidlYdIjLlQ7Hs~yKiLtmPKl0~unSu1RrQE-XCRo6vq1a~RD2J6IrNB7JYax8hze7gBfgtBa00bKwh1T6DiMa6JLLKHaw1CeWPL3sL~Q98MCapnEUfkUhuMOePR-~aSsgZ7ob-GtlJ897u02ToeSBHxxLX2KxwyzuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        category: 'Vegetable',
        description: {
            s: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
            l: 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
        },
        rating: 5,
        price: 20.00,
        discount: 45,
        additional: 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',
    },
    {
        id: '704',
        name: 'Calabrese Broccoli',
        image: 'https://s3-alpha-sig.figma.com/img/f33f/1019/a5d402a28ba1071c21b355c7cf5ae3fd?Expires=1692576000&Signature=oXxQ2osyoO2ErHilVyo753HqhZwJEMknMR--lMC-boBWk4g3z6AB2tRxafzqEpUSIpY71glq2cd0xHvKuhLstiuv3oUyBwDclPJVcXrm7AlL6Et40GA124p9eZFYdLpxfQw1n8I2vQWmptlyUEZfBYrSoS9o8Krc57Np0i0kMnaXOtwh2HJstidlYdIjLlQ7Hs~yKiLtmPKl0~unSu1RrQE-XCRo6vq1a~RD2J6IrNB7JYax8hze7gBfgtBa00bKwh1T6DiMa6JLLKHaw1CeWPL3sL~Q98MCapnEUfkUhuMOePR-~aSsgZ7ob-GtlJ897u02ToeSBHxxLX2KxwyzuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        category: 'Vegetable',
        description: {
            s: 'Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
            l: 'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.',
        },
        rating: 5,
        price: 20.00,
        discount: 45,
        additional: 'A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',
    }
]

const ProductList: FC = () => {
    return (
            <ul className="products__list">{items.map(item => <ProductItem key={item.id} product={item} />)}</ul>
    )
}

export default ProductList;
