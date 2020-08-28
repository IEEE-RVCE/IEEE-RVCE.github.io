import React from 'react';
import {Route, Link as RouterLink} from 'react-router-dom';
import {Breadcrumbs, Link, Typography, Container} from '@material-ui/core';


export default function Sitecrumb() {
    const LinkRouter = (props) => <Link {...props} component={RouterLink} />;

    // Must be developed further for the societies part
    const breadcrumbNameMap = {
        '/about': "About us",
        '/devs': "Developers",
        '/membership': "Membership",
    }

    return(
        <Container style={{paddingTop: "20px"}}>
            <Route>
                {({ location }) => {
                const pathnames = location.pathname.split('/').filter((x) => x);

                return (
                    <Breadcrumbs aria-label="breadcrumb">
                    <LinkRouter color="inherit" to="/">
                        Home
                    </LinkRouter>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                        return last ? (
                        <Typography color="textPrimary" key={to}>
                            {breadcrumbNameMap[to]}
                        </Typography>
                        ) : (
                        <LinkRouter color="inherit" to={to} key={to}>
                            {breadcrumbNameMap[to]}
                        </LinkRouter>
                        );
                    })}
                    </Breadcrumbs>
                );
                }}
            </Route>
        </Container>    
    )    
}