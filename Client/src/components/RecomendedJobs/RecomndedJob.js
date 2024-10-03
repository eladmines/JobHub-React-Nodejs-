import React from 'react';

export function RecommendedJob({ job }) {
  return (
    <div className="post-item clearfix">
      <img src={job.logo} alt={job.company} />
      <h4><a href="#">{job.company}</a></h4>
      <p>{job.description}</p>
    </div>
  );
}
