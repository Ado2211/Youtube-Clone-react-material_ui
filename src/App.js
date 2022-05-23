import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './components/Feed';
import Navbar from './components/Navbar';
import { Box } from '@mui/material';
import VideoDetail from './components/VideoDetail';
import SearchFeed from './components/SearchFeed';
import './app.css';

const App = () => {  
  return (
    <Router>
      <Box sx={{ p: 1 }}>
        <Navbar />
        <Routes>
          <Route exact path='/' component={Feed} />
          <Route path='/video-details/:id' component={VideoDetail} />
          <Route path='/search' component={SearchFeed} />
        </Routes>
      </Box>
    </Router>
  )
};

export default App;
