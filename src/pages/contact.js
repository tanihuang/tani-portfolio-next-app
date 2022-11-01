import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";

const people = [
  {
    name: 'Tani'
  },
  {
    name: 'Bitch'
  },
]

const Contact = () => {
  const [resultSum, setResultSum] = useState(0);
  const [resultMinus, setResultMinus] = useState(0);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const [repo, setRepo] = useState([])

  const plus = () => {
    setResultSum(Number(num1) + Number(num2));
  }

  const minus = () => {
    setResultMinus(Number(num1) - Number(num2));
  }

  const handleClick = () => {
    fetch('https://api.github.com/users/tanihuang/repos', {method:"GET"})
      .then(res => res.json())
      .then(data => {
        setRepo(data);
      })
      .catch(e => {
        console.log(e);
      })
  };

  useEffect(() => {
    plus();
    minus();
  }, [num1, num2]);

  return (
    <Layout className='contact'>
      <input type="number" placeholder="num1" onChange={(e) => setNum1(e.target.value)} />
      <input type="number" placeholder="num2" onChange={(e) => setNum2(e.target.value)}/>
      <div>Sum: {resultSum}</div>
      <div>Minus: {resultMinus}</div>
      <button onClick={handleClick}>get repo</button>
      {
        repo.map((item) => {
          return <div key={item.name}>{item.name}</div>
        })
      }
    </Layout>
  )
}

export default Contact;
