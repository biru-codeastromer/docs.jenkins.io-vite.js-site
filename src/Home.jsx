import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { loadYamlData } from './utils/loadData';
import DownloadBanner from './components/home/DownloadBanner';
import ProjectCarousel from './components/home/ProjectCarousel';
import FeatureList from './components/home/FeatureList';
import VideoSection from './components/home/VideoSection';
import BlogsSection from './components/home/BlogsSection';
import SponsorsBlock from './components/home/SponsorsBlock';
import ThankYouNote from './components/home/ThankYouNote';

export default function Home() {
  const [carouselData, setCarouselData] = useState([]);
  const [supportersData, setSupportersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const loadData = async () => {
      try {
        const [carousel, supporters] = await Promise.all([
          loadYamlData('indexpage/carousel.yml'),
          loadYamlData('indexpage/supporters.yml')
        ]);
        setCarouselData(carousel || []);
        setSupportersData(supporters || []);
      } catch (error) {
        console.error('Error loading homepage data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Download Banner */}
      <DownloadBanner />

      {/* Project Carousel */}
      <ProjectCarousel slides={carouselData} />

      {/* Feature List */}
      <FeatureList />

      {/* Video Section */}
      <VideoSection />

      {/* Blogs Section */}
      <BlogsSection />

      {/* Sponsors Block */}
      <SponsorsBlock supporters={supportersData} />

      {/* Thank You Note */}
      <ThankYouNote />
    </Box>
  );
}
