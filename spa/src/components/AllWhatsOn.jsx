import React from 'react';
import FilmModel from './Film.model'
import WhatsOn from './WhatsOn';

const AllWhatsOn = ({ data }) => {

    const films = data.filmData.films.map(i => {
        const film = new FilmModel(i.title, i.agecert,
            i.synopsis,
            i.showtimes[0],
            i.showtimes[1],
            i.showtimes[2], i.id, i.whatsOnSrcset.medium);
        return <WhatsOn film={film} key={film.id} />
    });

    return (
        <div> {films}</div>
    );
}

export default AllWhatsOn;