import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Card from './Components/Card';
import FavCard from './Components/FavCard'; // Import FavCard component
import DescriptionBox from './Components/DescriptionBox';

function App() {
    const [data, setData] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [favClicked, setFavClicked] = useState(false);
    const [favData, setFavData] = useState([]);

    useEffect(() => {
        if (selectedBook) {
            // Fetch details for the selected book if needed
            // Example: fetchBookDetails(selectedBook.id);
        }
    }, [selectedBook]); // Run effect when selectedBook changes

    const handleBookSelect = (book) => {
        setSelectedBook(book);
    };

    const toggleFavourites = () => {
        setFavClicked(!favClicked);
    };

    return (
        <>
            <Header setData={setData} toggleFavourites={toggleFavourites} favClicked={favClicked} />
            <div className="container mx-auto py-8 px-4 bg-black">
                {!selectedBook ? (
                    <div className="card-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">
                        {(favClicked ? favData : data).map((book, id) => (
                            // Conditional rendering based on favClicked state
                            favClicked ? (
                                <FavCard
                                    key={id}
                                    book={book}
                                    setFavData={setFavData}
                                    favData={favData}
                                    redirect={book.volumeInfo?.previewLink || '#'} // Example fallback link
                                />
                            ) : (
                                <Card
                                    key={id}
                                    book={book}
                                    onSelect={() => handleBookSelect(book)}
                                    setFavData={setFavData}
                                    favData={favData}
                                />
                            )
                        ))}
                    </div>
                ) : (
                    <DescriptionBox
                        title={selectedBook.volumeInfo.title}
                        author={selectedBook.volumeInfo.authors?.[0]}
                        category={selectedBook.volumeInfo.categories?.[0]}
                        description={selectedBook.volumeInfo.description || "Description not available"}
                        imageUrl={selectedBook.volumeInfo.imageLinks?.thumbnail}
                        publishDate={selectedBook.volumeInfo.publishedDate}
                        publisher={selectedBook.volumeInfo.publisher}
                        onClose={() => setSelectedBook(null)}
                        redirect={selectedBook.volumeInfo?.previewLink || '#'} // Example fallback link
                    />
                )}
            </div>
        </>
    );
}

export default App;
