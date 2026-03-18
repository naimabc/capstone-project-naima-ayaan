import {useState} from "react";

function Archetype({type, description}) {
const [showMore, setShowMore] = useState(false);
    return (
        <div class="text-center border rounded-xl p-10 m-20 max-w-xl mx-auto">
            <h1 class="text-3xl">The {type}:</h1>
            <p>{description}</p>
            <button
                onClick={() => setShowMore(!showMore)} className="mt-4 text-sm hover:text-blue-700 font-semibold">
                {showMore ? "▲ Show Less" : "▼ Show More"}
            </button>

            {showMore && ( 
                <div className="mt-4 pt-4 border-t border-gray-200 text-left">
                    <p>more info</p>
                </div>

            )}
       </div>
    );
}
export default Archetype;