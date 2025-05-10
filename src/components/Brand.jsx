import grid1 from "../assets/Images/grid1.jpg";
import grid2 from "../assets/Images/grid2.jpg";
import grid3 from "../assets/Images/grid3.jpg";
import grid4 from "../assets/Images/grid4.jpg";
import grid5 from "../assets/Images/grid5.jpg";
import grid6 from "../assets/Images/grid6.jpg";
const brandData = [
    {
        title: "MacBook Air",
        description: "Sky blue colour. Sky high performance with M4.",
        btn1: "Learn more",
        btn2: "Buy",
        image: grid1
    },
    {
        title: "WATCH",
        description: "Show your stipes with the new edition Sport Band",
        btn1: "Discover",
        btn2: "Buy",
        image: grid2
    },

    {
        title: "iPad Air",
        description: " Now supercharged by the M3 chip",
        btn1: "Learn more",
        btn2: "Buy",
        image: grid3
    },
    {
        title: "Mac Book Pro",
        description: "A work of Smart",
        btn1: "Learn more",
        btn2: "Buy",
        image: grid4
    },
    {
        title: "Air Pods 4",
        description: "Iconi. Now supersonic. Available with Active Noise cancellation",
        btn1: "Learn more",
        btn2: "Buy",
        image: grid5
    },
    {
        title: "Trade In",
        description: "Upgrade and save it's that easy",
        btn1: "Get your estimate",
        btn2: "Buy",
        image: grid6
    }
]

function Brand() {
    return (
        <div className="grid grid-cols-2 gap-5 p-4">
            {brandData.map((item, index) => (
                <div
                    key={index}
                    className="gridsection relative h-96 bg-cover bg-center rounded-xl shadow-md overflow-hidden"
                    style={{ backgroundImage: `url(${item.image})` }}
                >
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                        <h1 className={`text-3xl md:text-5xl font-bold ${index === 4 || index === 3 ? 'text-white' : 'text-black'}`}>
                            {item.title}
                        </h1>
                        <p className={`text-lg md:text-2xl my-2 ${index === 4 || index === 3 ? 'text-white' : 'text-black'}`}>
                            {item.description}
                        </p>
                        <div className="mt-4 flex gap-4 flex-wrap justify-center">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                                {item.btn1}
                            </button>
                            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition">
                                {item.btn2}
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Brand