import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaTimes, FaPython, FaJava, FaJsSquare, FaPhp, FaHtml5, FaNodeJs, FaDatabase, FaCss3Alt } from 'react-icons/fa';
import './button.css';
export function Language({language,handleRemoveLanguage }) {
    
  const languageIcons = {
    Python: FaPython,
    Java: FaJava,
    JavaScript: FaJsSquare,
    NodeJS: FaNodeJs,
    PHP: FaPhp,
    HTML: FaHtml5,
    SQL: FaDatabase,
    PostgreSQL: FaDatabase,
    CSS: FaCss3Alt,
  };

  const getLanguageIcon = (language) => {
    const LanguageIcon = languageIcons[language];
    return LanguageIcon ? <LanguageIcon style={{ marginRight: '5px' }} /> : null;
  };

  return (
    <div>
        <Badge key={language} className="custom-badge">
          {getLanguageIcon(language)}
          {language}
          <FaTimes
            style={{ marginLeft: '10px', cursor: 'pointer' }}
            onClick={() => handleRemoveLanguage(language)} 
          />
        </Badge>
  
    </div>
  );
}
