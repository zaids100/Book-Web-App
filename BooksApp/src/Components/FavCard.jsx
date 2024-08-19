import React from "react";

function FavCard({ book, setFavData, favData, redirect }) {
    const thumbnailUrl =
        book.volumeInfo?.imageLinks?.thumbnail ||
        book.thumbnailUrl ||
        "https://via.placeholder.com/150";

    const removeFromFav = () => {
        // Filter out the current book from favData
        const updatedFavData = favData.filter(
            (item) => item.title !== (book.volumeInfo?.title || book.title)
        );
        setFavData(updatedFavData);
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
                    {book.volumeInfo?.title || book.title || 'Title Not Available'}
                </h4>
                <h5>
                    {(book.volumeInfo?.authors &&
                        book.volumeInfo.authors[0]) ||
                        book.author || 'Author Not Available'}
                </h5>
                <h6>
                    {(book.volumeInfo?.categories &&
                        book.volumeInfo.categories[0]) ||
                        book.category || 'Category Not Available'}
                </h6>
            </div>
            <div className="p-6 pt-0">
                <button
                    onClick={removeFromFav}
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mx-2"
                    type="button"
                >
                    Remove from Favourites
                </button>
                <div className="flex justify-end mt-4">
                    <a
                        href={redirect}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    >
                        Read Online
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FavCard;
