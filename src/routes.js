import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AnimatedIntro from 'containers/AnimatedIntro'
import Menu from 'containers/Menu'
import paths from 'constants/paths'
import BlogList from 'containers/BlogList'
import Blog from 'containers/Blogs'
import Places from 'containers/Places'
import Whoami from 'containers/Whoami'
import NotFound from 'containers/NotFound'
import Layout from 'components/common/Layout'

const routes = [
    { path: paths.ROOT, exact: true, component: AnimatedIntro },
    { path: paths.MENU, component: Menu },
    { path: paths.BLOGS_PATH, component: BlogList },
    { path: paths.BLOG, component: Blog },
    { path: paths.PLACES, component: Places },
    { path: paths.WHOAMI, component: Whoami },
    { component: NotFound }
]

const Routes = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    {routes.map(props => <Route {...props} />)}
                </Switch>
            </Layout>
        </Router>
    )
}

export default Routes
