import React from 'react';

import CollectionItem from '../../collection-item/collection-item.component';

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './collection.styles'

const CollectionPage = ({ collection }) => {
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

export default CollectionPage;