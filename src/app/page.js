"use client"
import Poketable from "@/components/Poketable";
import React, {useState} from 'react'




export default function Home() {
  const POKEMONS = [
    { id: 1, name: "bulbasaur", type: ["grass", "poison"] },
    { id: 2, name: "ivysaur", type: ["grass", "poison"] },
    { id: 3, name: "venusaur", type: ["poison"] },
    { id: 4, name: "charmander", type: ["fire"] },
    { id: 5, name: "charmeleon", type: ["fire"] },
    { id: 6, name: "charizard", type: ["fire"] },
    { id: 7, name: "squirtle", type: ["water"] },
    { id: 8, name: "wartortle", type: ["water"] },
    { id: 9, name: "blastoise", type: ["water"] },

  ];

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      
      <div className = "flex flex-col gap-x-4 items-center">
        <h1 className ="mt-12 text-2xl font-bold ">Pokemon</h1>
        <input className="border-solid border-2 border-gray-600" type="text" style={{ width: '260px' }} placeholder = "Search pokemon by name or type" onChange={(event) => setSearchQuery(event.target.value)} />
        <Poketable pokemons = {POKEMONS} search={searchQuery} />
      </div>
      
    </>
  );
}
