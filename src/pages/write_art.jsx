import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './write_art.css';


// Lexical редактор
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from 'lexical';

const Toolbar = () => {
  const [editor] = useLexicalComposerContext();
  const [showFonts, setShowFonts] = useState(false);
  const [showSizes, setShowSizes] = useState(false);

 const applyStyle = (style, value = null) => {
  editor.update(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const nodes = selection.getNodes();
      for (const node of nodes) {
        if (node.__type === 'text') {
          if (style === 'font') {
            node.setStyle(`font-family: ${value}`);
          } else if (style === 'size') {
            const sizeMap = {
              small: '12px',
              normal: '16px',
              large: '20px',
              huge: '24px',
            };
            node.setStyle(`font-size: ${sizeMap[value]}`);
          } else {
            node.toggleFormat?.(style);
          }
        }
      }
    }
  });
};

  // Варианты шрифтов
  const fonts = [
    { name: 'Arial', value: 'Arial, sans-serif' },
    { name: 'Times New Roman', value: '"Times New Roman", serif' },
    { name: 'Courier New', value: '"Courier New", monospace' },
    { name: 'Georgia', value: 'Georgia, serif' },
    { name: 'Verdana', value: 'Verdana, sans-serif' }
  ];

  // Варианты размеров
  const sizes = [
    { name: 'Маленький', value: 'small' },
    { name: 'Обычный', value: 'normal' },
    { name: 'Большой', value: 'large' },
    { name: 'Огромный', value: 'huge' }
  ];

  return (
    <div className="editor-toolbar">
      {/* Кнопки форматирования */}
      <button onClick={() => applyStyle('bold')} title="Жирный">
        <strong>Ж</strong>
      </button>
      <button onClick={() => applyStyle('italic')} title="Курсив">
        <em>К</em>
      </button>
      <button 
        onClick={() => applyStyle('underline')} 
        title="Подчеркивание"
        className="underline-btn"
      >
        <u>Ч</u>
      </button>

      {/* Выбор шрифта */}
      <div className="toolbar-dropdown">
        <button 
          onClick={() => setShowFonts(!showFonts)}
          title="Шрифт"
        >
          Шрифт ▼
        </button>
        {showFonts && (
          <div className="dropdown-menu">
            {fonts.map(font => (
              <button
                key={font.value}
                onClick={() => {
                  applyStyle('font', font.value);
                  setShowFonts(false);
                }}
                style={{ fontFamily: font.value }}
              >
                {font.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Выбор размера */}
      <div className="toolbar-dropdown">
        <button 
          onClick={() => setShowSizes(!showSizes)}
          title="Размер"
        >
          Размер ▼
        </button>
        {showSizes && (
          <div className="dropdown-menu">
            {sizes.map(size => (
              <button
                key={size.value}
                onClick={() => {
                  applyStyle('size', size.value);
                  setShowSizes(false);
                }}
              >
                {size.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Editor = ({ value, onChange }) => {
  const initialConfig = {
    namespace: 'Editor',
    theme: {
      text: {
        bold: 'text-bold',
        italic: 'text-italic',
        underline: 'text-underline',
        'font-arial': 'font-arial',
        'font-times': 'font-times',
        'font-courier': 'font-courier',
        'font-georgia': 'font-georgia',
        'font-verdana': 'font-verdana',
        'size-small': 'size-small',
        'size-normal': 'size-normal',
        'size-large': 'size-large',
        'size-huge': 'size-huge'
      }
    },
    onError(error) {
      console.error(error);
    }
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Toolbar />
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-content" />}
          placeholder={<div className="editor-placeholder"></div>}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
      </div>
    </LexicalComposer>
  );
};

// Остальной код компонента Writeart остается без изменений

const Writeart = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAge, setSelectedAge] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const categories = ["Искусство", "Еда", "Наука", "Видеоигры", "РГПУ", "Тревел"];
  const ageRestrictions = ["0+", "6+", "12+", "16+", "18+"];

  const handleCategoryClick = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      if (selectedCategories.length < 3) {
        setSelectedCategories([...selectedCategories, category]);
      }
    }
  };

  const handleAgeClick = (age) => {
    setSelectedAge(selectedAge === age ? null : age);
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="write-art-container">
      {/* Навигация */}
      <div className="write-art-nav">
        <img src={`${import.meta.env.BASE_URL}logo_black.jpg`} />


                
        <div className="write-art-nav-links">
          <button className="nav-link">Статьи</button>
          <button className="nav-link">Авторы</button>
          <button className="nav-link">Конспекты</button>
        </div>
        
        <div className="write-art-auth">
          <button className="auth-link" onClick={() => navigate("/main")}>Выйти</button>
        </div>
      </div>

      {/* Обложка статьи */}
      <div className="article-cover" style={{ backgroundImage: coverImage ? `url(${coverImage})` : 'linear-gradient(to right, #1a73e8, #0d47a1)' }}>
        <input
          type="file"
          id="cover-upload"
          accept="image/*"
          onChange={handleCoverImageChange}
          style={{ display: 'none' }}
        />
        <label htmlFor="cover-upload" className="cover-upload-label">
          {coverImage ? 'Изменить обложку' : 'Добавить обложку'}
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введите заголовок статьи"
          className="cover-title-input"
        />
      </div>

      {/* Основное содержимое */}
      <div className="write-art-content-wrapper">
        {/* Левая колонка */}
        <div className="write-art-sidebar">
          <div className="avatar-wrapper">
            <img 
              src={`${import.meta.env.BASE_URL}avatar.jpg`} 
              alt="Avatar" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
            />
          </div>


          
          <h3 className="user-name">Черепанова Мария</h3>
          
          <div className="write-art-categories">
            <p className="section-title">Выберите до 3 вариантов</p>
            <div className="categories-container">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategories.includes(category) ? 'selected' : ''}`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="write-art-age">
            <p className="section-title">Выберите ограничение по возрасту</p>
            <div className="age-container">
              {ageRestrictions.map(age => (
                <button
                  key={age}
                  className={`age-btn ${selectedAge === age ? 'selected' : ''}`}
                  onClick={() => handleAgeClick(age)}
                >
                  {age}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="write-art-main">
          <div className="write-art-section">
            <h5 className="section-title">Пересказ статьи за 1 минуту</h5>
            <Editor value={content} onChange={setContent} />
          </div>

          <div className="write-art-section">
            <h5 className="section-title">Ваша статья</h5>
            <Editor value={content} onChange={setContent} />
          </div>

          <button 
            className="write-art-publish"
            onClick={() => navigate("/mainreg")}
          >
            Опубликовать
          </button>
        </div>
      </div>
    </div>
  );
};

export default Writeart;