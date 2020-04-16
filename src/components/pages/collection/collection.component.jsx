import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../collection-item/collection-item.component';
import { selectCollection } from './../../../redux/shop/shop.selector';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './collection.styles'

const CollectionPage = ({ collection }) => {

    console.log("");

    const {title, items} = collection;

    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    )
};

const mapStateToProps = (state,ownProps) => ({
    collection:selectCollection(ownProps.match.params.id)(state)
});

export default connect(mapStateToProps)(CollectionPage);