// LinkedInPostCreation.tsx
import React from 'react';

interface LinkedInPostCreationProps {
  content: string;
  onContentChange: (newContent: string) => void;
}

const LinkedInPostCreation: React.FC<LinkedInPostCreationProps> = ({ content, onContentChange }) => {
  return (
    <div className="relative">
      <textarea
        className="w-full min-h-[300px] resize-none max-h-[700px] border border-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline-none focus:outline-none clip-content"
        defaultValue={content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="What do you want to talk about?"
      />
    </div>
  );
};

export default LinkedInPostCreation;
