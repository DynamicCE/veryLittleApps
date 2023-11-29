function Welcome(props) {
  return <p>Welcome, the message is {props.message}</p>;
}

<Welcome message="Hos Geldiniz Today! <3" />;

function Greeting({ name }) {
  return <p>hello, we were waiting for you {name}</p>;
}

<Welcome message="Hos Geldiniz Today! <3" />;
<Greeting name="erkan" />;
