import React from 'react';

const WhatsOn = (film, key) => {


    return (
        <>
            <table id={key}>
                <tbody>
                    <tr>
                        <td width="30%">
                            <img src={`../assets/${film.film.imgPath}`} width="50%" />
                        </td>
                        <td width="70%" >
                            <h1>{film.film.title}</h1>
                            <p>{film.film.rating}</p>
                            <p>{film.film.description}</p>
                        </td>
                    </tr>
                    <tr>
                        <td width="25%">{film.film.time1}</td>
                        <td width="25%">{film.film.time2}</td>
                        <td width="25%">{film.film.time3}</td>
                        <td width="25%"><button>Book now</button></td>

                    </tr>
                </tbody>
            </table>



        </>
    );
}

export default WhatsOn