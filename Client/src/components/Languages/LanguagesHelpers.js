


export const getLanguageIcon = (language) => {
    const LanguageIcon = languageIcons[language];
    return LanguageIcon ? <LanguageIcon style={{ marginRight: '5px' }} /> : null;
  };

export const handleAddLanguage = () => {
    if (newLanguage && !validForm.Languages.includes(newLanguage)) {
      setValidForm((prevValidForm) => ({
        ...prevValidForm,
        Languages: [...prevValidForm.Languages, newLanguage],
      }));
      setNewLanguage('');
    } else {
      console.warn('Language already added or empty');
    }
  };

export const handleRemoveSkill = (languageToRemove) => {
    setValidForm((prevValidForm) => ({
      ...prevValidForm,
      Languages: prevValidForm.Languages.filter((language) => language !== languageToRemove),
    }));
  };