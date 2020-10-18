import * as React from "react";
interface Props {
  //   name: string;
  //   city: string;
}

const UseEffectComp: React.FC<Props> = ({}) => {
  const [name, setName] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onAddrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  React.useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component will be unmounted");
    };
  }, []);

  React.useEffect(() => {
    console.log(`Any state changed Name: ${name},Address:${address}`);
  });

   React.useEffect(() => {
    if (name || address) {
      console.log(`Name Changed: ${name}`);
      console.log(`Address Changed:${address}`);
    }
  }, [name, address]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={onNameChange}
      />
      <input
        type="text"
        placeholder="address"
        value={address}
        onChange={onAddrChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UseEffectComp;
