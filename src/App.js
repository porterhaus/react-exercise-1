import React, { Component } from 'react'
import {Container, Header, Item, Icon, Label} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.css'
import Seed from './seed'

class Product extends Component {
  handleUpVote = () => (
    this.props.onVote(this.props.id)
  )

  render() {
    return (
      <Item>
        <Item.Image src={this.props.imageUrl} />
        <Item.Content verticalAlign="middle">
          <Item.Header><Icon name='caret up' size='big' onClick={this.handleUpVote} /> {this.props.votes}</Item.Header>
          <Item.Meta as='h2'>{this.props.title}</Item.Meta>
          <Item.Meta>${this.props.price}</Item.Meta>
          <Item.Description>
            {this.props.description}
          </Item.Description>
          <br/>
          <Label as='a' image>
            <img src={this.props.avatar} />
            {this.props.user}
          </Label>
        </Item.Content>
      </Item>
    );
  }
}

class ProductList extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.setState({ products: Seed.products})
  }

  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        })
      } else {
        return product
      }
    })
    this.setState({
      products: nextProducts
    })
  }

  render() {
    const products = this.state.products.sort((a,b) => (
      b.votes - a.votes
    ))
    
    const sorted_products = products.map((product) => {
      return (
        <Product 
          key={'product-' + product.id}
          id={product.id}
          title={product.title}
          product={product.product}
          description={product.description}
          price={product.price}
          user={product.user}
          avatar={product.avatar}
          imageUrl={product.imageUrl}
          votes={product.votes}
          onVote={this.handleProductUpVote} />
      )
    })

    return (
      <Item.Group divided>
        {sorted_products}
      </Item.Group>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center" dividing>Popular Products</Header>
        <ProductList />
        <br />
      </Container>
    );
  }
}

export default App
