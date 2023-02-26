import { DateTime } from "luxon";
import { NavLink } from "react-router-dom";
import UsersList from "../../components/UsersList";
import * as S from "./style";

const Users = () => {
  const date = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });
  return (
    <S.Home>
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>Visual Users</S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>{date}</S.HomeHeaderDetailsDate>
            </div>
            <NavLink to={"/register"}>Criar Usuário</NavLink>
            <NavLink
              to={"/login"}
              onClick={() => localStorage.removeItem("accessToken")}
            >
              Logout
            </NavLink>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Usuários</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
            <UsersList />
          </S.HomeProductList>
        </div>
      </S.HomeContent>
    </S.Home>
  );
};

export default Users;
