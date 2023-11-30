import React from "react";

export default function ProfileCard({ person }) {
  return (
    <div>
      <h1>Person's name is {person.name}</h1>
      <p>Person's age is {person.age}</p>
      <p>Person's bio: {person.bio}</p>
    </div>
  );
}

<ProfileCard
  person={{
    name: "Erkan",
    age: 23,
    bio: "i am learning react.js and studying computer engineering",
  }}
/>;
