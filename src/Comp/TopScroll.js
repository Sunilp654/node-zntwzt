import { useState } from 'react';
import { Button } from 'react-bootstrap';

function TopScroll() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <Button
      className="Topscroll"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      TOP
    </Button>
  );
}

export default TopScroll;
