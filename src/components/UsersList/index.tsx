/* eslint-disable no-empty-pattern */
import { useEffect, useState } from "react";
import { getUsers } from "../../utils/api/api";
import { Users } from "../../types/product";
import { UserItem } from "../UserItem";
import { HomeHeaderDetailsSearch, StyledUsersList } from "./style";
type Props = {};

export default function UserList({}: Props) {
  const [users, setUsers] = useState<Users[]>([]);
  useEffect(() => {
    async function getUser() {
      const data = await getUsers();
      setUsers(data);
    }
    getUser();
  }, []);
  const [filterInput, setfilterInput] = useState("");
  return (
    <StyledUsersList>
      <HomeHeaderDetailsSearch>
        <input
          value={filterInput}
          type="text"
          onChange={(event) => setfilterInput(event.target.value)}
          placeholder="Procure pelo nome"
        />
      </HomeHeaderDetailsSearch>
      {users.length === 0 ? (
        <p>Nenhum usuário encontrado</p>
      ) : (
        users
          .filter((user) =>
            user.name.toLowerCase().includes(filterInput.toLowerCase())
          )
          .map((user) => (
            <UserItem
              userId={user.id as string}
              key={user.id}
              name={user.name}
              email={user.email}
              image={user.image}
            />
          ))
      )}
    </StyledUsersList>
  );
}
