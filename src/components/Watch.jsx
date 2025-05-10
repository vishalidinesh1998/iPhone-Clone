import { FaApple, FaSearch, FaShoppingCart } from "react-icons/fa";
function Watch(){
    return(
        <div className="watchsection mt-4 flex flex-col justify-start gap-3 items-center mx-auto text-center mb-4 md: ">
            <div className="absolute  p-8 sm:p-10 md:p-12 max-w-xl">
            <div className="flex items-center justify-center">   
            < FaApple className="text-5xl"/>
            <h1 className="text-5xl font-bold">WATCH</h1>
            </div> 
            <p className="text-3xl">Live heathier. Train Better. Stay Connected</p>
            <button className="bg-blue-600 text-white m-2 px-6 py-2 rounded-full font-medium transition border border-blue-600 hover:bg-white hover:text-black ">Learn more</button> 
        <button className="px-6 py-2 rounded-full font-medium transition border border-blue-600 text-blue-600 hover:bg-white hover:text-black ">Buy Watch</button>
            </div>
        </div>
    )
}
export default Watch