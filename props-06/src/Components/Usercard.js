function UserCard({ user }) {
  return (
    <div>
      <h1>user's name is {user.name}</h1>
      <p>user's email is {user.email}</p>
      <h2>
        hi! i am {user.name} and my email is: {user.email}
      </h2>
    </div>
  );
}
<UserCard user={{ name: "erkan", email: "erkanmurat0632@gmail.com" }} />;
{
  /* UserCard komponentine user nesnesini props olarak verdik */
}
