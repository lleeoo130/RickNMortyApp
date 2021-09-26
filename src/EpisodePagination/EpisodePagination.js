import * as React from 'react';
import Button from "@material-ui/core/Button";

export default function EpisodePagination(props) {
    const info = props.info;

    const prevPage = info.prev;
    const nextPage = info.next;
  
    function loadPage(page) {
        props.loadPage(page);
    };
  
    return (
        <div className="EpisodePagination">
            <Button disabled={!prevPage} onClick={() => loadPage(prevPage)}>Previous</Button>
            <Button disabled={!nextPage} onClick={() => loadPage(nextPage)}>Next</Button>
        </div>
    );
};
    