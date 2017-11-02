import faker from 'faker'

const products = []

for (var i = 0; i < 25; i++) {
    products.push({
        id: i,
        title: faker.commerce.productName(),
        product: faker.commerce.product(),
        description: faker.lorem.sentence(),
        price: faker.commerce.price(),
        user: faker.internet.userName(),
        avatar: faker.internet.avatar(),
        imageUrl: faker.image.image(),
        votes: 100
    })
}

export default {
    products: products
}


