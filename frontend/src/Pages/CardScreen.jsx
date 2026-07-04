import { useDispatch, useSelector } from "react-redux"
import { addtoCard, removefromtecard } from "../slice/cardSlice"
import { Link } from "react-router-dom"
import { AiTwotoneDelete } from "react-icons/ai";

const CardScreen = () => {
   const dispatch = useDispatch();
  const card = useSelector((state) => state.card);

  const removefromCart =(id) =>{
    dispatch(removefromtecard(id))
  }

  return (
    <>
    <div className="container mx-auto px-4 mt-10">
      <h1 className="text-4xl">My Cart</h1>

      {card.cardItem.length === 0 ? (

        <div className="flex flex-col items-center justify-center mt-20">
          <h2 className="text-2xl text-gray-600 mb-4">
            Your cart is empty
          </h2>

          <Link
            to="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Go Shopping
          </Link>
        </div>

      ) : (

        card.cardItem.map((e) => (
          <div
            className="flex items-center gap-4 border rounded-md shadow-lg p-4 my-4"
            key={e._id}
          >
            <img
              src={e.image}
              alt={e.name}
              className="w-32 h-32 object-cover"
            />
            <h1 className="text-md font-bold">{e.name}</h1>
            <p className="text-sm font-sans">{e.description}</p>
            <p className="text-md font-bold">${e.price}</p>
             <div>
                <button className="bg-red-600 text-white ml-auto btn-circle px-2 py-1 rounded-md" onClick={()=>removefromCart(e._id)}>
                     <AiTwotoneDelete />   
                </button>
              
             </div>
            
          </div>
        ))

      )}
    </div>
     
     <div className="mt-10 text-center">
      <h2 className="text-xl font-bold">
                 Total: ${card.cardItem.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
      </h2>


       <button className="bg-black text-white  font-bold ml-auto btn-circle p-4 mt-4 mb-4">
        Proceed to CheckOut  
       </button>
     </div>
     </>
  )
}

export default CardScreen
