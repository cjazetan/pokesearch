import React from 'react';

const Poketable = ({ pokemons, search }) => {
    
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemons.length > 0 ? (
            pokemons.filter((pokemon) => {
                return pokemon.name.toLowerCase().includes(search.toLowerCase()) || pokemon.type.some(type => type.toLowerCase().includes(search.toLowerCase())) ;
            })
            .map((pokemon) => (
              <tr key={pokemon.id}>
                <td className="px-4 py-2">{pokemon.id}</td>
                <td className="px-4 py-2">{pokemon.name}</td>
                <td className="px-4 py-2">{pokemon.type.join(',')}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No Pokemons found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Poketable;