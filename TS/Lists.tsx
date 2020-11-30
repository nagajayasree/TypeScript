import * as React from "react";

export const Users: React.FC<{
  users: [{ id: number; name: string }];
}> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <p>
          Id:{user.id},Name:{user.name}
        </p>
      ))}
    </div>
  );
};
