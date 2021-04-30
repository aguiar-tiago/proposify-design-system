import React, { useContext } from 'react';
import Search from '../components/complex/Search';
import Card from '../components/complex/Card';
import { SearchContext } from '../providers/products-provider';
import { Col, Row, Container } from '../components/layout';
import { Loading } from '../components/base';

const ProductList = () => {
    const [ products, , state ] = useContext(SearchContext);

    if(products.length === 0) return null;
    const { fetching } = state;

    if(fetching) return <Loading />;
    return (
        <Container>
            <Row>
                <Col desktop="12">
                <Search />
                </Col>
            </Row>
            <Row>
                {products.map((product, i) => (
                    <Col desktop="3" tablet="6" key={i}>
                        <Card
                            title={product.name} 
                            price={product.articles[0].price.regular_with_vat}
                            image={product.articles[0].cover.image}
                            inStock={product.articles[0].has_stock}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ProductList;