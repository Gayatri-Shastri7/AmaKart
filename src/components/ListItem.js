// 3]
// import ListItem from "./components/ListItem" (in App.js)
// 1]
import AddToCardIcon from "../assets/icons/add_card.svg"

const ListItem = () => {
    return(
        
        <div className={"item-card"}>
            <img className={"img-fluid"} src="/assets/placeholder.jpg" alt="Some other text"/>
            <div className={"item-card__information"}>
            <div className={"pricing"}>

            <div>
                <span>
                    $340
                </span>
                <small>
                    <strike>
                        $450
                    </strike>
                </small>
            </div>
            <div>
                <button>
                    <span>
                        Add to Card
                    </span>
                    <img src={AddToCardIcon} alt="Cart Item" />
                </button>
                <h3>
                    Title of the Item
                </h3>
            </div>
        </div>
        </div>
        </div>
    ) 
}
// 2]
export default ListItem