import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const books = [
  { 
    title: 'The Holy Bible', 
    description: 'Religious text of Christianity, considered sacred and canonical.' 
  },
  { 
    title: 'Quotations from Chairman Mao', 
    description: 'Collection of statements from speeches and writings by Mao Zedong.' 
  },
  { 
    title: 'Harry Potter series', 
    description: 'Fantasy novels by J.K. Rowling, following the life of a young wizard.' 
  },
  { 
    title: 'The Lord of the Rings', 
    description: 'High-fantasy novel written by J.R.R. Tolkien, set in Middle-earth.' 
  },
  { 
    title: 'To Kill a Mockingbird', 
    description: 'Novel by Harper Lee, dealing with racial injustice and moral growth.' 
  }
];

const BookList = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Most Influential Books of All Time
      </Typography>
      <List>
        {books.map((book, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText
                primary={book.title}
                secondary={book.description}
              />
            </ListItem>
            {index < books.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default BookList;
