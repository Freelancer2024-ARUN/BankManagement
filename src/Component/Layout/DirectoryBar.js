import React from 'react';
import ReactDOM from "react-router-dom";

function DirectoryBar() {
    return (
        <div className="DirectoryBar">
            <div class="container-fluid bg-info-subtle">
                <nav aria-label="breadcrumb bg-light">
                    <ol class="breadcrumb fs-5">
                        <li class="breadcrumb-item"><a href="Home"><i class="fa fa-home"
                            aria-hidden="true"></i>&nbsp;Home</a></li>
                            
                    </ol>
                </nav>
            </div>
        </div>
    );
}
export default DirectoryBar;
