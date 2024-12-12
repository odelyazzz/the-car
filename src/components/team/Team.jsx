import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Артём Карлюка',
      role: 'Тимлид',
      description: 'Отвечает за координацию команды и принятие ключевых решений.',
      avatar: '/avatars/1.jpg',
    },
    {
      name: 'Ярослав Биленко',
      role: 'Фронтенд-разработчик',
      description: 'Создает красивые и удобные интерфейсы для пользователей.',
      avatar: '/avatars/2.jpg',
    },
    {
      name: 'Денис Саенко',
      role: 'Копирайтер',
      description: 'Пишет тексты, которые привлекают внимание и удерживают читателя.',
      avatar: '/avatars/3.jpg',
    },
    {
      name: 'Иван Довганич',
      role: 'Копирайтер',
      description: 'Занимается созданием контента и редактированием материалов.',
      avatar: '/avatars/4.jpg',
    },
  ];

  return (
      <div className="team_main">
        <h2 className="team_title">Наша команда</h2>
        <div className="team_members">
          {teamMembers.map((member, index) => (
              <div className="team_member" key={index}>
                <div className="team_avatar" style={{ backgroundImage: `url(${member.avatar})` }}>
                </div>
                <h3 className="team_name">{member.name}</h3>
                <p className="team_role">{member.role}</p>
                <p className="team_description">{member.description}</p>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Team;
