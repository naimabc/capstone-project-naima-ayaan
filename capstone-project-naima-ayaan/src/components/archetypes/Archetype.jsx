
import {useState} from "react";

function Archetype({archName, subtitle, info, image}) {
const [showMore, setShowMore] = useState(false);
    return (
        <div class="text-center border rounded-xl p-10 m-10 max-w-3xl mx-auto">
            <h2 class="text-2xl">{archName}:</h2>
            <br></br>
            <h5 class="text-lg">{subtitle}</h5>
            <img src={image}></img>
            <br></br>

            <button
                onClick={() => setShowMore(!showMore)} className="mt-4 text-sm hover:text-blue-700 font-semibold">
                {showMore ? "▲ Show Less" : "▼ Show More"}
            </button>

            {showMore && ( 
                <div className="mt-4 pt-4 border-t border-gray-200 text-left">
                    <p>{info}</p>
                </div>

            )}
       </div>
    );
}
export default Archetype;
