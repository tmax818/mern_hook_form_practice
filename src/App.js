import useInputState from "./hooks/useInputState";
import Input from "./components/Input";

function App() {
  const [firstName, setFirstName, resetFirstName] = useInputState("")
  const [lastName, setLastName, resetLastName] = useInputState("")
  return (
    <fieldset >

        <Input title={"first Name"} value={firstName} setValue={setFirstName}/>
        <Input title={"last Name"} value={lastName} setValue={setLastName}/>
      <input type="submit" value="test" onClick={() => {resetFirstName(); resetLastName()}} />

      first Name: {firstName}
      last Name: {lastName}
    </fieldset>
  );
}

export default App;
