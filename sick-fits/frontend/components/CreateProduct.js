import { useState } from 'react';

export default function CreateProduct() {
  const [Name, setName] = useState('Sadik');
  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={Name}
        />
      </label>
    </form>
  );
}
