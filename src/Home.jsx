import React from 'react';
import { Typography, Box, Link } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Jenkins Documentation
      </Typography>
      <Typography paragraph>
        Welcome to the Jenkins documentation site
      </Typography>
      <Typography>
        <Link href="/project/roadmap" variant="body1">
          View Roadmap
        </Link>
      </Typography>
      <Typography>
        <Link href="/download" variant="body1">
          Download Jenkins
        </Link>
      </Typography>
      <Typography>
        <Link href="/events" variant="body1">
          Events
        </Link>
      </Typography>
      <Typography>
        <Link href="/books" variant="body1">
          Books
        </Link>
      </Typography>
      <Typography>
        <Link href="/press" variant="body1">
          Press Information
        </Link>
      </Typography>
      <Typography>
        <Link href="/awards" variant="body1">
          Awards
        </Link>
      </Typography>
      <Typography>
        <Link href="/chat" variant="body1">
          Chat
        </Link>
      </Typography>
      <Typography>
        <Link href="/project/conduct" variant="body1">
          Code of Conduct
        </Link>
      </Typography>
      <Typography>
        <Link href="/artwork" variant="body1">
          Artwork
        </Link>
      </Typography>
    </Box>
  );
}

