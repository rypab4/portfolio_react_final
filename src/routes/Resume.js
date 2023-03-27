import React from 'react';
import { Nav } from 'react-bootstrap';
import resume from '../assets/resume.pdf';

const Resume = () => {
  return (
    <Nav>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href={resume} download>Resume</Nav.Link>
    </Nav>
  );
}

export default Resume;