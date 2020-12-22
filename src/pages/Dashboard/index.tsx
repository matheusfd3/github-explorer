import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/32546209?s=460&u=547c09d96fe00e46169e4635e8daa15ab9d397a8&v=4"
            alt="Matheus Ferreira"
          />
          <div>
            <strong>test</strong>
            <p>description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/32546209?s=460&u=547c09d96fe00e46169e4635e8daa15ab9d397a8&v=4"
            alt="Matheus Ferreira"
          />
          <div>
            <strong>test</strong>
            <p>description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars2.githubusercontent.com/u/32546209?s=460&u=547c09d96fe00e46169e4635e8daa15ab9d397a8&v=4"
            alt="Matheus Ferreira"
          />
          <div>
            <strong>test</strong>
            <p>description</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
