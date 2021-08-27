import React from "react";
import {Route, Switch} from "react-router";
import Home from "../home/Home";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className="container">
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </>
    );
};

export default Layout;
