import { PiGreaterThan } from "react-icons/pi"
import data from "../assets/data/blog.json"

const NoiseBlogs = () => {
    return (
        <div className="blog-container">

            <div className="icon-and-heading-tag">
                <h1>Noise Blogs</h1>
                <a key="ramesh" href="https://www.gonoise.com/pages/stories" className="icon">View all <PiGreaterThan /></a>
            </div>

            <div className="content-blog">
                {
                    data.blog.map((i) => (
                        <div className="blog">
                            <div className="image-blog">
                                <a href={i.link}>
                                <img src={i.img} alt="" />

                                </a>
                            </div>
                            <div className="content">
                                <h1>{i.heading}</h1>
                                <p>{i.description}</p>
                            </div>
                            <div className="date">
                                <p>{i.date}</p>
                                <a href={i.link}>Read Now</a>
                            </div>
                        </div>
                    ))
                }
            </div>





        </div>
    )
}

export default NoiseBlogs