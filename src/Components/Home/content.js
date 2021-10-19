import { Backdrop } from "@material-ui/core";
import React from "react";
import "../../css/content.css"
import back from "../../images/banner-add.jpg"
import back1 from "../../images/about-image-3.jpg"
import back2 from "../../images/blog-2.jpg"




export default function Content() {
    return (
        <div className="container">
            <div className="footer">
                <div>
                    <ul>
                        <li>
                            <h1>FEATURED VIDEO</h1>
                            <a href="blog.html"><img src={back} alt /><span /></a>
                        </li>
                        <li>
                            <h1>LATEST BLOG</h1>
                            <ul>
                                <li>
                                    <a href="blog.html"><img src={back1} alt /></a>
                                    <h1>FINDING PLANET X-123</h1>
                                    <span>FEBRUARY 6, 2023</span>
                                    <a href="blog.html" className="more">Read More</a>
                                </li>
                                <li>
                                    <a href="blog.html"><img src={back2} alt /></a>
                                    <h1>NEW SATELLITE DISH</h1>
                                    <span>FEBRUARY 3, 2023</span>
                                    <a href="blog.html" className="more">Read More</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    );
}
