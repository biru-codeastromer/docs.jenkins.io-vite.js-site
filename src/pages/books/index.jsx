import React, { useEffect, useState } from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import { loadYamlData } from '../../utils/loadData';

export default function BooksPage() {
  const theme = useTheme();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const bookModules = import.meta.glob('../../../public/data/books/*.yml');
        const bookPaths = Object.keys(bookModules);
        
        const bookData = await Promise.all(
          bookPaths.map(async (path) => {
            const fileName = path.split('/').pop();
            return loadYamlData(`books/${fileName}`);
          })
        );

        const sortedBooks = bookData.sort((a, b) => {
          if (b.publication_year !== a.publication_year) {
            return b.publication_year - a.publication_year;
          }
          return a.title.localeCompare(b.title);
        });

        setBooks(sortedBooks);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 500 }}>
        Loading books...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography variant="body1" sx={{ 
        fontSize: '1rem', 
        fontWeight: 500, 
        color: theme.palette.error.main 
      }}>
        Error loading books: {error}
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: '1060px',
        margin: '0 auto',
        padding: { xs: 2, sm: 4 },
        fontFamily:
          '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        lineHeight: 1.65,
        color: theme.palette.text.primary,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          fontSize: '2rem',
          mb: '1.5rem',
        }}
      >
        Jenkins Related Books
      </Typography>

      {books.map((book) => (
        <Box 
          key={`${book.publication_year}-${book.title}`} 
          sx={{ 
            mb: 4,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 3,
          }}
        >
          {book.image && (
            <Box sx={{ 
              flexShrink: 0,
              width: { xs: '100%', sm: '110px' },
              order: { xs: -1, sm: 1 },
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'flex-start' },
              alignItems: 'center'
            }}>
              <img
                src={`/assets/books/${book.image}`}
                alt={book.title}
                style={{
                  width: '110px',
                  height: 'auto',
                  maxWidth: '100%',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                loading="lazy"
              />
            </Box>
          )}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h5"
              sx={{
                fontWeight: 650,
                fontSize: '1.5rem',
                mb: 1,
              }}
            >
              {book.url ? (
                <Link href={book.url} target="_blank" rel="noopener noreferrer" underline="hover">
                  {book.title}
                </Link>
              ) : (
                book.title
              )}
            </Typography>

            {(book.author || book.authors) && (
              <Typography variant="body1" sx={{ mb: 1, fontSize: '1rem', fontWeight: 500 }}>
                <strong>Authored by </strong>
                <strong>{book.author || book.authors}</strong>
              </Typography>
            )}

            {book.publisher && (
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
                <strong>Published by </strong> 
                <strong>{book.publisher}, {book.publication_year}</strong>
              </Typography>
            )}

            {book.description && (
              <Typography variant="body1" sx={{ mb: 2, fontSize: '1rem', fontWeight: 500 }}>
                {book.description}
              </Typography>
            )}

            {book.quote && (
              <Box 
                component="blockquote" 
                sx={{
                  borderLeft: `4px solid ${theme.palette.divider}`,
                  pl: 2,
                  ml: 0,
                  fontStyle: 'italic',
                }}
              >
                <Typography variant="body1" sx={{ fontSize: '1rem', fontWeight: 500 }}>
                  {book.quote}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
