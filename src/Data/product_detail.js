import tshirtImg from '../assets/images/5Years-t-shirt/cute.jpg';
export default {
    ProductData : [
        {
        _productId:'1',
        title: 'cute T-shirt new',
        price: 40,
        brand: 'Puma',
        rating: 4.5,
        numReviews: 10,
        description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
        colorOptions: [
            {
                styleName: 'Black Strap',
                imageUrl: tshirtImg,
            },
            {
                styleName: 'Red Strap',
                imageUrl: 'https://imgur.com/PTgQlim.png'
            },
            {
                styleName: 'Blue Strap',
                imageUrl: 'https://imgur.com/Mplj1YR.png'
            },
            {
                styleName: 'Purple Strap',
                imageUrl: 'https://imgur.com/xSIK4M8.png'
            },
        ],
        featureList: [
            "Time", "Heart Rate"
        ]
    }
]
}