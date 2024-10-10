const books = [
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/800px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
      "description": "A novel about the serious issues of rape and racial inequality.",
      "genre": "Fiction"
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg/800px-The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg",
      "description": "A story about teenage angst and alienation.",
      "genre": "Fiction"
    },
    {
      "title": "The Kite Runner",
      "author": "Khaled Hosseini",
      "image": "https://upload.wikimedia.org/wikipedia/en/6/62/Kite_runner.jpg",
      "description": "A story of friendship and redemption set against the backdrop of Afghanistan.",
      "genre": "Fiction"
    },
    {
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "image": "https://upload.wikimedia.org/wikipedia/commons/c/c4/TheAlchemist.jpg",
      "description": "A novel about a shepherd's journey to find treasure in Egypt.",
      "genre": "Fiction"
    },
    {
      "title": "Little Fires Everywhere",
      "author": "Celeste Ng",
      "image": "https://upload.wikimedia.org/wikipedia/en/c/c8/Little_Fires_Everywhere.jpg",
      "description": "A story about the intertwined lives of two families in suburban Ohio.",
      "genre": "Fiction"
    },
    {
      "title": "The Seven Husbands of Evelyn Hugo",
      "author": "Taylor Jenkins Reid",
      "image": "https://upload.wikimedia.org/wikipedia/en/1/17/The_Seven_Husbands_of_Evelyn_Hugo.jpg",
      "description": "A novel about a reclusive Hollywood star's glamorous life.",
      "genre": "Fiction"
    },
    {
      "title": "Normal People",
      "author": "Sally Rooney",
      "image": "https://upload.wikimedia.org/wikipedia/en/a/a0/Normal_People_%28Rooney_novel%29.png",
      "description": "A story about the complicated relationship between two young people.",
      "genre": "Fiction"
    },
    {
      "title": "Anxious People",
      "author": "Fredrik Backman",
      "image": "https://upload.wikimedia.org/wikipedia/en/e/e4/Folk_med_%C3%A5ngest.jpg",
      "description": "A poignant tale of a failed bank robber and a group of hostages.",
      "genre": "Fiction"
    },
    {
      "title": "Where the Crawdads Sing",
      "author": "Delia Owens",
      "image": "https://upload.wikimedia.org/wikipedia/en/1/1f/Where_The_Crawdads_Sing_Book_Cover.jpg",
      "description": "A coming-of-age story about a young girl in the marshes of North Carolina.",
      "genre": "Fiction"
    },
    {
      "title": "The Vanishing Half",
      "author": "Brit Bennett",
      "image": "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Vanishing_Half_%28Brit_Bennett%29.png",
      "description": "A multi-generational narrative about two twin sisters.",
      "genre": "Fiction"
    },
    {
      "title": "Daisy Jones & The Six",
      "author": "Taylor Jenkins Reid",
      "image": "https://upload.wikimedia.org/wikipedia/en/7/76/DaisyJonesBookCover.jpg",
      "description": "A fictional oral history of a rock band in the 1970s.",
      "genre": "Fiction"
    },
    {
      "title": "Educated",
      "author": "Tara Westover",
      "image": "https://upload.wikimedia.org/wikipedia/en/1/1f/Educated_%28Tara_Westover%29.png",
      "description": "A memoir about a woman's quest for knowledge despite her upbringing.",
      "genre": "Fiction"
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "image": "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
      "description": "A fantasy novel that follows the adventure of a hobbit named Bilbo Baggins.",
      "genre": "Fantasy"
    },
    {
      "title": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "image": "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
      "description": "A young boy discovers he is a wizard and attends a magical school.",
      "genre": "Fantasy"
    },
    {
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "image": "https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif",
      "description": "An epic fantasy novel about the battle for Middle-earth.",
      "genre": "Fantasy"
    },
    {
      "title": "The Night Circus",
      "author": "Erin Morgenstern",
      "image": "https://upload.wikimedia.org/wikipedia/en/c/c5/TheNightCircus.jpg",
      "description": "A novel about a magical competition between two young illusionists.",
      "genre": "Fantasy"
    },
    {
      "title": "The Midnight Library",
      "author": "Matt Haig",
      "image": "https://upload.wikimedia.org/wikipedia/en/8/87/The_Midnight_Library.jpg",
      "description": "A novel about a library that allows you to explore alternate lives.",
      "genre": "Fantasy"
    },
    {
      "title": "The Chronicles of Narnia",
      "author": "C.S. Lewis",
      "image": "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Chronicles_of_Narnia_box_set_cover.jpg",
      "description": "A series of seven fantasy novels about the land of Narnia.",
      "genre": "Fantasy"
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "image": "https://upload.wikimedia.org/wikipedia/en/5/51/1984_first_edition_cover.jpg",
      "description": "A story set in a totalitarian regime where the state surveils citizens.",
      "genre": "Dystopian"
    },
    {
      "title": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "image": "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg",
      "description": "A novel about a future society where books are banned.",
      "genre": "Dystopian"
    },
    {
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "image": "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg",
      "description": "A dystopian novel that explores the loss of individuality.",
      "genre": "Dystopian"
    },
    {
      "title": "The Handmaid's Tale",
      "author": "Margaret Atwood",
      "image": "https://upload.wikimedia.org/wikipedia/en/1/18/TheHandmaidsTale%281stEd%29.jpg",
      "description": "A novel about a totalitarian society that subjugates women.",
      "genre": "Dystopian"
    },
    {
      "title": "Animal Farm",
      "author": "George Orwell",
      "image": "https://upload.wikimedia.org/wikipedia/commons/f/fb/Animal_Farm_-_1st_edition.jpg",
      "description": "An allegorical novella reflecting events leading up to the Russian Revolution.",
      "genre": "Dystopian"
    },
    {
      "title": "War and Peace",
      "author": "Leo Tolstoy",
      "image": "https://upload.wikimedia.org/wikipedia/commons/a/af/Tolstoy_-_War_and_Peace_-_first_edition%2C_1869.jpg",
      "description": "A Historicalnovel that chronicles the French invasion of Russia.",
      "genre": "Historical"
    },
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/PrideAndPrejudiceTitlePage.jpg/800px-PrideAndPrejudiceTitlePage.jpg",
      "description": "A romantic novel that critiques the British landed gentry.",
      "genre": "Historical"
    },
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "image": "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg",
      "description": "A story about the American Dream and the Roaring Twenties.",
      "genre": "Historical"
    },
    {
      "title": "Wuthering Heights",
      "author": "Emily Brontë",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg/800px-Houghton_Lowell_1238.5_%28A%29_-_Wuthering_Heights%2C_1847.jpg",
      "description": "A tale of passion and revenge set on the Yorkshire moors.",
      "genre": "Historical"
    },
    {
      "title": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lippincott_doriangray.jpg/800px-Lippincott_doriangray.jpg",
      "description": "A novel about vanity and moral corruption.",
      "genre": "Historical"
    }
  ];
  

export default books;
