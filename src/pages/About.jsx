import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-purple-600 mb-4">
            Chi siamo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Benvenuti su <span className="font-bold text-purple-500">SpawnPoint</span>, il nostro angolo dedicato a tutti gli appassionati di videogiochi! Siamo un gruppo di giovani gamer che hanno trasformato la propria passione in un progetto per condividere il meglio del mondo del gaming.
          </p>
        </div>
      </div>
    
    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-purple-500 mb-3">
      Perché scegliere noi?
    </h2>
    <ul className="list-disc list-inside text-gray-600">
      <li>Passione autentica: siamo gamer come te.</li>
      <li>Qualità e convenienza nei prodotti.</li>
      <li>Supporto amichevole e dedicato.</li>
      <li>Community appassionata e inclusiva.</li>
    </ul>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-purple-500 mb-3">
      Unisciti a noi
    </h2>
    <p className="text-gray-600">
      Seguici sui social, scopri le ultime novità e diventa parte della nostra famiglia di appassionati di videogiochi! 🎮
    </p>
  </div>
</div>


  );
};

export default About;