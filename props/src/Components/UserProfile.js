function UserProfile({ user }) {
  return (
    <div>
      <UserName name={user.name} />
      <UserAge age={user.age} />
    </div>
  );
}

function UserName({ name }) {
  return <h1>{name}</h1>;
}

function UserAge({ age }) {
  return <p>{age} years old</p>;
}

<UserProfile User={((UserAge = "20"), (UserName = "maria"))} />;
