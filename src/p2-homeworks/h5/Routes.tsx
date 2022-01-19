import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
// import HW1 from "../h1/HW1";
// import HW2 from "../h2/HW2";
// import HW3 from "../h3/HW3";
// import HW4 from "../h4/HW4";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
}

function RoutesTo() {
    return (
        <div>
            <Routes>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
                <Route path="/" element={<Navigate replace to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                {/*<Route path="/hw1"  element={<HW1/>}/>*/}
                {/*<Route path="/hw2"  element={<HW2/>}/>*/}
                {/*<Route path="/hw3"  element={<HW3/>}/>*/}
                {/*<Route path="/hw4"  element={<HW4/>}/>*/}
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route element={<Error404/>}/>
            </Routes>

        </div>
    );
}

export default RoutesTo;
