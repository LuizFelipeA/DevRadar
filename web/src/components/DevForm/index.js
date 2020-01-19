import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }){

    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(
        //   (position) => {
        //     console.log(position);
        //   },
        //   (err) => {
        //     console.log(err);
        //   },
        //   {
        //     timeout: 30000,
        //   }
        // )
        setLatitude('-23.4738763');
        setLongitude('-46.8675339');
    
    }, []);

    async function hadleSubmit(e){
        //Evita comportamento padrão do formulário de redirecionamento para outra tela
        e.preventDefault();

        await onSubmit({github_username,techs,latitude,longitude});

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={hadleSubmit}>
            <div className="input-block">
            <label htmlFor="github_username">Usuário GitHub</label>
            <input
            name="github_username"
            id="github_username"
            required
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
            />
            </div>
            
            <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
            name="techs"
            id="techs"
            required
            value={techs}
            onChange={e => setTechs(e.target.value)}
            />
            </div>

            <div className="input-group">
            <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                />
            </div>
            </div>

            <button type="submit">Salvar</button>
        </form>
    )
}

export default DevForm;