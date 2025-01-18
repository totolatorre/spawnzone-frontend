import React from "react";

const Contatti = () =>{
    return (
        <div className=" min-h-screen py-16">
         
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-purple-600">Contatta gli Amministratori</h1>
            <p className="text-lg text-gray-600 mt-4">
              Hai domande o bisogno di assistenza? Qui puoi trovare tutti i modi per contattare il nostro team.
            </p>
          </div>
         
        
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-12">
             
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-purple-600">Gianvito Meliota</h3>
                <p className="text-gray-600 mt-2">Amministratore</p>
                <div className="mt-4">
                  <p className="text-gray-600">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:gianvitomeliota@example.com" className="text-blue-600 hover:underline">
                      gianvitomeliota@example.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <strong>Telefono:</strong> +39 376 845 8328
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
}

export default Contatti;