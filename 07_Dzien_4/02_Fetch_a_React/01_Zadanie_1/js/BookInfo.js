import React, { useEffect, useState } from "react";

export const BookInfo = ({ isbn }) => {
	const [bookTitle, setBookTitle] = useState("");
	const [bookYear, setBookYear] = useState("");

	useEffect(() => {
		fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
			.then((res) => res.json())
			.then((response) => {
				setBookTitle(response.items[0].volumeInfo.title);
				setBookYear(response.items[0].volumeInfo.publishedDate);
			});
	}, []);

	return (
		<h1>
			{bookTitle} ({bookYear})
		</h1>
	);
};