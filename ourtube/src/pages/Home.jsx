import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import axios from "axios";
axios.defaults.baseURL = '/api';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    }
    fetchVideos();
  }, [type]);

  return (
    <Container>
      { videos.map((video) => (
        <Card key={video.id} video={video}/>
      ))}
    </Container>
  );
};

export default Home;
