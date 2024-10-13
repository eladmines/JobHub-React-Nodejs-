import React from 'react';
import { RecommendedJob } from './RecommendedJob'; 

export function RecommendedJobs() {
  const jobs = [
    {
      id: 1,
      company: 'Microsoft',
      description: 'Software Developer to work on cloud-based solutions using .NET and Azure.',
      logo: 'https://www.logo.wine/a/logo/Microsoft_Store/Microsoft_Store-Logo.wine.svg',
    },
    {
      id: 2,
      company: 'Google',
      description: 'Full-stack Developer to build scalable web applications using Python and React.',
      logo: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
    },
    {
      id: 3,
      company: 'Amazon',
      description: 'Backend Developer to design and implement microservices using AWS and Java.',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png',
    },
    {
      id: 4,
      company: 'Meta',
      description: 'Frontend Developer to improve user experience with React and TypeScript.',
      logo: 'https://pngimg.com/uploads/meta/meta_PNG3.png',
    },
    {
      id: 5,
      company: 'Apple',
      description: 'iOS Developer to create innovative mobile applications for the iOS platform.',
      logo: 'https://www.freeiconspng.com/uploads/apple-icon-4.png',
    },
  ];

  return (
    <Card className="mb-4">
      <Card.Body className="">
        <Card.Title>
          Recommended For You <span>| Today</span>
        </Card.Title>
        <div className="news">
          {jobs.map(job => (
            <RecommendedJob key={job.id} job={job} />
          ))}
        </div>
      </Card.Body>
    </Card>

  );
}
