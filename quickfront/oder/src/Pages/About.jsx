import { useData } from "../Hooks/useData";
import { url } from "../Utils/url.js";
import NavBar from "../Components/NavBar.jsx";

const About = () => {
    const { data } = useData(url);

    return (
        <>
            <NavBar />

            {/* GRID CONTAINER */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                
                {data.map((u) => (
                    <div
                        key={u.id}
                        className="bg-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                    >
                        {/* HEADER */}
                        <div className="flex items-center gap-4">
                            
                            {/* AVATAR */}
                            <div className="bg-neutral-400 text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg hover:bg-neutral-600 transition-colors duration-300">
                                {u.name?.charAt(0)}
                            </div>

                            {/* NAME */}
                            <div>
                                <p className="text-white font-bold text-lg">
                                    {u.name}
                                </p>

                                {/* ID */}
                                <p className="text-neutral-400 text-sm">
                                    ID: {u.id}
                                </p>
                            </div>
                        </div>

                        {/* INFO SECTION */}
                        <div className="mt-4 space-y-2 text-sm text-neutral-300">
                            <p>
                                📧 <span className="text-white">{u.email}</span>
                            </p>

                            <p>
                                📱 <span className="text-white">{u.numero}</span>
                            </p>

                            <p>
                                🔑 <span className="text-white">{u.chave}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default About;