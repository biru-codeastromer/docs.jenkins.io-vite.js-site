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
        const bookFiles = [
          'books/Hands-on_Pipeline_as_YAML_with_Jenkins.yml',
          'books/integrating-php-projects-with-jenkins.yml',
          'books/Jenkins_Essentials.yml',
          'books/jenkins-the-definitive-guide-continuous_integration_for_the_masses.yml',
          'books/jenkins2-up-and-running.yml',
          'books/Learning_Continuous_Integration_with_Jenkins.yml',
          'books/Mastering_Jenkins.yml'
        ];

        const bookData = await Promise.all(
          bookFiles.map(file => loadYamlData(file))
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
              order: { xs: -1, sm: 1 },
              display: 'flex',
              justifyContent: 'center'
            }}>
              <img
                src={`/assets/books/${book.image}`}
                alt={book.title}
                width={110}
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