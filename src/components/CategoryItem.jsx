import data from "../assets/data/category.json"
// import two from "../assets/Image/category-image/2._Wireless_Earbuds.png"
import two from "../"
import { useFilterContext } from "../context/filter_context";

const CategoryItem = () => {


 






    return (
        <div className="category-container">
            
            {
    data.categories.map((i) => (
        <div className="col-2">
            <a href="/category-card-details-item" id={i.id}>
                <img src={`${i.image}`} alt="category-image"  />
                {/* <img src={two} alt="" /> */}
                <p>{i.name}</p>
            </a>
        </div>
    ))
}
        </div>
    )
}

export default CategoryItem



