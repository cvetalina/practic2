import { Link } from "react-router-dom"

const MenuNew = (props) => {
    return (
        <div>
            {
                props.menu.map((ele, index) => {
                    return <div key={index} className="menunew">
                        <Link to={'../' + ele}>
                            - {ele}
                        </Link>
                    </div>
                })
            }
        </div>
    )
}


export default MenuNew