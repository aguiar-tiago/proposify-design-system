import React from 'react';
import Box from '../base/Box';
import ImageWrapper from '../base/Image';
import styled from 'styled-components';
import Badge from '../base/Badge';
import Emoji from '../base/Emoji';
import Text from '../base/Text';

const StyledCard = styled.div`
    background-color: white;
    display: inline-block;
    padding: 20px;
    position: relative;
    border-radius: 15px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
`


const Card = ({title, price, image, inStock}) => {
    return (
        <StyledCard>
            <Box justifyContent="space-between" mb="5px">
                <Emoji label="america" symbol="by Foo Bar 🇺🇸"/>
                <Badge>50% OFF</Badge>
            </Box>
            <ImageWrapper>
                <img src={image} alt="as"/> 
            </ImageWrapper>
            <Text textAlign="center" fontWeight="bold" fontSize={12}>{title}</Text>
            <Text textAlign="center" fontSize={14}>category</Text>
            <Box justifyContent="space-between" mt="10px">
                <Box flexDirection="column">
                    <Text textAlign="left" fontWeight="bold" fontSize={14}>€ {price}</Text>
                    <Text textAlign="left" fontWeight="bold" fontSize={10}>price</Text>
                </Box>
                <Box flexDirection="column">
                    {inStock && <Text textAlign="right" fontWeight="bold" fontSize={14}>In Stock!</Text>}
                    <Text fontSize={10}>Free shipping</Text>
                </Box>
            </Box>
        </StyledCard>
     );
}
 
export default Card;