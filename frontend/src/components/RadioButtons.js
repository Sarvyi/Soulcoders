import React, { useState } from 'react';

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState('');

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
  };

  return (
    <div className="flex items-center">
      <label className="mr-4">
        <input
          type="radio"
          value="english"
          checked={currentLanguage === 'english'}
          onChange={handleLanguageChange}
          className="mr-2"
        />
        English
      </label>
      <label className="mr-4">
        <input
          type="radio"
          value="spanish"
          checked={currentLanguage === 'spanish'}
          onChange={handleLanguageChange}
          className="mr-2"
        />
        Spanish
      </label>
      <label>
        <input
          type="radio"
          value="french"
          checked={currentLanguage === 'french'}
          onChange={handleLanguageChange}
          className="mr-2"
        />
        French
      </label>
    </div>
  );
};

export default LanguageSelector;
