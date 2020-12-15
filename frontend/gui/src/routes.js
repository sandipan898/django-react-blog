import React from 'react';
import { Route } from 'react-router-dom';
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailedView';

const BaseRouter = () => (
    <div>
        <Route exact path="/" component={ArticleList} />
        <Route exact path="/:articleId" component={ArticleDetail} />
    </div>
);

export default BaseRouter;