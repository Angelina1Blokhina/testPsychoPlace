import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div itemScope itemType="http://schema.org/Question" onClick={handleToggle} style={{ cursor: 'pointer' }}>
      <h2 itemProp="name">{question}</h2>
      <div>
        {expanded ? (
          <div itemProp="acceptedAnswer" itemScope itemType="http://schema.org/Answer">
            <meta itemProp="upvoteCount" content="3" />
            <div itemProp="text">{answer}</div>
          </div>
        ) : null}
      
      </div>
    </div>
  );
};

export default FaqItem;

