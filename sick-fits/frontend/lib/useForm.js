import { useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { name, value, type } = e.target;
    if (type === 'number') {
      value = parseFloat(value);
    }
    if (type === 'file') {
      value[0] = e.target.file;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }
  return {
    inputs,
    handleChange,
  };
}
