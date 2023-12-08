// components/ReadMore.tsx

import React, { useState } from 'react';

interface ReadMoreProps {
 text?: string
  wordsLimit: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, wordsLimit }) => {
  const [showMore, setShowMore] = useState(false);

  const truncatedContent = text?.split(' ').slice(0, wordsLimit).join(' ');
 // const shouldShowButton = text?.split(' ').length > wordsLimit;
  const shouldShowButton = (text ?? '').split(' ').length > wordsLimit;


  return (
    <div>
      <p>{showMore ? text : truncatedContent}{shouldShowButton && !showMore && '... '}
        {shouldShowButton && (
           <span style={{ color: 'red', cursor: 'pointer', textDecoration: 'none' }} onClick={() => setShowMore(!showMore)}>
           {showMore ? 'Read Less' : 'Read More'}
         </span>
        )}
      </p>
    </div>
  );
};

export default ReadMore;
