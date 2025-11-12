import { useEffect } from "react";
import { CalendarMinus } from "lucide-react"

import { useState } from "react";
import axios from "axios";

function Projets() {
    const [projets, setProjets] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/projets')
        .then(response => setProjets(response.data)
        .catch(ErrorEvent => console.error(error)))
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Mes projets</h1>
            <ul className="space-y-2">
                {projets.map((projet) => (
                    <li key={projet.id} className="p-4 bg-gray-100 rounded-lg">
                        <h2 className="font-semibold">{projet.nom}</h2>
                        <p>{projet.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Projets;