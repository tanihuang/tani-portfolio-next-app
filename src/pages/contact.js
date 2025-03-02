import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Container from 'react-bootstrap/Container';

const Contact = () => {
  const [resultSum, setResultSum] = useState(0);
  const [resultMinus, setResultMinus] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [repo, setRepo] = useState([]);

  const handleClick = () => {
    fetch('https://api.github.com/users/tanihuang/repos', { method: 'GET' })
      .then((res) => res.json())
      .then((data) => {
        setRepo(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const number1 = Number(num1);
    const number2 = Number(num2);
    setResultSum(number1 + number2);
    setResultMinus(number1 - number2);
  }, [num1, num2]);

  return (
    <Layout>
      <Container className="contact">
        <input
          type="number"
          placeholder="num1"
          onChange={(e) => setNum1(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="num2"
          onChange={(e) => setNum2(Number(e.target.value))}
        />
        <div>Sum: {resultSum}</div>
        <div>Minus: {resultMinus}</div>
        <button type="button" onClick={handleClick}>Get Repositories</button>
        {repo.length > 0 ? (
          repo.map((item) => <div key={item.id}>{item.name}</div>)
        ) : (
          <p>No repositories found.</p>
        )}
      </Container>
    </Layout>
  );
};

export default Contact;
