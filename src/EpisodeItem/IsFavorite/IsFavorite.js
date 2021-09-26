import * as React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'
import { useCookies } from "react-cookie";
import './IsFavorite.css';


export default function IsFavorite(props) {

    let cookieName = 'episode_' + props.episodeId;
    let [cookies, setCookie] = useCookies([cookieName]);

    function toggleCookie() {

        console.log(cookies);
        console.log(cookieName);


        if ('false' === cookies[cookieName] || undefined === cookies[cookieName]) {
            setCookie(cookieName, true, {path: ''});
        } else {
            setCookie(cookieName, false, {path: ''});
        }
    };

    const starFilled = (
        <React.Fragment>
            <i className="fas fa-star"></i>
        </React.Fragment>
    );

    const starEmpty = (
        <React.Fragment>
            <i className="far fa-star"></i>
        </React.Fragment>
    );

    return (
      <div className="IsFavorite" onClick={toggleCookie}>
          {'true' === cookies[cookieName] ? starFilled : starEmpty}
      </div>
    );
};
    