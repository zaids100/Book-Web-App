import React from 'react';

function Card({ book, onSelect, setFavData, favData }) {
    const thumbnailUrl = book.volumeInfo?.imageLinks?.thumbnail || book.thumbnailUrl || 'https://via.placeholder.com/150';

    const addToFav = () => {
        const newData = {
            thumbnailUrl: thumbnailUrl,
            title: book.volumeInfo?.title || book.title,
            author: book.volumeInfo?.authors?.[0] || book.author,
            category: book.volumeInfo?.categories?.[0] || book.category
        };

        // Check if the book already exists in favData
        const isDuplicate = favData.some(item => item.title === newData.title);

        if (!isDuplicate) {
            // Update favData with the new book
            setFavData(prev => [...prev, newData]);
        } else {
            console.log('Item already exists in favorites.');
        }
    };

    return (
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
            <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img
                    src={thumbnailUrl}
                    alt="card-image"
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="p-6">
                <h4 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {book.volumeInfo?.title || book.title}
                </h4>
                <h5>{(book.volumeInfo?.authors && book.volumeInfo.authors[0]) || book.author}</h5>
                <h6>{(book.volumeInfo?.categories && book.volumeInfo.categories[0]) || book.category}</h6>
            </div>
            <div className="p-6 pt-0">
                <button
                    onClick={addToFav}
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mx-2"
                    type="button"
                >
                    Add to Favourite
                </button>
                <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                    onClick={onSelect}
                >
                    Read More
                </button>
            </div>
        </div>
    );
}

export default Card;
