import React from 'react';



import CollectionPreview from './../collection-preview/collection-preview.component';
import {CollectionOverviewContainer} from './collections-overview.styles.jsx';

const CollectionOverview = ({ collections }) => (
    <CollectionOverviewContainer>
        {
            collections.map(({id,...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}>
                </CollectionPreview>
            ))
        }
    </CollectionOverviewContainer>
);

export default CollectionOverview;