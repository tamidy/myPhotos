import axios from "axios";

//RESOURCES
// https://www.javaguides.net/2020/07/spring-boot-react-js-crud-example-tutorial-react-app-frontend-part2.html
//https://www.bezkoder.com/react-typescript-login-example/

const SPRING_API_URL = "http://localhost:3000/api/auth/";

class AccountServices {
  /* POST {email, password} and saves JWT to Local Storage */
  login(email: string, password: string) {
    console.log(
      "LOGIN account in ACCOUNT SERVICES => " +
        JSON.stringify({ email, password })
    );
    return axios
      .post(SPRING_API_URL + "login", { email, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  /* removes JWT from local storage */
  logout() {
    localStorage.removeItem("user");
  }

  /* POST {name, email, password} */
  signup(name: string, email: string, password: string) {
    console.log(
      "SINGUP account in ACCOUNT SERVICES => " +
        JSON.stringify({ name, email, password })
    );
    return axios.post(SPRING_API_URL + "signup", {
      name,
      email,
      password,
    });
  }

  /* Gets stored user information (including JWT) */
  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

export default new AccountServices();
